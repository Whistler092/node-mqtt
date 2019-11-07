
Build de la imagen 
    docker build -t "docker_blinker:v1" .



docker container run --device /dev/gpiomem -d docker_blinker:v1
or 
docker container run --privileged -d docker_blinker:v1
