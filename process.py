import os
import re
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

def fix_index():
    path = 'index.html'
    if not os.path.exists(path):
        print(f"{path} not found!")
        return

    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Image fixes
    content = content.replace(
        'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/organization/78011771317767505.jpg',
        'images/shree-padmavati-logo.jpg'
    )
    content = content.replace(
        'https://bytebiz.fra1.cdn.digitaloceanspaces.com/byte-qr/orgPageQrCode/J5YMEbjm.png',
        'images/J5YMEbjm.png'
    )

    # Website link fix
    content = content.replace(
        'data-value="https://shreepadmavatielectricals.bytecard.in"',
        'data-value="website.html"'
    )

    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Fixed index.html")

def process_website():
    src_path = 'website_preview.html'
    dst_path = 'website.html'
    
    if not os.path.exists(src_path):
        print(f"{src_path} not found!")
        return

    with open(src_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # CSS Replacements
    css_map = {
        '/_next/static/css/5d6a46dadfc84a1b.css': 'css/website_1.css',
        '/_next/static/css/3ced40b72cd950e4.css': 'css/website_2.css',
        '/_next/static/css/4c710c803f972fd5.css': 'css/website_3.css'
    }
    for k, v in css_map.items():
        content = content.replace(k, v)

    # Image Replacements
    # Find all images hosted on bytebiz
    img_pattern = re.compile(r'https://bytebiz\.fra1\.cdn\.digitaloceanspaces\.com/byte-qr/[^"\'\s)]+')
    
    images = set(img_pattern.findall(content))
    
    for img_url in images:
        filename = os.path.basename(img_url)
        # Avoid query params if any
        filename = filename.split('?')[0]
        local_path = f'images/{filename}'
        
        # Download
        download_file(img_url, local_path)
        
        # Replace in content
        content = content.replace(img_url, local_path)

    with open(dst_path, 'w', encoding='utf-8') as f:
        f.write(content)
    print("Created website.html")

if __name__ == "__main__":
    fix_index()
    process_website()
