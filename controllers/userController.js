const multer = require("multer");
const Toheeb =  require("../models/userModel");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/img/users/")
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    cb(null, `user-${Date.now()}.${ext}`)
  }
});

const filter = (req, file, cb) => {
  if(file.mimetype.startsWith("image")) {
    cb(null, true)
  } else {
    cb(new Error("Not an image, please pass in only image"), false)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: filter
});

/*
const upload = multer({ dest: 'public/img' });*/

exports.uploadUserPhoto = upload.single('image');

exports.uploadMultipleImages = upload.array('projectImages', 15);

exports.getUser = async (req, res) => {
  try {
    const user = await Toheeb.findById(req.params.id);
    
    res.status(200).json({
      status: "success",
      user
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    })
  }
}

exports.getAllUser = async (req, res) => {
  try {
    const user = await Toheeb.find();
    
    res.status(200).json({
      status: "success",
      result: user.length,
      user
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    })
  }
}

exports.createUser = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    if(req.file) {
      req.body.image = req.file.filename
    }
    const user = await Toheeb.create(req.body);
    
    res.status(201).json({
      status: "success",
      user
    });
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      messages: e
    })
  }
}

exports.deleteUser = async (req, res) => {
  try {
    await Toheeb.findByIdAndDelete(req.params.id);
    
    res.status(204).json({
      status: "success"
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    })
  }
}

exports.updateUser = async (req, res) => {
  try {
    const user = await Toheeb.findByIdAndUpdate(req.params.id, req.body);
    
    res.status(200).json({
      status: "success",
      user
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e
    })
  }
}

exports.addPortfolio = async (req, res) => {
  try {
    
    const user = await Toheeb.findById(req.params.id)
  
    const projects = user.projects.push(req.body);
    
    if(req.files) {
      req.files.forEach((el, i) => {
        user.projects[user.projects.length - 1].projectImages.push(el.filename)
        console.log(user.projects[user.projects.length - 1].projectImages);
        console.log(el.filename);
      })
    }
    await user.save();
    res.status(200).json({
      status: "success",
      user
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message
    })
  }
}

exports.removePortfolio = async (req, res) => {
  try {
    const { id, nested } = req.params;
    
    const user = await Toheeb.findById(id)
  
    const projects = await user.projects.pull(nested);
    
    await user.save();
    res.status(200).json({
      status: "success"
    })
  } catch (e) {
    res.status(400).json({
      status: 'fail',
      message: e.message
    })
  }
}
