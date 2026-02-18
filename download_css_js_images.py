import re
import os
import urllib.request
import ssl
from urllib.parse import urlparse
import glob

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def download_file(url, local_path):
    try:
        url = url.replace('&amp;', '&')
        # Handle protocol relative urls //example.com/image.png
        if url.startswith('//'):
            url = 'https:' + url
            
        if os.path.exists(local_path):
            return True
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        print(f"Downloading {url} to {local_path}...")
        
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            with open(local_path, 'wb') as f:
                f.write(response.read())
        return True
    except Exception as e:
        print(f"Failed to download {url}: {e}")
        return False

def process_file(filepath):
    if not os.path.exists(filepath):
        return

    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Regex for CSS url() and general http links in JS
    # CSS: url('http...') or url("http...") or url(http...)
    # JS: "http..." or 'http...'
    
    # We'll just look for http/https followed by image extension
    pattern = re.compile(r'(https?://[a-zA-Z0-9./_%-]+\.(?:jpg|jpeg|png|gif|svg|webp))', re.IGNORECASE)
    
    matches = set(pattern.findall(content))
    if matches:
        print(f"Found {len(matches)} remote images in {filepath}")

    for url in matches:
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path)
        if not filename:
            continue
            
        local_path = f'images/{filename}'
        
        # Download
        download_file(url, local_path)
            
        # Replace in content
        # For CSS/JS, we might be inside a string like "url('...')"
        # We need to be careful not to break syntax.
        # But replacing the URL with relative path `../images/filename` or `images/filename` depends on file location.
        # CSS is in css/, so images are in ../images/
        # JS is in js/, so images are in ../images/
        
        relative_path = f'../images/{filename}'
        
        # Attempt replacement
        content = content.replace(url, relative_path)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == "__main__":
    # Scan CSS
    for filepath in glob.glob('css/*.css'):
        process_file(filepath)
    
    # Scan JS
    for filepath in glob.glob('js/*.js'):
        process_file(filepath)
    
    # Scan HTMLs again just in case (with current directory path)
    # Note: HTMLs are in root, so path is images/filename (no ../)
    # But this script uses ../images/ for everything. 
    # Let's keep this script strictly for CSS/JS subfolders.
