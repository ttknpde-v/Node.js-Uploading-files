const serviceRestUploading = require('./service/ServiceRestUploading')
      ServiceRestUploading = new serviceRestUploading()
const endpoint = require('./controller/Endpoint') ,
      Endpoint = new endpoint()

const express = ServiceRestUploading.express
const app = express()
app.use(express.urlencoded({extended:true}))
Endpoint.myRouter(app) // init router

let port = 8080;
app.listen(port, () => {
    console.log(`Running at localhost ${port}`);
});