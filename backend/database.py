from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker

DATABASE_URL = (
    "postgresql://movement_user:123456@localhost/movementquest"
)

engine = create_engine(DATABASE_URL)

SessionLocal = sessionmaker(bind=engine)
