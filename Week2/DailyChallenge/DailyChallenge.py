word = input("Type a word: ")
a = len(word)
print(len(word))
if a == 10:
    print("Perfect string")
elif a > 10:
    print("String too long")
elif a < 10:
    print("String not too long")

print(word[0])
print(word[-1])

for x in word:
    print(x)