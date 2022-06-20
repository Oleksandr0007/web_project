#!/bin/bash

#bash env_var.sh
cd server
#yarn install
npm install 
npm run build
cd ..
docker-compose up -d
