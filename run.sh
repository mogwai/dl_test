#!/bin/bash

IMAGE_NAME="node-server"
docker build -t $IMAGE_NAME .
docker run -it -p 3000:3000 $IMAGE_NAME
