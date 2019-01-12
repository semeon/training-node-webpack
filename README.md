# Blank Node/Webpack setup for training

## Requirements

* Node.js
* Git CLI or GitHub Destop

## Getting started

### Step 1. In your terminal, navigate to you development folder.

### Step 2. Clone this repo to the selected folder. 

If you use command line (CLI) type:

`git clone https://github.com/semeon/training-node-webpack.git`

If you use GitHub Desktop, click:

* Add > Clone Repository > URL
* Enter the URL: `https://github.com/semeon/training-node-webpack.git` and choose where to install the repo.


### Step 3. In the terminal, get into the newly created folder:

`cd training-node-webpack`


### Step 4. Install NPM packages

`npm install`

### Step 5. Start Webpack

`npm run start`

### Step 6: Check if it is working

After step 5, webpack will launch the server and compile the code. 
If everything goes fine, you should see the message in your command line:

`ℹ ｢wdm｣: Compiled successfully.`

Now open your prowser and type `http://localhost:8080`. 
The port number (8080) may be different; look for the port number in the terminal output after step 5 (when the server is starting). It should say something like:

`ℹ ｢wds｣: Project is running at http://localhost:8080/`

If everything worked well, you will see 'Hello World!' message.