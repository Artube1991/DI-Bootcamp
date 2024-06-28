def quiz():
    questions = [
    {
        "question": "What is Baby Yoda's real name?",
        "answer": "Grogu"
    },
    {
        "question": "Where did Obi-Wan take Luke after his birth?",
        "answer": "Tatooine"
    },
    {
        "question": "What year did the first Star Wars movie come out?",
        "answer": "1977"
    },
    {
        "question": "Who built C-3PO?",
        "answer": "Anakin Skywalker"
    },
    {
        "question": "Anakin Skywalker grew up to be who?",
        "answer": "Darth Vader"
    },
    {
        "question": "What species is Chewbacca?",
        "answer": "Wookiee"
    }
    ]

    right_answers = 0
    wrong_answers = []
    for question in questions:
        print(question["question"])
        enter = input("Your answer: ")
        if enter.lower() == question["answer"].lower():
            right_answers += 1
        else:
            wrong_answers.append(enter)
    return [right_answers, wrong_answers]

right_answers, wrong_answers = quiz()
print(f"This is the amount of right answers: {right_answers}")
print(f"Your wrong ansers are {wrong_answers}")

