let serverPort = 3500;
require('dotenv').config()
if(process.env.NODE_ENV == "development"){
    serverPort = process.env.PORT
}

module.exports = {
    serverPort
}



