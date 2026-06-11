from sqlalchemy import *
from sqlalchemy import (
    Column,
    Integer,
    String,
    DateTime
)

from datetime import datetime

from sqlalchemy.orm import declarative_base

Base = declarative_base()

class Activity(Base):

    __tablename__ = "activities"

    id = Column(
        Integer,
        primary_key=True
    )

    activity = Column(String)

    duration = Column(Integer)

    mood_before = Column(Integer)

    mood_after = Column(Integer)

    created_at = Column(
        DateTime,
        default=datetime.utcnow
    )
