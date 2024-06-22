file_path = "./sowpods.txt"

with open(file_path) as file:
    text = file.read()
    print(list(text))

# def get_words_from_file():
