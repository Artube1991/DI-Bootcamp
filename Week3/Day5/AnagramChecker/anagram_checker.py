file_location = "./jjjj.txt"

def preparing_the_dictionary() -> list:
    with open(file_location, mode="r") as file:
        content = file.read().lower().split("\n")
        return content

def checking_the_anagram(word1: str, word2: str) -> bool:
    if word1 != word2:
        if sorted(word1) == sorted(word2):
            return True
        else:
            return False     

class AnagramChecker:
    def __init__(self, user_word: str):
        self.user_word = user_word.lower()
        self.word_list = preparing_the_dictionary()

    def is_valid_word(self) -> bool:
        if self.user_word in self.word_list:
            return True
        else:
            return False
    
    def get_anagrams(self) -> list:
        if self.is_valid_word():
            anagram_list = [word for word in self.word_list if checking_the_anagram(word, self.user_word)]
            return anagram_list
        else:
            raise ValueError (f'The word {self.user_word} is not a vaild English word.')
