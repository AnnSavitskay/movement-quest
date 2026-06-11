from flask import Flask
from flask_cors import CORS
from routes.activities import (
    activities_bp
)

from database import engine
from models.activity import Base

app = Flask(__name__)

Base.metadata.create_all(bind=engine)

app.register_blueprint(
    activities_bp
)
CORS(
    app,
    origins=[
        "http://localhost:5173"
    ]
)

@app.route("/")
def home():

    return {
        "message":
        "Movement Quest API"
    }

if __name__ == "__main__":

    app.run(debug=True)
