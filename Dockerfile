FROM node:4.4

ADD . /
#RUN npm install

#RUN pwd
#RUN ls -liah

#RUN ["node", "kim/artifacts/db-reset.js"]

#RUN apt-get update && apt-get clean
RUN apt-get update && apt-get install -y xvfb chromium

ADD xvfb-chromium /usr/bin/xvfb-chromium
RUN ln -s /usr/bin/xvfb-chromium /usr/bin/google-chrome
RUN ln -s /usr/bin/xvfb-chromium /usr/bin/chromium-browser