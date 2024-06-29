topping_amount = -1
user_topping = 0
toppings = []
print("Your pizza is coming to you! You can add a topping: pepperoni, margarita, 4 cheeses, hawaii")
while user_topping != "quit":
    user_topping = input("Add a topping for your pizza: ")
    print("The topping is successfully added!")
    topping_amount += 1
    toppings.append(user_topping)
else:
    toppings.pop()
    price = 10 + (topping_amount * 2.5)
    print(f"Your toppings are: {toppings}")
    print(f"The price of your pizza is: {price}")