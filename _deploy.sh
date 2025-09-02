#!/bin/bash
git add -A
read -p "Enter commit message: " commit_message
git commit -m "$commit_message"
git push origin main