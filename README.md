# cs50-final-project
A simple todo application that helps you maintain your day-to-day tasks or list everything that you have to do which uses CRUD operations to store the data of each user into the database.<br />
To use the application you first have to create a new account then to login to be able to add/update/delete new tasks.

## [Demo link ]: (https://youtu.be/aiN8VIyxHDg)

# Tech/Framework used
## Built With
<ul>
  <a href = "https://nodejs.org/en/" >Node </a> - JavaScript runtime built on Chrome's V8 JavaScript engine  <br />
 <a href = "https://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm">Express</a>- is a framework for building web applications on top of Node.js. It simplifies the servercreation process that is already available in Node. In case you were wondering, Node allows you to use JavaScript as your server-side language.<br />
 <a href = "https://www.mongodb.com/">mongoDb </a>-.This is the place where you store information for your websites (or applications).<br />
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
You should be able to see this <br />
<img src = "/images/nodemon.png?raw=true">
<br />
Now to be able to login and to register you have to create a free acount, if you don't have one already, on <a href = "https://www.mongodb.com/atlas/database" >MongodbAtlas</a> It's a cloud database which is already hosted for us and it's a lot easier to manage <br/>
Now you can log in and the first thing you have to do is <br />
1. ` create a new project
2. ` then go to `Database access` 
3. ` add a new user `  and provide username and password and copy them.
4.  Go to ` Network access ` to add an IP address , just add your current IP address then hit confirm.
5.   Now go to ` Database` under deployment section and build a new database > choose shared one > give a name to your cluster for example **todoApp** and then hit ` create cluster ` .
6. Now after you created the first cluster you have to connect the database to your code so go to 
    1.` connect button ` choose ` 
    2.connect to your application ` 
    3.then take the URL copy one like this ` mongodb+srv://user1:<password>@cluster0.hqfug4d.mongodb.net/?retryWrites=true&w=majority ` <br />
Now you should be able to create a new collection - if you still cannot add a new collection then 
   1.go to ` Network access ` then `
   2.add this IP address `0.0.0.0/0`a and make it accessible from every where- 
   3.give a name to the database , then give a name to your collection and go to code. <br />
   
**code changes**
1. You need to change the username and password given in the database configuration with the username and password you have created
<img src = "/images/config.png?raw=true"> <br />
2. go to `models` in `User.js` change 'User' with the name of your collection and do the same in `todo.js` 
<img src = "/images/model.png?raw= true">
Now your application should be ready to work.
