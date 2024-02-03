FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN npm install -g forever 

WORKDIR /app

RUN npm install -g forever 
COPY . .

EXPOSE 8000

CMD ["forever", "index.js"]
