from mtgsdk import Card
import requests
from flask import Flask, render_template, request, jsonify
import socket
import sys
from flask_cors import CORS

ip_addr = socket.gethostbyname(socket.gethostname())


def get_card_value(card_name):
    return requests.get("http://magictcgprices.appspot.com/api/cfb/price.json?cardname="+card_name).json()

app = Flask(__name__, template_folder='template')
CORS(app)
app.secret_key = 'secretsecret'


@app.route('/', methods=['GET', 'POST'])
def indexpage():
    sys.stderr.write(request.method+'\n')
    if request.method == 'POST':
        f = request.form
        options = f.to_dict()
        options = ''.join(options)
        card = Card.where(name=options).all()[0]
        card_data = {'name': str(card.name),
                     'color': str(card.colors),
                     'value': str(card.mana_cost),
                     'text': str(card.text),
                     'url': str(card.image_url)}
        sys.stderr.write(str(card_data)+'\n')
        return jsonify(card_data)
    
    elif request.method == 'GET':
        return render_template('index.html')

if __name__ == "__main__":
<<<<<<< 666e020e0c9a5b316b19de5756cd93a027cfd7a2
    app.jinja_env.cache = {}
    app.run(host=ip_addr, debug=True, use_reloader=True, threaded=True)
=======
    app.jinja_env.cache={}
    app.run(host=ip_addr, debug=True, use_reloader=True, threaded=True)
>>>>>>> Removed Spaces
