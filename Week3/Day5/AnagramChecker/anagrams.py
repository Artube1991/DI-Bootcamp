from anagram_checker import AnagramChecker

def word_conditions(inputing: str) -> str:
    if inputing.isalpha() and len(inputing.split()) == 1:
        input_word = inputing.split()[0].lower()
        return input_word
    else:
        raise ValueError ("Something went wrong. Ensure you printed single word consisting only alphabetic letters.")
    
def results(word: str, anagram_list: list) -> None:
    print(f"YOUR WORD: {word}")
    print("It's a valid English word")
    if anagram_list:
        print(f"Here are anagrams for your word: {", ".join(anagram_list)}.")
    else:
        print("There are no any anagrams for your word.")

def main():
    print("=====Welcome to Anagram Checker!===== \n We have the powerful tool based on English dictionary. \n Provide any valid word, and it'll find all the existing anagrams in English. \n To quit the Checker, input q")
    
    check_word = "start"

    while check_word != "q":
        inputing = input("\nType one English word or type q to quit: ").strip()
        check_word = word_conditions(inputing)
        if check_word != "q":
            anagram_check = AnagramChecker(check_word)
            anagram_searching = anagram_check.get_anagrams()
            results(check_word, anagram_searching)
        else:
            print("The Checker is switched off.")

if __name__ == "__main__":
    main()