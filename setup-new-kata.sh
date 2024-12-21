#! /bin/bash
NAME_NEW_KATA=$1

mkdir "$NAME_NEW_KATA"
touch "$NAME_NEW_KATA/$NAME_NEW_KATA.js"
touch "$NAME_NEW_KATA/$NAME_NEW_KATA.test.js"
touch "$NAME_NEW_KATA/README.md"