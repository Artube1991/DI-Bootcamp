user_fruits = input("Your favourite fruits are (write with single space): ")
def stringToList():
    user_fruits.split(" ")
    return user_fruits.split(" ")

print(stringToList())

any_fruit = input("Name any fruit: ")
if any_fruit in user_fruits.split(" "):
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy")