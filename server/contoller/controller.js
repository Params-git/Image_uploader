const uploadModel = require("../model/schema");
const fs = require("fs");

exports.home = async (req, res) => {
    const all_images = await uploadModel.find();
    res.render('index', {images: all_images});
}

exports.uploads = (req, res, next) => {
    const files = req.files;

    if(!files){
        const error = new Error('Please choose files');
        error.httpStatusCode = 400;
        return next(error);
    }

    //convert images into base64 encoding
    let imgArray = files.map((file) => {
        let img = fs.readFileSync(file.path);

        return encode_img = img.toString('base64');
    })


    const result = imgArray.map((src, index) => { 
    
        //create object to store data in the collection
        let finalImg = {
            filename: files[index].originalname,
            contentType: files[index].mimetype,
            imageBase64: src
        }

        let newUpload = new uploadModel(finalImg);

        return newUpload.save()
            .then(() => {
                console.log("save to database successfully");
                return {msg: `${files[index].originalname} Upload Successfully..!`}
                
            })
            .catch((error) => {
                console.log("not upload");
                // if(error){
                //     if(Array.name == 'MongoError' && error.code === 11000){
                //         return Promise.reject({ error: `Duplicate ${files[index].originalname}.File Already exist!`})
                //     }
                //     return Promise.reject({ error: error.message } || `Cannot Upload ${ files[index].originalname } Something Missing..`);
                // }
            })
    })

    Promise.all(result).then(msg => {
        // res.json(msg);
        res.redirect('/');
        console.log("upload successfully...!");
    }).catch(err => {
        res.json(err);
    })
}