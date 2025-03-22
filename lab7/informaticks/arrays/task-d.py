numbers = list(map(int, input().split()))
for x in range(len(numbers) - 1):
    if numbers[x]<numbers[x+1]:
        print(numbers[x+1], end=" ")