#!/bin/bash

set -o errexit # Exit on error

git branch -f master gh-pages
git push origin +gh-pages:master
