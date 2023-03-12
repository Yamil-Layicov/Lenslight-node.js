import mongoose from "mongoose";

const {Schema} = mongoose;

const photoShema = new Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    uploadeAt:{
        type:Date,
        default:Date.now
    }
})

const Photo = mongoose.model('Photo',photoShema);

export default Photo;