class Text:
    def __init__(self, story):
        self.story = story
        
    def frequencies(self, story):
        sent_dict = story.split()
        sent_dict = {}

        for word in sent_dict:
            a_word = word.strip().lower()
        
        if a_word in sent_dict:
            sent_dict[a_word] += 1
        else:
            sent_dict[a_word] = 1

        for word, frequency in sent_dict.items():
            print(f"{word}: {frequency}")

        for word, frequency in sent_dict.items():
            if frequency == 1:
                print(f"{word} is one of the commom words in the text")
       
ggg = Text('A good book would sometimes cost as much as a good house')
ggg.frequencies()
