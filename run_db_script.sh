#!/bin/bash

docker run --rm -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=employees --name rest_api_db mysql:8.0.23
