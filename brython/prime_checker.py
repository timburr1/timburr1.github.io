import browser

def check_prime(num):
    num = int(num)
    for i in range(2, num):
		if num % i == 0:
			return False
    return True

def on_submit(event):
    number = browser.document["user_input"].value
    browser.console.log(number)
    browser.document["output"].html = "Prime Number: " + str(check_prime(number))

browser.document["submit-button"].bind("click", on_submit)