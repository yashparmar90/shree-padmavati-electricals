import re

path = 'website.html'

def find_img_before_text(text, content):
    print(f"--- Searching for img before '{text}' ---")
    # Find all occurrences of text
    indices = [m.start() for m in re.finditer(re.escape(text), content)]
    for i in indices:
        # Look backwards for <img
        # We'll simple slice the 500 chars before matches
        snippet = content[max(0, i-500):i]
        # Find the LAST <img tag in this snippet
        img_matches = list(re.finditer(r'<img[^>]+>', snippet))
        if img_matches:
            last_img = img_matches[-1]
            print(f"Found: {last_img.group(0)}")
        else:
            print("No <img> tag found in preceding 500 chars.")
        print("-" * 20)

try:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    find_img_before_text('Fans', content)
    find_img_before_text('Ceiling Fan', content)
    find_img_before_text('logo', content) # Might be alt text or text near logo?
    
    # Also just list all img tags that have http/https in src (if any left) which my script hopefully removed
    # or list all img tags with data-src
    print("--- Remote Images Check ---")
    remotes = re.findall(r'<img[^>]+src=["\']http[^"\']+', content)
    for r in remotes:
        print(r)

except Exception as e:
    print(e)
