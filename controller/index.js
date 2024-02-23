import { nanoid } from "nanoid";
import { isWebUri } from "valid-url";
import { UrlModel } from "../model/urlShortModel.js";

export const getShortUrl = async (req, res) => {
  try {
    const { longUrl } = req.body;
    if (!longUrl) {
      res.json({ message: "Please enter a url" });
      
    }
    const shortCode = nanoid(7);
    const alreadyExists = await UrlModel.find({ originalUrl: longUrl });
    const shortUrl = req.protocol + "://" + req.headers.host + "/" + shortCode;

    if (!isWebUri(longUrl)) {
      res.json({ message: "The url is not valid" });
    } else {
      if (alreadyExists.length > 0) {
        res.json({ message: "Url already exsists Please use another url" });
      } else {
        const data = await (
          await UrlModel.create({ originalUrl: longUrl, shortUrl: shortUrl,shortCode:shortCode })
        ).save();
        res.json({
          message: "Data added succesffuly",
          shortUrl: data.shortUrl,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export const redirectToOriginal = async (req, res) => {
  try {
    const { shortUrl } = req.body;
    if (!shortUrl) {
      res.json({ message: "Please enter a url" });
    }
    const data = await UrlModel.findOne({ shortUrl: shortUrl });
    if (data) {
    //   res.json({ originalUrl: data.originalUrl });
      res.redirect(data.originalUrl)
    } else {
      res.json({ message: "Url does not exsists" });
    }
  } catch (error) {
    console.log(error);
  }
};

export const redirectDirectly = async(req,res)=>{
try {
    // console.log(req.params.shortId,'shortid');
    const id = req.params.shortId;
    const data =await UrlModel.findOneAndUpdate({shortCode:id},{$push:{totalClicks:{times:Date.now()}}})
    res.redirect(data.originalUrl)
    // res.json({message:data})

    
} catch (error) {
    console.log(error)
}
}