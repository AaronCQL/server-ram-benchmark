#!/bin/bash

pname=$1

if [ -z "$pname" ]; then
  echo "Usage: $0 PROCESS_NAME"
  exit 1
fi

while true; do
  ps -o rss= -C $pname | awk '{print $1/1024" MB"}'
  sleep 0.5
done
