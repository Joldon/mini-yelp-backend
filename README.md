# mini-yelp-backend

A simple API for a Yelp-Clone.

## Setup

## API-Routes

Restaurants:
'/restaurants': GET all restaurants
'/restaurants/:id': GET restaurant with id

Cities:

Tags:


## Example requests

to register a new user: `curl -d '{"username": "zubat", "email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/register`

to login: `curl -d '{"email": "zubat@pokemon.com", "password": "iamthenight"}' -H "Content-Type: application/json" -X POST http://localhost:5000/auth/login`

to update a user without being the user and be prompted an unauthorised message: `
curl -d '{"email": "zubat@pokemon.com", "username": "zubat", password": "iamtheKNIGHT"}' -H "Content-Type: application/json" -X PUT http://localhost:5000/users/60059b4d8ccc074679667f24`

to update a user, the right way this time: `curl -d '{"email": "zubat@pokemon.com", "password": "iamtheKNIGHT"}' -H "Content-Type: application/json" -H "Authorization: Bearer tokenhere" -X PUT http://localhost:5000/users/60059b4d8ccc074679667f24`

to get your own profile info: `curl -H "Content-Type: application/json" -H "Authorization: Bearer tokenhere" http://localhost:5000/auth/me`
