from typing import Union, Self

class Currency:
    def __init__(self, currency: str, amount: int):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        object_str = f"{self.amount} {self.currency}s"
        return object_str
    
    def __int__(self):
        object_int = self.amount
        return object_int
    
    def __repr__(
        self,
    ) -> (
        str
    ):
        if self.amount > 1:
            return f"{self.amount} {self.currency}s"
        else:
            return f"{self.amount} {self.currency}"
    
    def __add__(self, other: "Currency | int") -> "Currency":
      if isinstance(other, Currency):
          if other.currency == self.currency:
             return Currency(self.currency, self.amount + other.amount)
          else:
            raise ValueError(
              f"Cannot add between Currency type {self.currency} and {other.currency}"
          )
      elif isinstance(other, int):
         return Currency(self.currency, self.amount + other)
    
    def __iadd__(self, other: Union["Currency", int]) -> Self:
      if isinstance(other, Currency):
         self.amount += other.amount
      elif isinstance(other, int):
         self.amount += other
      return self

def main():
    c1 = Currency('dollar', 5)
    c2 = Currency('dollar', 10)
    c3 = Currency('shekel', 1)
    c4 = Currency('shekel', 10)

    currencies = [c1, c2, c3, c4]

    print(c1)
    print(c1 + c2)

if __name__ == "__main__":   
    main()
    
    