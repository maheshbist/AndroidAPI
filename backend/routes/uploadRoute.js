import express from 'express';
import multer from 'multer';
import path from 'path';


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

  });


  router.route('/')
  .post(upload.single('myFile'),(req, res, next)=>{
    res.json({status: 'success', file: req.file});

  });



export default router;
