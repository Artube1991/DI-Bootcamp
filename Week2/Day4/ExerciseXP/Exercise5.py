text_size = input("Your text for the shirt: ")
shirt_size = 0
def make_shirt(shirt_size, text_size):
    print("I Love Python")
    if len(text_size) <= 15:
        shirt_size = "Small"
        print (f"The size of the shirt is {shirt_size} and the text is {text_size}")
    elif len(text_size) <=30:
       shirt_size = "Medium"
       print (f"The size of the shirt is {shirt_size} and the text is {text_size}") 
    elif len(text_size) > 30:
       shirt_size = "Large"
       print (f"The size of the shirt is {shirt_size} and the text is {text_size}") 
    else:
        print("I love Python")
make_shirt(shirt_size, text_size)