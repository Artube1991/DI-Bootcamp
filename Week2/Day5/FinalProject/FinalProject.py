print("WELCOME TO TIC TAC TOE")

moves = {0: " ", 1: " ", 2: " ", 3: " ", 4: " ", 5: " ", 6: " ", 7: " ", 8: " "}

def board(moves):

    board = f"""
    | {moves[0]} | {moves[1]} | {moves[2]} |
    |---|---|---|
    | {moves[3]} | {moves[4]} | {moves[5]} |
    |---|---|---|
    | {moves[6]} | {moves[7]} | {moves[8]} |
    """

    print(board)


board(moves)

column = input("Choose a column: ")
column = int(column)
row = input("Choose a row: ")
column = int(row)

def board(moves):
    if column == 1:
        for i in enumerate(board):
            moves[row -1] = "X"       




# playerXVert = input("Choose a row: ")
# playerXVert = int(playerXVert)
# playerXHor = input("Choose a column: ")
# playerXHor = int(playerXHor)
# move = 2

print(board)






# print("""***************\n*    |   |    *\n* ---|---|--- *\n*    |   |    *\n* ---|---|--- *\n*    |   |    *\n***************""")
# border_outer = "***************"
# game_row_1 =[*    |  |    *]
# game_row_2 =[*    |  |    *]
# game_row_3 =[*    |  |    *]
# border_inner = "* ---|---|--- *"
# print(border_outer)
# print(game_row_1)
# print(border_inner)
# print(game_row_2)
# print(border_inner)
# print(game_row_3)
# print(border_outer)