#  編號：CANDY-002
#  程式語言：Python
#  題目：請寫一小段程式，印出連續陣列裡缺少的字元

chars1 = ["a", "b", "c", "d", "f", "g"]
chars2 = ["O", "Q", "R", "S"]

def missingChar(chars):
    for i in range(len(chars) - 1):
        if ord(chars[i+1]) - ord(chars[i]) != 1:
            return chr(ord(chars[i])+1)



print(missingChar(chars1)) # 印出 e
print(missingChar(chars2)) # 印出 P