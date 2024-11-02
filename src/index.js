// require('dotenv').config({path:"./env"})
// Import the necessary modules
import PORT from "../"; // Incorrect import; should import the PORT variable from a module if needed
import dotenv from "dotenv"; // Import dotenv to load environment variables from a .env file
import connectDB from "./db/index.js"; // Import the database connection function from the db module

// Configure dotenv to load environment variables
dotenv.config({
    path: "./env" // Specify the path to the .env file; typically should be ".env"
});

// Call the connectDB function to establish a connection to the MongoDB database
connectDB()
    .then(() => {
        // If the connection is successful, start the Express server
        app.listen(process.env.PORT || 8000, () => {
            // Listen on the specified PORT from environment variables, or default to 8000 if not set
            console.log(`Server is running at port ${process.env.PORT || 8000}`); // Log a message indicating the server is running
        });
    })
    .catch((error) => {
        // If there is an error connecting to MongoDB, log the error message
        console.error("MONGODB CONNECTION FAILED !!!", error); // Use a comma to separate the string and the error object for proper logging
    });






// import express  from "express"
// const app= express()

// ; (
//     async () => {
//         try {
//             await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//             app.on("error",(err)=>{
//                 console.log("Error");
//                 throw err
                
//             })
//             app.listen(process.env.PORT,()=>{
//                 console.log(` App is listing on ${process.env.PORT}`)
//             })
//         } catch (error) {
//             console.error('ERROR', error)
//             throw error
//         }
//     }
// )()