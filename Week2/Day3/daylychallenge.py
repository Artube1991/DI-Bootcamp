word = 'dodo'

dictionary = {}

for index, letter in enumerate(word):
    if letter in dictionary: 
        dictionary[letter].append(index)
    else:
        dictionary[letter] = [index]
    print(dictionary)
