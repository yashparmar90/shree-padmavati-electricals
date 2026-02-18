import re
import os
import urllib.request
import ssl
import json
import html

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def download_file(url, local_path):
    try:
        url = url.replace('&amp;', '&')
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
        print(f"{filepath} not found")
        return

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update bktUrl
    # Old: bktUrl = "https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/"
    # New: bktUrl = "images/" 
    # (assuming images are flat in images/ folder, but original urls might have subfolders)
    # Let's see what img.url looks like.
    
    base_remote_url = "https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/"
    
    # Extract data-value attributes that look like JSON arrays
    # data-value="[{...}]"
    # Need to handle HTML entity encoding if present (e.g. &quot;)
    
    pattern = re.compile(r'data-value=["\'](\[.*?\])["\']')
    matches = pattern.findall(content)
    
    print(f"Found {len(matches)} potential JSON arrays in data-value")
    
    for json_str in matches:
        # Decode html entities
        decoded_json_str = html.unescape(json_str)
        try:
            data = json.loads(decoded_json_str)
            if not isinstance(data, list):
                continue
                
            modified = False
            for item in data:
                if 'url' in item:
                    # Construct full URL
                    raw_url = item['url']
                    full_url = base_remote_url + raw_url
                    
                    # Target local path
                    # We will flatten everything to images/ folder for simplicity
                    filename = os.path.basename(raw_url)
                    local_path = f'images/{filename}'
                    
                    # Download
                    download_file(full_url, local_path)
                    
                    # Update item['url'] to just filename (relative to new bktUrl="images/")
                    item['url'] = filename
                    modified = True
                    
            if modified:
                # Re-serialize and put back into content
                # We need to act on the original match string in content
                # This is tricky because we iterate over matches, not positions.
                # However, the string `json_str` is unique enough? 
                # Or we can just replace the specific substring.
                
                # Careful: json.dumps might formatting differently.
                # But we just need valid JSON.
                # Also need to escape double quotes for HTML attribute if needed.
                
                new_json_str = json.dumps(data).replace('"', '&quot;')
                
                # We replace the original attribute value
                # original: data-value="...json_str..."
                # But we extracted just the value. 
                # Let's replace the EXACT string match of the value.
                # Note: json_str in match might differ from file content if regex normalized something?
                # No, regex extracts exact substring.
                
                content = content.replace(json_str, new_json_str)
                
        except json.JSONDecodeError:
            continue
            
    # 2. Finally update the bktUrl variable in JS
    # Look for: bktUrl = "..."
    content = re.sub(r'bktUrl\s*=\s*["\'][^"\']+["\']', 'bktUrl = "images/"', content)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Updated {filepath}")

if __name__ == "__main__":
    process_file('index.html')
