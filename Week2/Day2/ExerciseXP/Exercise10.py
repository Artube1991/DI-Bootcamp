sandwich_orders = ["Tuna sandwich", "Pastrami sandwich", "Avocado sandwich", "Pastrami sandwich", "Egg sandwich", "Chicken sandwich", "Pastrami sandwich"]
word_to_remove = str("Pastrami sandwich")

while word_to_remove in sandwich_orders:
    sandwich_orders.remove(word_to_remove)
else:
    print(sandwich_orders)

finished_sandwiches = []

for item in sandwich_orders:
    finished_sandwiches.append(item)
for item in sandwich_orders:
    sandwich_orders.remove(str(item))
for item in finished_sandwiches:
    print(f"I made your {item.lower()}")