def minimum(a, b, c, d):
    mylist = [a, b, c, d]
    minNum = a
    for x in mylist:
        if minNum>x:
            minNum = x
    return minNum


a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(minimum(a, b, c ,d))