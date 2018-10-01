#!/bin/bash

#ffmpeg -re -i gandalfka.ts -f mpegts -codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0 -muxdelay 0.005 http://localhost:8080/kek
ffmpeg -re -f concat -i playlist.txt -f mpegts -codec:v mpeg1video -s 640x480 -b:v 1000k -bf 0 -muxdelay 0.005 https://simgandalf.herokuapp.com/kek