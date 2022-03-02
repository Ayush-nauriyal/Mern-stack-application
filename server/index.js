import mongoose from "mongoose";
import bodyParser from "body-parser";// parses your request and converts it into a format from which you can easily extract relevant information that you may need.
import express from "express";//Express provides methods to specify what function is called for a particular HTTP verb ( GET , POST , SET , etc.) and URL pattern ("Route"), and methods to specify what template ("view") engine is used, where template files are located, and what template to use to render a response.

import cors from "cors";//allows you to make requests from one website to another website in the browser
import postRoutes from './routes/post.js';

const app = express();


app.use(bodyParser.json({limit:"30mb",extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}));
app.use(cors());
app.use('/posts',postRoutes);

const connection_url = 'mongodb+srv://Ayushnauriyal:Ayushnauriyal123@cluster0.oktey.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

mongoose.connect(connection_url,{ useNewUrlParser: true ,useUnifiedTopology: true })
.then(() => app.listen(PORT,()=> console.log(`listening on port : ${PORT}`)))
.catch((error) => console.log(error.message) );

//mongoose.set('useFindAndModify', false);