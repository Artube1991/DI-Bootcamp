import random

temp = random.randint(-10, 40)

def get_random_temp(temp):
    print(temp)

get_random_temp(temp)

def main(temp):
    temp2 = temp
    print(f"The temperature right now is {temp2} degrees Celsius.")
    if temp2 < 0:
        print("Brrr, thats freezing! Wear some extra layers today")
    elif 0<= temp2 < 16:
        print("Quite chilly! Don’t forget your coat")
    elif 16 <= temp2 < 23:
        print("The weather is nice but you'd better take your umbrella and light jacket")
    elif 23<= temp2 < 32:
        print("Sun is shining, the weather is sweet, yeah :) ")
    elif temp2 > 32:
        print("It's too hot today, use the sun cream and don't forger about the hat!")

main(temp)

season = input("Type a season: ")
temp3 = 0
def main2():
    if season == "winter":
        temp3 == "From -10 to +05"
        print(season, temp3)
    elif season == "autumn":
        temp3 == "From +0 to +15"
        print(season, temp3)
    elif season == "spring":
        temp3 == "From +10 to +25"
        print(season, temp3)
    elif season == "summer":
        temp3 == "From +20 to +40"
        print(season, temp3)

main2(season, temp3)