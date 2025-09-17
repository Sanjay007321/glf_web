const express = require("express");
const cors = require("cors");
const mongo = require("mongoose")
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 3000;
// Middleware
app.use(cors());
app.use(express.json());
mongo.connect(process.env.MONGOURL)
.then(()=>{
  console.log("CONNECTED SUCCESFULLY")
})
.catch(
  (err)=>{console.log("ERROR",err)}
)
const Schema = new mongo.Schema({
    name: {required:true,
        type:String},
    email:{required:true,
        type:String},
    mobile:{required:true,
        type:String},
    dob:{required:true,
      type:String},
    place:{required:true,type:String}
    }
    )
const model = mongo.model("detail",Schema)
// Route for handling form submission
app.post("/", async(req, res) => {
  const data = await model.create(req.body);
  console.log("Form Data Received:",req.body);
  res.status(201).json({ message: "Form submitted successfully", data });
  // Here you could save to a database
});

// Root route
app.get("/", (req, res) => {
  res.send("Express server is running 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
