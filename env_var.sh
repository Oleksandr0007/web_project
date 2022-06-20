#!/bin/bash
echo "DB_USER = user" > .env
echo -n "DB_PASSWORD = " >> .env
date +%s | sha256sum | base64 | head -c 32 >> .env
echo "" >> .env
echo -n "REACT_APP_HOST = " >> .env
curl ifconfig.me >> .env
