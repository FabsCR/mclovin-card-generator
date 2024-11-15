from flask import Flask, request, send_file, render_template
from PIL import Image
import io

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/generate_card', methods=['POST'])
def generate_card():
   
    base_image = Image.open('mclovin_template.png')  

    
    photo = request.files['photo']
    user_photo = Image.open(photo)

    
    width, height = user_photo.size
    min_dim = min(width, height)
    left = (width - min_dim) / 2
    top = (height - min_dim) / 2
    right = (width + min_dim) / 2
    bottom = (height + min_dim) / 2
    user_photo = user_photo.crop((left, top, right, bottom))

    
    user_photo = user_photo.resize((251, 278))  
    base_image.paste(user_photo, (8, 6))  

    
    img_io = io.BytesIO()
    base_image.save(img_io, 'PNG')
    img_io.seek(0)

    return send_file(img_io, mimetype='image/png', as_attachment=True, download_name='mclovin_card.png')

if __name__ == '__main__':
    app.run(debug=True)


