const mongoose = require('mongoose');

async function connectdb() {
    try {
        await mongoose.connect('mongodb+srv://phuoclhph21930serverandroid:ph21930@cluster0.toexkox.mongodb.net/',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })
            .then(() => {
                console.log('Connected to MongoDB successfully');
            })
            .catch((error) => {
                console.error('Error connecting to MongoDB:', error);
            });
    } catch (error) {
        console.log('Connected to MongoDB failed');
    }

}

module.exports = { connectdb }

