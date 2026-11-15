import re

file_path = "src/lib/products.ts"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Map of Product Name -> New Price
updates = {
    "Rayya Pryme": 1299,
    "Tesiyi AK 50K": 3999,  # Update this to the correct price for Tesiyi
    "Elfbar D3 Pro": 3299,
    "Elfbar Ice King": 3299,
    "Elfbar MoonNight 40K": 3499,
    "IGET Soul 40,000": 3899,
    "ZYN Cool Mint": 1299
}

for name, new_price in updates.items():
    # SAFER REGEX: 
    # 1. Matches the exact name.
    # 2. [^}]*? matches any characters EXCEPT '}' (prevents leaking to the next product).
    # 3. Finds 'price:', then the old digits, then the trailing comma or brace.
    pattern = rf'({re.escape(name)}"[^}}]*?price:\s*)\d+(\s*[}},])'
    
    def replacer(match):
        return f"{match.group(1)}{new_price}{match.group(2)}"
        
    new_content, count = re.subn(pattern, replacer, content, flags=re.DOTALL)
    
    if count > 0:
        content = new_content
        print(f"✅ Updated: {name} -> {new_price}")
    else:
        print(f"⚠️ Skipped: {name} (Could not find 'price:' inside its specific object block)")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("\n💾 Changes saved safely to src/lib/products.ts")
