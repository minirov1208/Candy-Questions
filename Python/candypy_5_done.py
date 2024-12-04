# 編號：CANDY-005
# 程式語言：Python
# 題目：完成函數的內容，把傳進去的數字的每個位數平方之後組合在一起

def squareDigits(num):
    nums = list(str(num))
    nums_square = map(lambda x:int(x)**2, nums)
    return ''.join(map(str,nums_square))

print(squareDigits(3212)) # 印出 9414
print(squareDigits(2112)) # 印出 4114
print(squareDigits(387)) # 印出 96449



# join必須是字串，如果是數字必須先用map(str, ... )轉換成字串，回傳值為字串