"#!\HP\AppData\Local\Microsoft\WindowsApps\python.exe"


import cgi

# Retrieve form data
form = cgi.FieldStorage()
name = form.getvalue('name')
email = form.getvalue('email')

# Print the received data
print("Content-Type: text/html\n")
print("<html>")
print("<head>")
print("<title>Form Submission Result</title>")
print("</head>")
print("<body>")
print("<h1>Form Submission Result</h1>")
print("<p>Name: " + (name if name is not None else "") + "</p>")
print("<p>Email: " + (email if email is not None else "") + "</p>")
print("</body>")
print("</html>")
