const express = require('express');
const router = express.Router();
const collegeController = require("../controllers/collegeController.js")
const InternController=require("../controllers/internController")

 


router.post("/functionup/colleges",collegeController.createCollege)
router.post("/functionup/interns",InternController.createIntern)
router.get("/functionup/collegeDetails",collegeController.getCollegeDetails)

router.all("/*", function (req, res) {
    res.status(400).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct !!!"
    })
})


module.exports = router
