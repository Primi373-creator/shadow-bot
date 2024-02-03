FROM node:lts-buster
RUN git clone https://github.com/Primi373-creator/MAIN /app
RUN apt-get update \
  && apt-get install -y ffmpeg imagemagick webp \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

RUN npm install -g forever

COPY . .

EXPOSE 8000

CMD ["forever", "index.js"]
