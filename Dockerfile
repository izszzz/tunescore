# reference https://nodejs.org/ja/docs/guides/nodejs-docker-webapp/
FROM ubuntu:focal

# アプリケーションディレクトリを作成する
WORKDIR /app

ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update && \
    # Install node16
    apt-get install -y curl wget gpg git && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm && \
    # clean apt cache
    rm -rf /var/lib/apt/lists/* 

# アプリケーションの依存関係をインストールする
# ワイルドカードを使用して、package.json と package-lock.json の両方が確実にコピーされるようにします。
# 可能であれば (npm@5+)
COPY package*.json ./

RUN npm i --legacy-peer-deps
# 本番用にコードを作成している場合
# RUN npm install --only=production

RUN npx playwright install-deps chromium firefox webkit

# アプリケーションのソースをバンドルする
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]