FROM quay.io/obasprom252/shadow-botv1:latest
RUN git clone https://github.com/Cipher0071/shadow-bot /root/Cipher
WORKDIR /root/Cipher
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
