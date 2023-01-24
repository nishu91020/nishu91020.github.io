FROM python

ADD . /usr/src/app
WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD cd ./django_school && python manage.py migrate && exec gunicorn django_school.wsgi:application --bind 0.0.0.0:8000 --workers 3
