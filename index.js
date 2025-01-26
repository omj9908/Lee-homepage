const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db'); // MongoDB 연결 설정
const authRoutes = require('./routes/auth'); // 라우트 파일 가져오기
require('dotenv').config();

const app = express();

// **JWT_SECRET 확인**
if (!process.env.JWT_SECRET) {
  console.error('ERROR: JWT_SECRET가 설정되지 않았습니다!');
  process.exit(1); // 환경 변수 누락 시 서버 종료
}

// MongoDB 연결
connectDB();

// 미들웨어 설정
app.use(cors());
app.use(bodyParser.json());

// 라우트 설정
app.use('/api/auth', authRoutes); // /api/auth 경로에 auth.js 연결

// 기본 라우트 설정 (테스트용)
app.get('/', (req, res) => {
  res.send('Server is running');
});

// 서버 실행
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`JWT_SECRET 설정 확인 완료`);
});
