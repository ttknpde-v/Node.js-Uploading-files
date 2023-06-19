const serviceRestUploading = require('../service/ServiceRestUploading') ,
      ServiceRestUploading = new serviceRestUploading()
let util = ServiceRestUploading.util ,
    multer = ServiceRestUploading.multer ,/* use Multer to manage multipart/form-data and upload files. */
    path = ServiceRestUploading.path

class Uploading { /* role of class is middleware for file upload */

    #maxSize = 2 * 1024 * 1024 // 2 MB

    #storage = multer.diskStorage({
        /*
            multer.diskStorage(), which has two properties:
            destination: The folder used to store the uploaded files or the path
            filename: chooses the name that will be saved in storage or the file’s name
        */
        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, '../uploaded'))
        },
        filename: (req, file, callback) => {
            console.log(file.originalname) // when uploaded , log file name
            callback(null, file.originalname)
        }
    })


    uploadFile = multer({
        storage: this.#storage,
        limits: {
            fileSize: this.#maxSize
            // Our file size will be limited to 2 MB
        }
    }).single("file")
    // "file" is key when I sent through Postman

}

// creates the exported middleware object that can later be used with async-await.
let uploadFileMiddleware = util.promisify(new Uploading().uploadFile)
module.exports = uploadFileMiddleware


