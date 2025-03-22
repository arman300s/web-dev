def minion_game(str):
    vowels = 'AEIOU'
    stuart = 0
    kevin = 0
    for x in range(len(str)):
        if str[x] in vowels:
            kevin = kevin + (len(str)-x)
        else:
            stuart = stuart + (len(str)-x)
    if kevin>stuart:
        print(f"Kevin {kevin}")
    elif stuart>kevin:
        print(f"Stuart {stuart}")
    else:
        print("Draw")

s = str(input())
minion_game(s)