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

class MenuManager:
    def __init__(self, name: str) -> str:
        self.name = name
    
    def get_by_name(self):
        connection, cursor = create_connection()
        query = f"select * from menu_items where item_name = '{self.name}';"
        cursor.execute(query)
        connection.commit()
        rows = (cursor.fetchall())
        connection.close()
        if rows == []:
            return None
        else:
            print(rows)

    def all_items():
        connection, cursor = create_connection()
        query = "select * from menu_items"
        cursor.execute(query)
        connection.commit()
        rows = cursor.fetchall()
        print('\n'.join(str(value) for value in rows))


item1 = MenuManager("crabsburger")
items = MenuManager.all_items()
    