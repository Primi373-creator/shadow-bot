FROM node:lts-buster

RUN apt-get update \
  && apt-get install -y ffmpeg imagemagick webp \
  && rm -rf /var/lib/apt/lists/*


RUN npm install -g forever

COPY . .

EXPOSE 8000

CMD ["forever", "index.js"]
