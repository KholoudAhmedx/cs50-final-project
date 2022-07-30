# cs50-final-project
A simple todo application that helps you maintain your day-to-day tasks or list everything that you have to do which uses CRUD operations to store the data of each user into the database.<br />
To use the application you first have to create a new account then to login to be able to add/update/delete new tasks.

## [Demo link ]: (https://youtu.be/aiN8VIyxHDg)

# Tech/Framework used
## Built With
<ul>
  <a href = "https://nodejs.org/en/" >Node </a> - JavaScript runtime built on Chrome's V8 JavaScript engine  <br />
 <a href = "https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm">Express</a>- is a framework for building web applications on top of Node.js. It simplifies the servercreation process that is already available in Node. In case you were wondering, Node allows you to use JavaScript as your server-side language.<br />
 <a href = "https://www.mongodb.com/">mongoDb </a>- is a database. This is the place where you store information for your websites (or applications).<br />
</ul>
  

## Dependencies
nodemon <br/>
express <br />
mongoose <br />
ejs <br />
connect-flash <br />
connect-session <br />
express-session <br />
passport <br />
bootstrap <br />
bcryptjs <br />

# Getting started
## prerequisites 
Below installing steps are needed only for the first time when you setup your machine. <br />
Install nodejs server from https://nodejs.org/en/

## Installing 
1. Clone this git repo, if you have not done already <br />
```
git clone https://github.com/ikholoudmohamedd/cs50-final-project.git
```
2. Creates a package.json file which helps you manage dependencies using this command 
```
npm init
```
3. Install node module dependencies from the Json package file. This can be done by running the command from the terminal. <br/>
```
npm install 
``` 
Once the dependencies have been installed, you are now ready to use the program.<br />

## Run 
Once the dependencies are installed, in the terminal, you can run the command `node app.js`. This will run the application and the user can go to <a href = http://localhost:3000/> `localhost:3000/` </a> to view the application, or you can install nodemon package -it restarts the server for you each time you update your code and save it- through this command <br />
```
npm install nodemon 
```
then run the command `nodemon app` in the terminal and go to `localhost:3000` to view the app.<br />


