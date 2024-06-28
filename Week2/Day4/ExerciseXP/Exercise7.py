import random


def get_random_temp():
    return random.randint(-10, 40)



def main(temp):
    print(f"The temperature right now is {temp} degrees Celsius.")
    if temp < 0:
        print("Brrr, thats freezing! Wear some extra layers today")
    elif 0<= temp < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp < 23:
        print("The weather is nice but you'd better take your umbrella and light jacket")
    elif 23<= temp < 32:
        print("Sun is shining, the weather is sweet, yeah :) ")
    elif temp > 32:
        print("It's too hot today, use the sun cream and don't forger about the hat!")

temp = get_random_temp()
print(get_random_temp())
main(temp)

def get_random_numbers(top, bottom):
    return random.randint(top, bottom)


def main2(season):
    if season == "winter":
         return get_random_numbers(-10, 16)
    elif season == "autumn":
         return get_random_numbers(0, 15)
    elif season == "spring":
         return get_random_numbers(10, 25)
    elif season == "summer":
         return get_random_numbers(20, 40)

season = input("Type a season: ")

print(f"The temperature is {main2(season)}")