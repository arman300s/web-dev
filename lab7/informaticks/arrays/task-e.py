numbers = list(map(int, input().split()))
for x in range(len(numbers) - 1):
    if numbers[x]+1 == numbers[x+1] or numbers[x]-1 == numbers[x+1]:
        print(numbers[x], numbers[x+1])
        break