import re
import os
import urllib.request
import ssl
from urllib.parse import urlparse

# Bypass SSL errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def download_file(url, local_path):
    try:
        url = url.replace('&amp;', '&') # fix html entities if any
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
        print(f"File {filepath} not found")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to find all http/https image urls
    # Improved regex to handle unquoted URLs and various contexts
    # looking for http/https, followed by characters that are NOT (space, ", ', <, >, )
    # ending with image extension
    pattern = re.compile(r'(https?://[^"\'\s<>)]+\.(?:jpg|jpeg|png|gif|svg|webp))', re.IGNORECASE)
    
    matches = set(pattern.findall(content))
    print(f"Found {len(matches)} remote images in {filepath}")

    for url in matches:
        # Determine local filename
        parsed = urlparse(url)
        filename = os.path.basename(parsed.path)
        if not filename:
            continue
            
        local_path = f'images/{filename}'
        
        # Download
        if download_file(url, local_path):
            # Replace in content
            content = content.replace(url, local_path)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

if __name__ == "__main__":
    process_file('website.html')
