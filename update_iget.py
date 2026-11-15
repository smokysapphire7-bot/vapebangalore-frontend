import re
import os

file_path = "src/lib/products.ts"

if not os.path.exists(file_path):
    print(f"❌ File not found: {file_path}")
    print("Please make sure you are in the correct project folder (e.g., cd ~/vapebangalore or cd ~/Downloads/vdb-clean)")
    exit(1)

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Step 1: Update the name from "IGET GOZ B40000" to "IGET Soul 40,000"
content = re.sub(r'(name:\s*["\'])IGET GOZ B40000(["\'])', r'\1IGET Soul 40,000\2', content)

# Step 2: Update the price for the IGET product
# This looks for the new name "IGET Soul 40,000" and updates the very next "price:" field it finds
pattern = r'(name:\s*["\']IGET Soul 40,000["\'].*?price:\s*)\d+'
replacement = r'\g<1>3899'

new_content, count = re.subn(pattern, replacement, content, flags=re.DOTALL)

if count > 0:
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(new_content)
    print("✅ Successfully renamed to 'IGET Soul 40,000' and updated price to 3899.")
else:
    print("⚠️ Could not find the IGET product to update. Please check the exact name in src/lib/products.ts")
