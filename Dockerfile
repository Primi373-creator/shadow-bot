FROM node:lts-buster

RUN apt-get update && \
  apt-get install -y \
  ffmpeg \
  imagemagick \
  webp && \
  apt-get upgrade -y && \
  rm -rf /var/lib/apt/lists/*

RUN yarn global add forever qrcode-terminal 

COPY . .

EXPOSE 3000

CMD ["forever", "index.js"]
