# reference https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/
FROM mcr.microsoft.com/playwright:v1.16.3-focal

ENV PWUSER pwuser

RUN apt-get update && \
    apt-get install -y nodejs sudo && \
    usermod -aG sudo $PWUSER && \
    echo '%sudo ALL=(ALL) NOPASSWD:ALL' | tee -a /etc/sudoers && \
    npm install -g npm && \
    npx playwright install-deps 

COPY package*.json ./

RUN npm i --legacy-peer-deps

USER $PWUSER

WORKDIR /home/$PWUSER/app

# RUN npx playwright install-deps chromium firefox webkit

RUN sudo chown -R $PWUSER:$PWUSER /home/$PWUSER/app
COPY --chown=$PWUSER:$PWUSER . .

EXPOSE 3000

CMD ["npm", "run", "dev"]