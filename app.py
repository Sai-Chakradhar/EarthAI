from flask import Flask, request, render_template, redirect, url_for
from werkzeug.utils import secure_filename
import os


UPLOAD_FOLDER = '/path/to/the/uploads'
ALLOWED_EXTENSIONS = {'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

@app.route('/')
def home():
    return render_template('index.html', uploadedFile = None)

@app.route('/sectors')
def openSectorsPage():
    return render_template('sectors.html')

@app.route('/page')
def openPage():
    query_param = request.args.get('selected')
    ##return f"You searched for: {query_param}"
    return render_template('page.html')

@app.route('/upload', methods=['POST'])
def uploadFile():
    if request.method == 'POST':
        file = request.files['file']
        filename = secure_filename(file.filename)
        file.save(filename)
        # return f"File Uplaoded: {filename}"
        print("file-uploaded:", filename)
        return render_template('index.html', uploadedFile = filename)

@app.route('/submit', methods=['POST'])
def submit():
    selected_option = request.form
    print("Selected option:", selected_option)
    # Process the selected option as needed
    return f"You selected {selected_option}"

if __name__ == '__main__':
    app.run(debug=True)
