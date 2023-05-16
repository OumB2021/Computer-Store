# Computer-Store

## Description
A website that operates like Amazon and PcBuilder where users can buy individual computer parts or they can build build a PC by picking the necessary parts for it. The front-end will allow our website to display many products that have their own name, price, image, etc. These information are provided by our back-end which stores a lot of different informatiom such as products and users. Products that are rated will have a chance to either be on display on the front page or be removed from the website depending on how they are rated. There is also a system in place to give users a discount or ban them based on how others view their contributions. 

## Installation
### Requirements
1. Visual Studio Code (optional, but makes things easier)
2. MongoDB
3. Mongoose

### Set up Front-End
1. Open up Visual Studio Code
2. Goto File > Open... and open the folder that contains the project files
3. On the bottom, the terminal should be opened to the same folder
4. Type "npm install" to install all necessary components
5. Type "npm run dev" to open the website 

### Set up Back-End
In order to set up the back-end, you need appropriate data for MongoDB. This can come from local database, or cloud service like MongoDB cloud.
If you created your own database on cloud, you can add the link to an .env file. On the root page of the project, create an .env file. In the file put:
NODE_ENV = development
PORT = 5000
MONGO_URI = Your-URL-Link

## Usage
Users will be able to view our website, but will only be able to buy products once they create an account. Users can also ask employees for help about certain products. Once bought, users can comment and rate the product. Employees will also be able to rate users and products as well. 

## Credits
Barry, Oumar
Frost, Ian Niles
Gao, Zhi
Sehaumpai, Max
Yeung, Richard
