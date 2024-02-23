import mongoose from "mongoose";

const urlShema = new mongoose.Schema({
  shortUrl: {
    type: String,
    unique: true,
    // required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortCode:{
    type:String,
    unique: true,

  },
  totalClicks: [
    {
      times: { type: Number },
    },
   
  ]
},
{
    times:true
}
);

export const UrlModel = mongoose.model('url',urlShema);

 