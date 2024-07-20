string = "Amolya Sharma"
res = {}
lowerCase = string.lower()

for i in range(len(string)):
    if lowerCase[i].lower() not in res:
        res[lowerCase[i]] = lowerCase.count(lowerCase[i])

print(res)
