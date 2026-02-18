import re

path = 'website.html'

def print_context(keyword, content, window=300):
    indices = [m.start() for m in re.finditer(re.escape(keyword), content)]
    print(f"--- Matches for '{keyword}' ---")
    for i in indices:
        start = max(0, i - window)
        end = min(len(content), i + window + len(keyword))
        print(f"...{content[start:end]}...")
        print("-" * 20)

try:
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
        
    print_context('alt="logo"', content)
    print_context('Fans', content)
    print_context('Ceiling Fan', content)
    
except Exception as e:
    print(e)
