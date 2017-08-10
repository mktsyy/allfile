import os
BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
a =BASE_DIR + "\chrome_fill_login\\readscript.js"
print BASE_DIR
# print a.replace("\\","\\\\")