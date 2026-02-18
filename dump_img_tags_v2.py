import re

files = ['website.html', 'index.html']

try:
    with open('img_tags_v2.txt', 'w', encoding='utf-8') as out:
        for path in files:
            try:
                with open(path, 'r', encoding='utf-8') as f:
                    content = f.read()

                # Regex to capture full img tag
                tags = re.findall(r'<img[^>]+>', content)
                
                out.write(f"--- {path} ---\n")
                for tag in tags:
                    out.write(tag + '\n')
                out.write("\n")
                print(f"Dumped {len(tags)} tags from {path}")
            except Exception as e:
                print(f"Error reading {path}: {e}")

except Exception as e:
    print(e)
