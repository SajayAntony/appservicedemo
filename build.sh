typeset -i VER=$(cat src/version.txt)
echo $((VER+1))>src/version.txt
docker build -t webapp .

