import mongoose from "mongoose";
import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import postRoutes from './routes/post.js';

const app = express();

app.use('/posts',postRoutes);

app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());

const connection_url = 'mongodb+srv://Ayushnauriyal:Ayushnauriyal123@cluster0.oktey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

mongoose.connect(connection_url,{ useNewUrlParser: true ,useUnifiedTopology: true })
.then(() => app.listen(PORT,()=> console.log(`listening on port : ${PORT}`)))
.catch((error) => console.log(error.message) );

//mongoose.set('useFindAndModify', false);