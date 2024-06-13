family = {"rick": 43, 'beth': 13, 'morty': 5, 'summer': 8}
price = 0
for value in family.values():
    if 3 < value < 12:
        price += 10
    elif value > 12:
        price += 15

print(price)