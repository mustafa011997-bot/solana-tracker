const express = require('express');
const cors = require('cors');

const app = express();

// السماح للمتصفح يتصل بالسيرفر بدون مشاكل
app.use(cors());
app.use(express.json());

// رسالة بسيطة حتى نتأكد السيرفر شغال
app.get('/', (req, res) => {
  res.send('هلا بيك مصطفى! السيرفر شغال 100% وجاهز لمراقبة المحافظ');
});

// تشغيل السيرفر
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('السيرفر شغال على البورت ' + PORT);
});
