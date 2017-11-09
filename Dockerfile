#You should always specify a full version here to ensure all developers are runnin
# the same version of node
FROM node:6.11.4

# The base node image sets a very verbose log level.
ENV NPM_CONFIG_LOGLEVEL warn

# Install 'serve' to run the application
#RUN yarn add global serve

# Set the command to start the node server
#CMD serve -s build

WORKDIR /code/

COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

# Copyt all local files into the image
COPY . .

#Let Docker know about ther port that serve runs on.
EXPOSE 8000


# Build for production
#RUN yarn run build 

CMD ["yarn", "start"]




# Build image run docker build -t react-web .
# 