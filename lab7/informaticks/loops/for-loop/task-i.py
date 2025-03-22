a = int(input())
result = 0
for x in range(1, a+1):
    if a%x==0:
        result = result+1

print(result)