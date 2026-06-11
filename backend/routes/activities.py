from flask import (
    Blueprint,
    request,
    jsonify
)

from database import SessionLocal

from models.activity import Activity

activities_bp = Blueprint(
    "activities",
    __name__
)

@activities_bp.route(
    "/activities",
    methods=["POST"]
)
def create_activity():

    data = request.json

    db = SessionLocal()

    activity = Activity(
        activity=data["activity"],
        duration=data["duration"],
        mood_before=data["mood_before"],
        mood_after=data["mood_after"]
    )

    db.add(activity)

    db.commit()

    db.close()

    return jsonify({
        "message":
        "saved"
    })
    
@activities_bp.route(
    "/activities",
    methods=["GET"]
)
def get_activities():

    db = SessionLocal()

    activities = (
        db.query(Activity)
        .order_by(
            Activity.created_at.desc()
        )
        .all()
    )

    result = []

    for activity in activities:

        result.append({

            "id":
                activity.id,

            "activity":
                activity.activity,

            "duration":
                activity.duration,

            "mood_before":
                activity.mood_before,

            "mood_after":
                activity.mood_after,

            "date":
                activity.created_at.strftime(
                    "%Y-%m-%d"
                )
        })

    db.close()

    return jsonify(result)
