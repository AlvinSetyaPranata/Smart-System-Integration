from sqlalchemy import Float, Column, Integer
from ..internal.database import Base


class DirtModel(Base):
    __tablename__ = "dirt"

    id = Column(Integer, primary_key=True, index=True)
    humidity = Column(Float)
    temprature = Column(Float)
    intensity = Column(Float)








