number1 = input("Provide a number from 1 to 100: ")
number2 = random.randint(1, 100)
def comparing(number1, number2):
    if number1 < number2:
        print("Your number is too small.")
    elif number1 == number2:
        print("Success!")
    else:
        print("Your number is too big.") 