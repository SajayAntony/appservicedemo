#!/bin/bash
set -u
: "$DOCKER_IMAGE"

typeset -i VER=$(cat ./version.txt)
echo $((VER+1))>./version.txt
docker build -t  $DOCKER_IMAGE .
docker push $DOCKER_IMAGE

