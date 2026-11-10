import re
import os

file_path = "src/lib/products.ts"

if not os.path.exists(file_path):
    print(f"❌ File not found: {file_path}")
    exit(1)

# Removed commas from the old prices to match your code's format
updates = {
    "Elfbar Raya D1": ("2699", "2799"),
    "Elfbar Raya D3": ("2799", "3199"),
    "Elfbar D3 Pro": ("3199", "3299"),
    "Elfbar Ice King": ("2999", "3299"),
    "ZYN Cool Mint": ("999", "1299")
}

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

changes_made = 0
for product, (old_price, new_price) in updates.items():
    # This regex finds the product name, then looks ahead for the old price inside quotes
    pattern = rf'({re.escape(product)}.*?["\']){re.escape(old_price)}(["\'])'

    def replacer(match):
        return match.group(1) + new_price + match.group(2)

    new_content, count = re.subn(pattern, replacer, content, flags=re.DOTALL)

    if count > 0:
        content = new_content
        print(f"✅ Updated: {product} ({old_price} → {new_price})")
        changes_made += 1
    else:
        print(f"⚠️ Skipped: {product} (Could not find '{old_price}' near this product.)")

if changes_made > 0:
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"\n💾 Success! Saved {changes_made} changes to {file_path}")
else:
    print("\n⚠️ No changes were made. Please open src/lib/products.ts and check exactly how the prices are formatted.")
