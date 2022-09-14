const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController.js")
const InternController=require("../controllers/internController")

// 1 create college 

router.post("//functionup/colleges", collegeModel.createcollege)
module.exports = router;

router.post("/functionup/colleges",collegeController.createCollege)
router.post("/functionup/interns",InternController.createIntern)
router.get("/functionup/colleges",collegeController.getCollegeDetails)


module.exports = router
