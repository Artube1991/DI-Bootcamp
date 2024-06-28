text_size = input("Your text for the shirt: ")
shirt_size = 0
def make_shirt(text_size = "I love Python", shirt_size = "large"):
    print("I Love Python")
    if len(text_size) < 15 and text_size != "I love Python":
        shirt_size = "Small"
        print (f"The size of the shirt is {shirt_size} and the text is {text_size}")
    elif len(text_size) <= 30 and text_size != "I love Python":
       shirt_size = "Medium"
       print (f"The size of the shirt is {shirt_size} and the text is {text_size}") 
    elif len(text_size) > 30 and text_size != "I love Python":
       shirt_size = "Large"
       print (f"The size of the shirt is {shirt_size} and the text is {text_size}") 
make_shirt()