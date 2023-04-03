const mongoose = require('mongoose')

const mongoConfig = {
  url: 'mongodb://localhost:27017/cryptorium',
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};

export const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoConfig.url, mongoConfig.options);
    console.log('Connected to MongoDB');
  } catch (error :any) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default mongoConfig;