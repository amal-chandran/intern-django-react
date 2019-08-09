# Blog Django

It is a Basic blog app with Auth. Its uses Django Rest Framework and Knox for auth.
The backend exposes a rest api in 8000. The frontend is a react app uses redux for state and redux saga for effects handing.

# Developement

# Requirements

- Node.Js 10.x
- yarn 1.17
- Python 3.7.3
- pipenv
- git

# Set Up

New Terminal - 1 (To Run Django Server)

```
git clone https://github.com/adevofficial/intern-django-react.git
cd intern-django-react
pipenv install
pipenv shell
cd api
python manage.py migrate
python manage.py runserver
```

New Terminal - 2 (To Run React Dev Server)

```
cd intern-django-react/client
yarn && yarn start
```
