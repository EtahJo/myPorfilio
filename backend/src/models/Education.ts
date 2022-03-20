import {Schema,model} from "mongoose";


const eduSchema= new Schema({
    institution:String,
    duration:String,
    certificate:String,
    major:String,
    username:String,
    createdAt:String
});

export default model('education',eduSchema);