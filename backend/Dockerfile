FROM python:3.9.1

WORKDIR /app

COPY ./requirements/production.txt /app/production.txt

RUN /usr/local/bin/python -m pip install --upgrade pip
RUN pip install --no-cache-dir --upgrade -r /app/production.txt

COPY . /app/backend

CMD ["uvicorn", "backend.app:app", "--proxy-headers", "--host", "0.0.0.0", "--port", "8000"]
