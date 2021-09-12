# Starts up a development server. For development use only
npm run start

# Runs tests associated with the project
npm run test

# Builds a production version of the application
npm run build

# Running the Dev Dockerfile
docker build -f Dockerfile.dev

# you'll need to add the -it flag to run the container in interactive mode
docker run -it -p 3000:3000 IMAGE_ID 