const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

const app = express();
const fileUpload = require("./middleware/file-upload");
const userRoutes = require("./routes/patient");
const doctorRoutes = require("./routes/doctor");
const staffRoutes = require("./routes/staff");
const adminRoutes = require("./routes/admin");
// const erroeRoutes = require('./')

// const pdfFile = fs.readFileSync("uploads\\pdfs\\036747b0-9001-11ec-a741-f52a5a012c56SEM 6 H.pdf");

// const pdfFile2 = fs.readFileSync("uploads\\pdfs\\86de2900-9007-11ec-ba67-3943b9020bf605_MongoDB.pdf");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads/pdfs', express.static(path.join('uploads', 'pdfs')));

// app.use('/uploads' , fileUpload.single('file') ,(req,res,next) => {
//   console.log("Hey");
//   console.log(req.file.path);
// })
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

app.use(userRoutes);
app.use('/doctor',doctorRoutes);
app.use('/staff',staffRoutes);
app.use('/admin',adminRoutes);

// app.use((error, req, res, next) => {
//   if (req.file) {
//     fs.unlink(req.file.path, err => {
//       console.log(err);
//     });
//   }
//   else{
//     console.log("Something went wrong");
//   }
// });
// app.get("/", (req, res, next) => {
//   res.send("It's Working");
// });

// pdfParse(pdfFile).then(function (data) {
//   console.log(data.numpages);
//   console.log(data.info);
//   console.log(data.text);
// })

// pdfParse(pdfFile2).then(function (data) {
//   console.log(data.numpages);
//   console.log(data.info);
//   console.log(data.text);
// })
mongoose
  .connect("mongodb+srv://Project:project@digital-hospital.9zafj.mongodb.net/Digital-Hospital?retryWrites=true&w=majority")
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => {
    console.log(err);
  });
