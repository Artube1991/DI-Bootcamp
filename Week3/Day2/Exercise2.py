global speed
speed = 0

class Dog:
    def __init__(self, name, age : int, weight: int):
        self.name = name
        self.age = age
        self.weight = weight 

    def bark(self):
        print(f"{self.name} is barking")
    
    def run_speed(self):
        speed = self.weight / self.age * 10
        return speed
    
    def fight(self):
        fight_power = speed * self.weight
        return fight_power

dog1 = Dog("George", 4, 10)
dog2 = Dog("Theodor", 6, 8)
dog3 = Dog("Beowolf", 5, 12)
other_dog = Dog("RexTheCommisar", 10, 10)

dog1.bark()
dog2.bark()
dog3.bark()

dog1.run_speed()
dog2.run_speed()
dog3.run_speed()

