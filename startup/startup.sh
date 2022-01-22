#!/bin/sh
cd /usr/web_api

npm install
npm install -g nodemon

nodemon -L server.js &

cd /usr/web_client
if [[ ! -z ${IS_PRD} ]]; then
	echo "TODO: add steps for production"
else
	npm install
	npm run dev &
fi