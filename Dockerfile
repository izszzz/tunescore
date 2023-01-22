# reference https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/
FROM mcr.microsoft.com/playwright:v1.16.3-focal

ENV PWUSER pwuser

RUN apt-get update && apt-get install -y sudo\
	&& usermod -aG sudo $PWUSER \
	&& npm i -g npm \
	&& npx playwright install-deps

USER $PWUSER

WORKDIR /app

RUN sudo chown -R $PWUSER:$PWUSER /app

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./

RUN npm install

# 本番用にコードを作成している場合
# RUN npm install --only=production

# アプリケーションのソースをバンドルする
COPY --chown=$PWUSER:$PWUSER . .

EXPOSE 3000

CMD ["npm", "run", "dev"]