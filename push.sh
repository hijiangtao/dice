#!/bin/sh
###########################
cd ./
# switch to branch you want to use
git checkout page
# add all added/modified files
git add .
# commit changes
# read commitMessage
now = date +"%Y-%m-%d %H:%M:%S"
git commit -am "MOD: `date +"%Y-%m-%d %H:%M:%S"`"
# push to git remote repository
git push origin page
###########################
echo "Press Enter..."
read