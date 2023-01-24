# Django School

[![Python Version](https://img.shields.io/badge/python-3.6-brightgreen.svg)](https://python.org)
[![Django Version](https://img.shields.io/badge/django-2.0-brightgreen.svg)](https://djangoproject.com)

This is an example project to illustrate an implementation of multiple user types. In this Django app, teachers can create quizzes and students can sign up and take quizzes related to their interests.

## **Running the Project Locally (Without Docker)**

First, clone the repository to your local machine:

```bash
git clone https://github.com/sibtc/django-multiple-user-types-example.git
cd django-multiple-user-types-example
```

### **Create a virtual environment**

First install [Pipenv](https://pipenv.pypa.io/en/latest/), if you don't have it.

```bash
python3 -m pip install pipenv
```

then activate the virtual env shell

```bash
python3 -m pipenv shell
```

It will activate the virtual environment in the terminal

### **Install the requirements**

```bash
pip install -r requirements.txt
```

### **Create the database**

```bash
python manage.py migrate
```

### **Finally, run the development server**

```bash
python manage.py runserver
```

The project will be available at **127.0.0.1:8000**.

## **Running project locally (Docker)**

### **Install Docker**

First download and install [Docker](https://docs.docker.com/get-docker/)

### **Run the project with docker**

Run the following commands in the root directory of the project(inside the folder where the dockerfile is present).

- Build the docker image

```bash
docker build -t django_school
```

- Run the container with the image

```bash
docker run -p 8000:8000 django_school
```

**Finally the project will be running at <http://localhost:8000/>**

### **Run the project by pulling the project image**

Alternatively, you can run the project by pulling the image for this project from the Docker Hub. Just run the following command in the terminal.

```bash
docker run -p 8000:8000 tred7/django_school
```

## License

The source code is released under the [MIT License](https://github.com/sibtc/django-multiple-user-types-example/blob/master/LICENSE).
