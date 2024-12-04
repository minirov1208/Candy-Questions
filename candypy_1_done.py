# 編號：CANDY-001
# 程式語言：Python
# 題目：找出陣列裡最小的兩個值的總和


def sumOfSmallestValues(arr):
    arr.sort()
    return arr[0] + arr[1]


list1 = [19, 5, 42, 2, 77]
list2 = [23, 15, 59, 4, 17]



print(sumOfSmallestValues(list1)) # 7
print(sumOfSmallestValues(list2)) # 19