class Dog:
    def __init__(self, name: str, height: float) -> None:
        self.name = name
        self.height = height

def bark(self) -> None:
    print(f"{self.name} goes woof!")

    def jump(self) -> None:
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

def present_dog(dog: Dog) -> None:
    print(f"Dog name: {dog.name}. Height: {dog.height}")

def main():
    david_dog = Dog(name="Rex", height=50)
    present_dog(david_dog)