import psycopg2
import sys

from menu_item import MenuItems
from menu_manager import MenuManager

def view_item():
    name_to_show = input("What item would you like to view: ")
    item_to_show = MenuManager(name_to_show)
    item_to_show.get_by_name()   

def add_item_to_menu():
    new_name = input("Add a new name to menu: ")
    new_price = input("Add a new price to menu: ")
    item_to_add = MenuItems(new_name, new_price)
    item_to_add.save()

def remove_item_from_menu():
    name_to_delete = input("What item you want to delete: ")
    price_to_delete = input("What is the price of the item: ")
    item_to_delete = MenuItems(name_to_delete, price_to_delete)
    item_to_delete.delete()

def update_item_from_menu():
    name_to_update = input("What is the name of the old item: ")
    price_to_update = input("What is the price of the old item: ")
    new_name_to_update = input("Add a new name of item: ")
    new_price_to_update = input("Add a new price of item: ")
    item_to_update = MenuItems(name_to_update, price_to_update)
    item_to_update.update(new_name_to_update, new_price_to_update)

def show_restaurant_menu():
    MenuManager.all_items()

def main():
    print("=====Hello, Chef!===== \n  Welcome to Menu Editor! \n What would you like to do? \n \n If you want to view an item, press v \n If you want to add an item, press a \n If you want to delete an item, press d \n If you want to update an item, press u \n If you want to show the menu, press s \n \n For exit press x")
    user_input = input("Press a button here --> ")
    if user_input == "a":
        add_item_to_menu()
    elif user_input == "d":
        remove_item_from_menu()
    elif user_input == "u":
        update_item_from_menu()
    elif user_input == "v":
        view_item()
    elif user_input == "s":
        show_restaurant_menu()
    elif user_input == "x":
        show_restaurant_menu()
        sys.exit()
    else:
        print("You wrote invalid command!")

if __name__ == "__main__":
    main()


