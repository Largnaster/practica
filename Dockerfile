FROM node:12.16.2

COPY ["package.json", "package-lock.json", "/usr/src/"]

RUN ["/bin/bash","-c","apt-get update && apt-get install nano"]

WORKDIR /usr/src

RUN npm install

COPY [".", "/usr/src/"]

EXPOSE 8080

CMD ["npm", "run", "dev"]
