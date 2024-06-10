my_fav_nubmers = {1,4,27}
my_fav_nubmers.add(3)
my_fav_nubmers.add(12)
print(my_fav_nubmers)
my_fav_nubmers.remove(27)
print(my_fav_nubmers)
friend_fav_numbers = {4,8,30}
print(friend_fav_numbers)
our_fav_numbers = my_fav_nubmers.union(friend_fav_numbers)
print(our_fav_numbers)