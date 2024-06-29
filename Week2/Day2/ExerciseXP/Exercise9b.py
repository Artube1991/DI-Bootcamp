user_choice = 0
user_age = 0
user_list = []
while user_choice != "x":
    user_name = input("What is your name: ")
    user_list.append(user_name)
    user_age = int(input("What is your age: "))
    user_choice = input("If you want to count the price, press x. \n If you want to add a new person, press any other letter: ")
    if user_age < 16 or user_age > 21:
        user_list.pop()
    else:
        pass
else:
    print(f"The watching of movie if permitred for {user_list}")