import express from 'express';
import multer from 'multer';
import path from 'path';
// import multerS3 from 'multer-s3';
// import aws from 'aws-sdk';
// import config from '../config';

const router = express.Router();

const storage = multer.diskStorage({
  destination: './public/uploads',
  
  filename: (req, file, cb)=> {
    cb(null, file.fieldname+'-'+Date.now()+path.extname(file.originalname));
  }
  
});

const imageFilter = (req, file, cb)=>{


  cb(null, true);
}

const upload = multer({
   storage: storage,
   fileFilter: imageFilter,
   limits:{
     fileSize: 1024 * 1024
   }
  });


  router.route('/')
  .post(upload.single('myFile'),(req, res, next)=>{
    res.json({status: 'success', file: req.file});

  });

// router.post('/', upload.single('image'), (req, res) => {
//   res.send(`/${req.file.path}`);
// });

// aws.config.update({
//   accessKeyId: config.accessKeyId,
//   secretAccessKey: config.secretAccessKey,
// });
// const s3 = new aws.S3();
// const storageS3 = multerS3({
//   s3,
//   bucket: 'amazona-bucket',
//   acl: 'public-read',
//   contentType: multerS3.AUTO_CONTENT_TYPE,
//   key(req, file, cb) {
//     cb(null, file.originalname);
//   },
// });
// const uploadS3 = multer({ storage: storageS3 });
// router.post('/s3', uploadS3.single('image'), (req, res) => {
//   res.send(req.file.location);
// });


export default router;
