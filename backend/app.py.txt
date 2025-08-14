
from flask import Flask, request, jsonify

from flask_cors import CORS

import os

import logging



from flask_pymongo import PyMongo

from flask_bcrypt import Bcrypt

from datetime import datetime, timezone

from dotenv import load_dotenv

from bson.json_util import dumps

from bson import ObjectId



import re



# Configure logging

logging.basicConfig(level=logging.INFO)

logger = logging.getLogger(__name__)



# Initialize Flask app

app = Flask(__name__)

# allow all origins

CORS(app, resources={r"/*": {"origins": "*"}})



# Set the default port

PORT = int(os.environ.get("PORT", 5001))



# app/__init__.py

load_dotenv()



app.config["MONGO_URI"] = os.environ.get("MONGO_URI", "MONGO_URI")

mongo = PyMongo(app)



# Create indexes for email uniqueness

with app.app_context():

    try:

        mongo.db.users.create_index("email", unique=True)

        print("MongoDB connected successfully")

    except Exception as e:

        print(f"Error connecting to MongoDB: {str(e)}")



bcrypt = Bcrypt(app)



# app/models.py

class User:

    @staticmethod

    def create_user(firstname, lastname, email, password, role="student", profilepic="default-profile.png"):

        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):

            raise ValueError("Invalid email format")

        

        if len(password) < 8:

            raise ValueError("Password must be at least 8 characters long")

        

        # Check if email already exists

        if mongo.db.users.find_one({"email": email}):

            raise ValueError("Email already exists")

        

        user = {

            "firstname": firstname,

            "lastname": lastname,

            "email": email.lower(),

            "password": bcrypt.generate_password_hash(password).decode('utf-8'),

            "profilepic": profilepic,

            "role": role if role in ["student", "professor"] else "student",

            "timestamp": datetime.now(timezone.utc),

            "history": []

        }

        

        result = mongo.db.users.insert_one(user)

        user["_id"] = result.inserted_id

        return user



    @staticmethod

    def get_user_by_email(email):

        return mongo.db.users.find_one({"email": email.lower()})



    @staticmethod

    def verify_password(stored_password_hash, provided_password):

        return bcrypt.check_password_hash(stored_password_hash, provided_password)


