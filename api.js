const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

app.post('/login', (req, res) => {
  if (req.body.username == 'admin' && req.body.password == '1234') {
    // 200
    res.send({ message: 'คุณได้เข้าสู่ระบบเสร็จสิ้น' })
  } else {
    // 400
    res.status(400).send({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' })
  }
})

app.listen(3000, () => console.log('API listening on http://localhost:3000'))
