import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import routes from './src/routes';

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI,
    err => {
        if (err) throw err;
        console.log('MongoDB database connection established successfully')
    });

routes(app);

// if (process.env.NODE_ENV === 'production') {
//     app.use('/', express.static(path.join(__dirname, 'frontend', 'build')));

//     app.get('*', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
//     })

// }


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
