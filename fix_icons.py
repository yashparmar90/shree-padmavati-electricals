import re
import os
import urllib.request
import ssl

# Bypass SSL errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def download_file(url, local_path):
    try:
        if os.path.exists(local_path):
            return
        os.makedirs(os.path.dirname(local_path), exist_ok=True)
        print(f"Downloading {url} to {local_path}...")
        with urllib.request.urlopen(url, context=ctx) as response:
            with open(local_path, 'wb') as f:
                f.write(response.read())
    except Exception as e:
        print(f"Failed to download {url}: {e}")

path = 'website.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Base URL for these assets
base_url = "https://shreepadmavatielectricals.bytecard.in"

# Regex to find /_next/static/media/...
# They look like: /_next/static/media/call.6f157b7e.png
# pattern: /_next/static/media/[^"'\s\)]+
pattern = re.compile(r'/_next/static/media/[^"\'\s\)]+')

matches = set(pattern.findall(content))

for match in matches:
    # match is like /_next/static/media/call.6f157b7e.png
    filename = os.path.basename(match)
    # Remove query string if any (though regex shouldn't catch it if properly bounded, but simple regex might)
    filename = filename.split('?')[0]
    
    # Download
    full_url = base_url + match
    local_path = f'images/icons/{filename}'
    download_file(full_url, local_path)
    
    # Replace in content
    # We need to replace the specific path with local path.
    # Also need to handle URL encoded versions in `url=%2F_next...`
    # The `srcSet` uses `url=%2F_next%2Fstatic%2Fmedia%2Fcall.6f157b7e.png&w=16&q=75`
    
    # 1. Direct replacement
    content = content.replace(match, f'images/icons/{filename}')
    
    # 2. Encoded replacement (simple approach: replace the encoded string)
    encoded_match = match.replace('/', '%2F')
    # The pattern in src is `/_next/image?url=...`
    # We should replace the WHOLE `/_next/image?url=ENCODED_MATCH&...` with the local image?
    # No, `srcset` is complex. 
    # Easiest way: Regex replace `/_next/image\?url=.*?%2F(.*?\.png).*?` with `images/icons/$1`
    
    # Let's try to find the specific files first, then handle the replacement logic below.

# Now handling the `/_next/image?url=...` patterns specifically
# Pattern: `/_next/image?url=` followed by encoded url of the asset
# We want to replace the whole `/_next/image?url=...&...` with just the image path.

def replace_next_image_url(match_obj):
    # match_obj.group(0) is the full src/srcset url
    # We want to extract the filename from it.
    # It usually contains user encoded path like %2F_next%2Fstatic%2Fmedia%2Ffilename.png
    full_str = match_obj.group(0)
    
    # extracting filename
    # search for standard extensions
    m = re.search(r'([a-zA-Z0-9._-]+\.(?:png|jpg|jpeg|svg|webp))', full_str)
    if m:
        filename = m.group(1)
        return f'images/icons/{filename}'
    return full_str

# Replace src="/_next/image?url=..."
content = re.sub(r'/_next/image\?url=[^"\'\s\)]+', replace_next_image_url, content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed icons in website.html")
