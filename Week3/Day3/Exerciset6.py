from datetime import datetime

birthday = datetime(1991, 12, 4, 0, 20, 0)
now = datetime.now()

how_long = (now - birthday)
print(f"I live {how_long.days * 1440} minutes")

def many_minutes(birthday, now):
    birthday = datetime(1991, 12, 4, 00, 30, 00)
    now = datetime.now()
    how_long = ((now - birthday) * 360)
    print(how_long)