class Dog:
    def __init__(self, name: str, height: float) -> None:
        self.name = name
        self.height = height

    def bark(self) -> None:
        print(f"{self.name} goes woof!")

    def jump(self) -> None:
        jump_height = self.height * 2
        print(f"{self.name} jumps {jump_height} cm high!")

    def present_dog(self) -> None:
        print(f"Dog name: {self.name}. Height: {self.height}")

def get_biggest_dog(dogs: list[Dog]) -> Dog:
    biggest_dog = max(dogs, key=lambda dog: dog.height)
    return biggest_dog

def main():
    david_dog = Dog(name="Rex", height=50)
    david_dog.present_dog()

    sarahs_dog = Dog("Teacup", 20)
    sarahs_dog.present_dog()

    biggest_dog = get_biggest_dog([david_dog, sarahs_dog])
    print(f"{biggest_dog.name} is the biggest dog in town!")

if __name__ == "__main__":
    main()