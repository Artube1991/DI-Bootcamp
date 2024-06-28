import psycopg2

DBNAME = "RestaurantMenu"
USER = "postgres"
PASSWORD = "1427256vfhnjd"
HOST = "localhost"
PORT = "5432"

def create_connection():
    connection = psycopg2.connect(
        dbname=DBNAME, user=USER, password=PASSWORD, host=HOST, port=PORT
    )

    cursor = connection.cursor()
    return connection, cursor


class MenuItems:
    def __init__(self, name: str, price: int) -> None:
        self.name = name
        self.price = price

    def save(self):
        connection, cursor = create_connection()
        query = f"insert into menu_items (item_name, item_price) values ('{self.name}', '{self.price}');"
        cursor.execute(query)
        connection.commit()
        connection.close()

    def update(self, new_name, new_price):
        connection, cursor = create_connection()
        query = f"UPDATE menu_items SET item_name = '{new_name}', item_price = '{new_price}' where item_name = '{self.name}' AND item_price = '{self.price}';"
        cursor.execute(query)
        connection.commit()
        connection.close()
    
    def delete(self):
        connection, cursor = create_connection()
        query = f"DELETE FROM menu_items WHERE item_name = '{self.name}' AND item_price = '{self.price}';"
        cursor.execute(query)
        connection.commit()
        connection.close()

item2 = MenuItems("hamburger", 30)
item2.update("crabsburger", 16)
