def show_magicians(magician_names):
    print(magician_names)

def make_great():
    for i, name in enumerate(magician_names):
        magician_names[i] = f"{name} the Great"

magician_names = ['Harry Houdini', 'David Blaine', 'Criss Angel']

show_magicians(magician_names)
make_great()
print(magician_names)