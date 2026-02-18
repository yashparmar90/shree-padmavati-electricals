import re

path = 'website.html'

try:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Regex to capture full img tag
    # <img ... >
    tags = re.findall(r'<img[^>]+>', content)
    
    with open('img_tags.txt', 'w', encoding='utf-8') as out:
        for tag in tags:
            out.write(tag + '\n')
            
    print(f"Dumped {len(tags)} img tags to img_tags.txt")

except Exception as e:
    print(e)
