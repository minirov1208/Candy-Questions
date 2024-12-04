# // 編號：CANDY-004
# // 程式語言：Python
# // 題目：完成函數的內容，把傳進去的秒數變成平常人類看的懂的時間格式

def humanReadableTimer(seconds):
    hours = int(seconds/3600)
    mins = int((seconds % 3600)/60)
    secs = int ((seconds % 3600) % 60)
    return f"{hours:02}:{mins:02}:{secs:02}"

print(humanReadableTimer(0))  # 印出 00:00:00
print(humanReadableTimer(59))  # 印出 00:00:59
print(humanReadableTimer(60))  # 印出 00:01:00
print(humanReadableTimer(90))  # 印出 00:01:30
print(humanReadableTimer(3599))  # 印出 00:59:59
print(humanReadableTimer(3600))  # 印出 01:00:00
print(humanReadableTimer(45296))  # 印出 12:34:56
print(humanReadableTimer(86399))  # 印出 23:59:59
print(humanReadableTimer(86400))  # 印出 24:00:00
print(humanReadableTimer(359999))  # 印出 99:59:59


# //Candy!!!!!
