# install dependency
npm install

# Starts up a development server. For development use only
npm run start

# Runs tests associated with the project
npm run test

# Builds a production version of the application
npm run build

# Running the Dev Dockerfile
# You need to run docker build -f [docker_file_name] .
# If the name of your file is Dockerfile then you don't need the -f and the filename.
docker build -f Dockerfile.dev .

# Run the container  
# docker run imageId
docker run 0a7897a1ae7ad6f6547b2c6142a5f32b5e6a9a9e601d1

# you'll need to add the -it flag to run the container in interactive mode
# docker run -it -p 3000:3000 IMAGE_ID 
docker run -p 3000:3000 0a7897a1ae7ad6f6547b2c6142a5f32b5e6a9a9e601d1

# remove node_modules
rm -rf node_modules

# Docker Volumes -v map the present working directory (pwd) into the '/app' folder
docker run -p 3000:3000 -v $(pwd):/app 19e9ae604ac011145ef6e6ed4c904e3c0cd940701a306a84decdf081224052fe

# Docker Volumes Put a bookmark on the node_modules folder
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app 19e9ae604ac011145ef6e6ed4c904e3c0cd940701a306a84decdf081224052fe


# Solution
https://stackoverflow.com/questions/60790696/react-scripts-start-exiting-in-docker-foreground-cmd

# Add stdin_open property to your docker-compose.yml file
    web:
    stdin_open: true

# Make sure you rebuild your containers after making this change with  
docker-compose down && docker-compose up --build

# list the containers
docker ps -a -q

# remove container
docker rm -vf $(docker ps -a -q)

#
docker images -a -q
docker rmi -f $(docker images -a -q)

#
docker volume ls -q
docker volume rm $(docker volume ls -q)


# docker-compose up error
# docker-compose --version error 
https://stackoverflow.com/questions/42139982/version-in-docker-compose-yml-is-unsupported-you-might-be-seeing-this-error