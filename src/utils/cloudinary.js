import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';

import fs from "fs"

cloudinary.config({
    cloud_name:process.env.ClOUDINARY_CLOUD_NAME,
    api_key:process.env.ClOUDINARY_API_KEY,
    api_secret:process.env.ClOUDINARY_API_SECRET,

});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto",

        })
        console.log("file id uploader succesfull",response.url);
        return response;
        

    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null
        console.error("Error uploading file to cloudinary", error);
    }
} 

export{uploadOnCloudinary}