
# 編號：CANDY-003
# 程式語言：Python
# 題目：完成函數的內容，把陣列裡的 0 都移到最後面

list1 = [False, 1, 0, -1, 2, 0, 1, 3, "a"]


def moveZerosToEnd(arr) :
       filter_list =  list(filter(lambda x: x is not 0,arr))
       filter_zero = list(filter(lambda x: x is 0,arr))

       return filter_list + filter_zero

    # ======another way=======================================

    #    filter_list.extend([0,0])
    #    return filter_list
  
result = moveZerosToEnd(list1)
print(result)   #/ 印出 [false, 1, -1, 2, 1, 3, "a", 0, 0]

