const express =require('express');
const app= new express();
const router =require('./src/route/api');
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const hpp =require('hpp');
// const cors =require('cors');
const cookieParser = require('cookie-parser');
//const path = require("path");
const mongoose=require('mongoose');

app.use(cookieParser());

// const corsOptions = {
//     origin: ['*'], 
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: false,
// };
// app.use(cors(corsOptions));
app.use(helmet({
    contentSecurityPolicy: false, // Disable Helmet's default CSP
}));
app.use(hpp());

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));


const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter);

let URL="mongodb+srv://mezbaur2004:Proxima1@cluster0.vkg0b.mongodb.net/PORTFOLIO"
let option={user:'',pass:"",autoIndex:true};
mongoose.connect(URL,option).then((res)=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})

app.set('etag', false);

app.use("/api",router)


app.use((req, res, next) => {
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; " +
        "script-src 'self' https://cdn.jsdelivr.net https://kit.fontawesome.com; " +
        "style-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://fonts.googleapis.com https://ka-f.fontawesome.com; " +
        "img-src 'self' https://simpauldesign.com https://*.facebook.com https://i.ibb.co data:; " + // Added domain
        "font-src 'self' https://fonts.gstatic.com https://ka-f.fontawesome.com; " +
        "connect-src 'self' https://ka-f.fontawesome.com;"
    );
    next();
});






//app.use(express.static('client/dist'));


// Add React Front End Routing

//app.get('*',function (req,res) {
//   res.sendFile(path.resolve(__dirname,'client','dist','index.html'))
//})







module.exports=app;