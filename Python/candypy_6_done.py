# 編號：CANDY-006
# 程式語言：Python
# 題目：找出在數字陣列裡跟其它元素不一樣的值

def findDifferent(numbers):
    for i in range(len(numbers) - 1):
        if numbers.count(numbers[i]) == 1:
            return numbers[i]

print(findDifferent([1, 1, 1, 1, 3, 1, 1, 1])) # 印出 3
print(findDifferent([2, 2, 2, 4, 2, 2])) # 印出 4
print(findDifferent([8, 3, 3, 3, 3, 3, 3, 3])) # 印出 8

