#!/bin/bash

cat post_login_sample.json | http POST http://localhost:3333/user/login Content-Type:application/json
