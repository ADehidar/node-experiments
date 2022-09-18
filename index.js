import express from  'express';
import users from './routers/users.js';
// import bodyParser from 'body-parser'; - No need to do this as express middleware comes with json parser

const app = express();
const PORT = 5000;

// app.use(bodyParser.json()); - No need to do this as express middleware comes with json parser
app.use(express.json());

app.use('/users',users);

app.get("/",(req,res)=>{
    res.send('This is the home page');
})


app.listen(PORT,()=>{
    console.log(`Server started on http://localhost:${PORT}`);
});
