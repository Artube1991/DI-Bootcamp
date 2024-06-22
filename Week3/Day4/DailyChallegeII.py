import os

dir_path = os.path.dirname(os.path.realpath(__file__)) 

text_name = '\\the_stranger.txt'

with open(dir_path + text_name , mode = 'r') as file:
    txt = file.read()

print(txt)