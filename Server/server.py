from mtgsdk import Card
from mtgsdk import Set
from mtgsdk import Type
from mtgsdk import Supertype
from mtgsdk import Subtype
from mtgsdk import Changelog
import urllib.request
import os
import subprocess
import requests
import sys
from flask import Flask, render_template, Response, request,redirect , make_response,flash,url_for,send_file

ip_addr="0.0.0.0"

def get_card_value(card_name):
    return(requests.get("http://magictcgprices.appspot.com/api/cfb/price.json?cardname="+card_name).json())

app = Flask(__name__,template_folder='template')
app.secret_key='secretsecret'


@app.route('/',methods=['GET','POST'])
def indexpage():
    if request.method=='POST':
        f = request.form
        options=f.to_dict()
        card = Card.where(name=get_card_url(options[0]).all())[0]
        card_data=[card.name,card.color,get_card_value(card.name)]
        return Response(card_data)
    
    elif request.method=='GET':
        return render_template('index.html')

if __name__ == "__main__":
    app.jinja_env.cache={}
    app.run(host=ip_addr, debug=True, use_reloader=True, threaded=True)








