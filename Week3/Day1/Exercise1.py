class Cat:
    def __init__(self, cat_name, cat_age):
        self.name = cat_name
        self.age = cat_age

cat1 = Cat("Mizzy", 10)
cat2 = Cat("Vicroria", 8)
cat3 = Cat("Lali", 6)

cats = [cat1, cat2, cat3]

oldest_cat = cats[0]

for cat in cats:
    if cat.age > oldest_cat.age:
        oldest_cat = cat

print(f"The oldest cat is {oldest_cat.name}, and is {oldest_cat.age} years old.")