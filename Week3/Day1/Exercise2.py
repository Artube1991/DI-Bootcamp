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

def get_biggest_dog

def main():
    david_dog = Dog(name="Rex", height=50)
    present_dog(david_dog)

    sarahs_dog = Dog("Teacup", 20)
    present_dog(sarahs_dog)

    if david_dog.height > sarahs_dog.height:
        print(f"{david_dog.name} is bigger than {sarahs_dog.name}")
    else:
        print(f"{sarahs_dog.name} is bigger than {david_dog.name}")

if __name__ == "__main__":
    main()