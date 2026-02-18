import re

path = 'website.html'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Remove all <script ...>...</script> tags
# Regex for script tags, handling attributes and multiline content
# non-greedy match
content = re.sub(r'<script\b[^>]*>([\s\S]*?)</script>', '', content)

# Remove <link rel="preload" as="script" ...>
content = re.sub(r'<link[^>]+as="script"[^>]*>', '', content)

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Cleaned website.html")
