import math

a = int(input())
b = int(input())

start = math.ceil(math.sqrt(a))

end = math.floor(math.sqrt(b))

for x in range(start, end + 1):
    print(x * x, end=" ")
