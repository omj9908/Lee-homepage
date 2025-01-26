const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // 옵션 제거
    console.log('MongoDB connected!');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1); // 실패 시 프로세스 종료
  }
};

module.exports = connectDB;
