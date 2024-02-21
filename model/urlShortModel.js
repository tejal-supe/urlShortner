import mongoose from "mongoose";

const urlShema = new mongoose.Schema({
  shortUrl: {
    type: String,
    unique: true,
    required: true,
  },
  originalUrl: {
    type: String,
    required: true,
  },
  totalClicks: [
    {
      time: { type: Number },
    },
   
  ]
},
{
    time:true
}
);

export const URL = mongoose.model('url',urlShema);

