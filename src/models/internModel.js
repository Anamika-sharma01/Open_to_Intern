const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: 'intern name is required',
        trim : true
    },
    email: {
        type: String, 
        trim : true ,
        lowercase : true,
        required: 'Email address is required',
        uniuqe: true,
        },
    mobile:{
        type:Number,
         required: "mobile no mandatory",
          uniuqe: true, 
      
        },
    collegeId: {
        type: ObjectId, 
        ref:"collegename"
      },
    isDeleted: {
        type: Boolean, 
        default: false
    }

},{timestamps: true})
   

module.exports = mongoose.model('internname', internSchema)