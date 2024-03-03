If you do not have NodeJS (npm - node package manager) installed,
instructions can be found [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

Once Node has been installed, in the terminal:
1. cd into EngBot/frontend
2. run `npm install` or `npm i`
3. ignore the `WARN deprecated` messages while installing Node packages
4. (optional) run `npm start`, and search localhost:3000/ in a browser to see what React serves up for you, if nothing breaks then your build is good to go


## Important files/directories to know about
\
Within EngBot/frontend,
- /public contains static files (files that won't be compiled/executed, such as images or css files).
- /src contains files that will be compiled by Node and transformed into our website.
- package.json contains vital information about the project, including scripts to run/test our code\
the default package.json contains four scripts: `start`, `build`, `test`, and `eject`\
run `npm run [script]` to see what they do\
eventually we will have `npm run dev` to make our lives easier
- /src/index.js is the file that gets executed and loaded to your browser display.
