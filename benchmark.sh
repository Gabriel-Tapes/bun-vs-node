#!/usr/bin/bash

hyperfine --warmup 50 --runs 1000 "node $1/index.js $2 $3" "bun $1/index.js $2 $3"
