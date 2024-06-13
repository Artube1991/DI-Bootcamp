import random

number1 = int(input("Provide a number from 1 to 100: "))
number2 = random.randint(1, 100)
def comparing(number1, number2):
    if number1 < number2:
        print("Your number is too small.")
        print(number2)
    elif number1 == number2:
        print("Success!")
        print(number2)
    else:
        print("Your number is too big.")
        print(number2)

comparing(number1, number2) 