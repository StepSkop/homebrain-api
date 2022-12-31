FROM node:16.15.0



# Create the bot's directory

RUN mkdir -p /usr/src/api

WORKDIR /usr/src/api



COPY package.json /usr/src/api

RUN npm install



COPY . /usr/src/api



# Start the bot.

CMD ["node", "index.js"]