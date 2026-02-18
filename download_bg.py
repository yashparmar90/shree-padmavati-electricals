import urllib.request
import ssl
import os

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

urls = [
    "https://qr.bytecard.in/shree-padmavati-electricals/shree-padmavati-electricals/images/background.png",
    "https://qr.bytecard.in/images/background.png",
    "https://qr.bytecard.in/shree-padmavati-electricals/images/background.png",
    # Try finding it in the original HTML source if readily available, but blind guess first
]

local_path = "images/background.png"

def download(url):
    print(f"Trying {url}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req, context=ctx) as response:
            if response.getcode() == 200:
                with open(local_path, 'wb') as f:
                    f.write(response.read())
                print(f"Success! Downloaded to {local_path}")
                return True
    except Exception as e:
        print(f"Failed: {e}")
    return False

if not os.path.exists(local_path):
    os.makedirs(os.path.dirname(local_path), exist_ok=True)
    for url in urls:
        if download(url):
            break
else:
    print("background.png already exists.")
