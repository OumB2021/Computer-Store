# Computer-Store

"![alt text](https://github.com/[username]/[reponame]/blob/[branch]/image.jpg?raw=true)"


## Description
A website that operates like Amazon and PcBuilder where users can buy individual computer parts or they can build build a PC by picking the necessary parts for it. The front-end will allow our website to display many products that have their own name, price, image, etc. These information are provided by our back-end which stores a lot of different informatiom such as products and users. Products that are rated will have a chance to either be on display on the front page or be removed from the website depending on how they are rated. There is also a system in place to give users a discount or ban them based on how others view their contributions. 

## Installation
### Requirements
1. Visual Studio Code (optional, but makes things easier)
2. MongoDB
3. Mongoose
4. MongoDB Compass
5. Node.js

### Set up Front-End
1. Open up Visual Studio Code
2. Goto File > Open... and open the folder that contains the project files
4. On the bottom, the terminal should be opened to the same folder
6. Type "npm i" to install all necessary components
7. Then move the terminal to the front-end folder by typing "cd front-end"
8. While in that folder, type again "npm i" to install necessary components
10. Finally, type "npm run dev" to open the website 

### Set up Back-End
In order to set up the back-end, you need appropriate data for MongoDB. This can come from local database, or cloud service like MongoDB cloud.
If you created your own database on cloud, you can click on "Connect". A window will popup asking you to download node.js, and mongodb. Once you do that, you will be given a link that has the password cut out. You can add the link to an .env file with the correct password. On the root page of the project, create an .env file. In the file put:
  NODE_ENV = development
  PORT = 5000
  MONGO_URI = Your-URL-Link
You can also connect via mongodb compass and create a connect with the same link.
Once added, you should be able to connect to your database, and the website should start getting information from it.

## Usage
Users will be able to view our website, but will only be able to buy products once they create an account. Users will be able to add items to a shopping cart while shopping, and then purchase the items depending on if they have funds in their account. Users can also ask employees for help about certain products. Once bought, users can comment and rate the product. Employees will also be able to rate users and products as well. 

## Credits
Oumar Barry,
Ian Niles Frost,
Zhi Gao,
Max Sehaumpai,
Richard Yeung
