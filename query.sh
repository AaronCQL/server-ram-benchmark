#!/bin/bash

qps=$1
if [ -z "$qps" ]; then
  echo "Usage: $0 QPS"
  exit 1
fi

interval=$(python3 -c "print(1/$qps)")

while true; do
  curl "http://localhost:3000" &
  # sleep for interval
  sleep $interval
done
