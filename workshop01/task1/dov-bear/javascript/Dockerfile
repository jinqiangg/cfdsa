FROM node:19

LABEL "name"="dov-bear"

## Building the application
# create a directory /app and cd into it
WORKDIR /app

# file [.] , folder [name]
ADD main.js .
ADD package.json .
ADD package-lock.json .
ADD views views
ADD public public

## Install the node_modules
RUN npm ci

## Run the application
# Set the INSTANCE_NAME
ENV INSTANCE_NAME='dov-bear'
ENV INSTANCE_HASH='cfdsa-dov-bear-hash'
# Set the APP_PORT to 5000
ENV PORT=5000
# default 3000 will be expose even without the config below (Port the application bind to)
EXPOSE ${PORT}

# Health Check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -s http://localhost:${PORT}/healthz || exit 1

# Start the application
ENTRYPOINT node main.js