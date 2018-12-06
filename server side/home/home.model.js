const mongoose = require('mongoose');
const Schema = mongoose.Schema;


module.exports = mongoose.model('Home',
               new Schema(
               	 { pid: Number, 
               		pname: String, 
               		categoryid: Number , 
               		paddress: String,
               		markDelete: {type: Boolean,default: 0},
               		idir:String,
               		desc:String,
               		categoryname: String,
                         
               	}),
               'product_service');
