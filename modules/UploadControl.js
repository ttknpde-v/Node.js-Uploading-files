const uploadFileMiddleware = require('./Uploading'), // store middleware object
    serviceRestUploading = require('../service/ServiceRestUploading'),
    ServiceRestUploading = new serviceRestUploading();

const fs = ServiceRestUploading.fs;
const path = ServiceRestUploading.path;

class UploadControl { // this class stores

    upload = async (req, res) => {
        try {

            await uploadFileMiddleware(req, res);

            if (req.file === undefined) {
                return res.status(406).json({
                    message: "Please upload a file!"
                })
            }

            res.status(201).json({
                message: `Uploaded the file successfully ${req.file.originalname}`
            })

        } catch (err) {

            if (err.code === "LIMIT_FILE_SIZE") {
                return res.status(406).json({
                    message: "File size cannot be larger than 2MB!",
                })
            }
            res.status(406).send({
                message: `Could not upload the file: ${req.file.originalname}. ${err}`,
            })
        }

    }

    listFiles = async (req, res) => {
        let allFiles = []
        fs.readdir(path.join(__dirname, '../uploaded'), (errors, files) => {
            if (errors) {
                res.status(406).json({
                    message: "Unable to scan files!",
                })
            }
            files.forEach((info) => {
                allFiles.push({
                    filename: info,
                    absolutePath: `${path.join(__dirname, '../uploaded')}/${info}`
                })
            })
            res.status(202).json({lists: allFiles})
        }) // end access folder uploaded
    }
}

const uploadControl = new UploadControl(),
    upload = uploadControl.upload,
    listFile = uploadControl.listFiles;

module.exports = {
    upload,
    listFile
}


