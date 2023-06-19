const serviceRestUploading = require('../service/ServiceRestUploading') ,
      ServiceRestUploading = new serviceRestUploading()
const uploadControl = require('../modules/UploadControl') // store any function async. it's inside UploadControl class


let router = ServiceRestUploading.express.Router();

class Endpoint {
    myRouter = (app) => {
        router.post('/upload', uploadControl.upload)
        router.get('/reads', uploadControl.listFile)
        app.use('/api',router) // display logic
    }

}

module.exports = Endpoint