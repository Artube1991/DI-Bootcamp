price = 0
user_choice = 0
user_age = 0
while user_choice != "x":
    user_age = int(input("What is your age: "))
    user_choice = input("If you want to count the price, press x. \n If you want to add a new person, press any other letter: ")
    if 3 <= user_age < 12:
        price += 10
    elif user_age >= 12:
        price += 15
else:
    print(f"The total price is ${price}")