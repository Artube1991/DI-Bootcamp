class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        object_str = f"{self.amount} {self.currency}s"
        return object_str
    
    def __int__(self):
        object_int = self.amount
        return object_int
    
    def __repr__(self):
        object_repr = f"{self.amount} {self.currency}s"
        return object_repr
    
    def __add__(self, other):
      count = self.amount + other.amount
      return count
    
    def __iadd__(self, other):
      self.amount += other.amount
      return self.amount


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

if __name__ == "__main__":   
    print(c1)
    print(int(c1))
    print(int(c1).__add__(int(5)))
    sum_of_c = c1+c2
    print(sum_of_c)
    print(f"{int(c1)} dollars")
    print(int(c1).__iadd__(int(5)))
    
    