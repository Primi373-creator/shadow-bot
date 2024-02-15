FROM obasprom252/shadow-botv1:latest

RUN apt-get update \
  && apt-get install -y ffmpeg imagemagick webp \
  && rm -rf /var/lib/apt/lists/*
  
RUN git clone https://github.com/Cipher0071/shadow-bot /root/Cipher

WORKDIR /root/Cipher

RUN npm install 

RUN npm install -g forever

COPY . .

EXPOSE 8000

CMD ["forever", "index.js"]
