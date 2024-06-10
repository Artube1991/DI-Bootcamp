user_fruits = input("Your favourite fruits are (write with single space): ")
def stringToList(user_fruits):
    list = list(user_fruits.split(" "))
    return list

print(stringToList(user_fruits))

any_fruit = input("Name any fruit: ")
if any_fruit in list:
    print("You chose a new fruit. I hope you enjoy")
else:
    print("You chose a new fruit. I hope you enjoy")
