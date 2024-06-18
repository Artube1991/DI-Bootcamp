from datetime import datetime

future = datetime(2025, 1, 1)
now = datetime.now()

how_long = (future - now)
print(f"{how_long} left until 1st of January 2025")