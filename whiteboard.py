# You probably know the “like” system from Facebook and other pages.
#People can “like” blog posts, pictures or other items.
#We want to create the text that should be displayed next to such an item.
# Implement the function which takes an array containing the names of people that like an item.
# The given array’s names will always be valid, and will not contain any numbers or special characters.
#  It must return the display text as shown in the examples:
# []                                -->  “no one likes this”
# [“Peter”]                         -->  “Peter likes this”
# [“Jacob”, “Alex”]                 -->  “Jacob and Alex like this”
# [“Max”, “John”, “Mark”]           -->  “Max, John and Mark like this”
# [“Alex”, “Jacob”, “Mark”, “Max”]  -->  “Alex, Jacob and 2 others like this”
# Note: For 4 or more names, the number in “and 2 others” simply increases.

print()
print()
#==========MY ORIGINAL SOLUTION======
def like(arr):
    liked_by = []

    for items in arr:
        liked_by.append(items)
    if len(liked_by) == 0:
        return "No one likes this"
    if 1 <= len(arr) <= 3:
            return f'{", ".join(liked_by[:2])} likes this'
    else:
         return f'{", ".join(liked_by[:2])} and {len(liked_by[2:])} others like this.'
    
print(like([]))
print(like(["Peter"]))
print(like(["Jacob", "Alex"]))
print(like(["Max", "John", "Mark"]))
print(like(["Alex", "Jacob", "Mark", "Max"]))

print()
print("========================================")
print()

#===========MY REFINED SOLUTION TO PRODUCE CORRECT ENGLISH GRAMMAR========== O(N)
def like(arr):
    liked_by = []

    for items in arr:
        liked_by.append(items)
    if len(liked_by) == 0:
        return "No one likes this."
    elif len(liked_by) == 1:
            return f'{", ".join(liked_by)} likes this.'
    elif len(liked_by) == 2:
            return f'{liked_by[0]} and {liked_by[1]} like this.'
    elif len(liked_by) == 3:
            return f'{", ".join(liked_by[0:2])} and {liked_by[2]} like this.'
    else:
         return f'{", ".join(liked_by[:2])} and {len(liked_by[2:])} others like this.'
    
print(like([]))
print(like(["Peter"]))
print(like(["Jacob", "Alex"]))
print(like(["Max", "John", "Mark"]))
print(like(["Alex", "Jacob", "Mark", "Max"]))

print()
print("========================================")
print()

#============CODE REFINING SOLUTION========== O(N)
def like(arr):
    if not arr:
        return "No one likes this."
    elif len(arr) == 1:
        return f"{arr[0]} likes this."
    elif len(arr) == 2:
        return f"{arr[0]} and {arr[1]} like this."
    else:
        return f"{', '.join(arr[:2])} and {len(arr) - 2} others like this."

print(like([]))
print(like(["Peter"]))
print(like(["Jacob", "Alex"]))
print(like(["Max", "John", "Mark"]))
print(like(["Alex", "Jacob", "Mark", "Max"]))

print()
print("========================================")
print()