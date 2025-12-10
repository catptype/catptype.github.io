import en from './en'

// This ensures 'th' has the exact same structure as 'en'
// If you miss a key, TypeScript will show a red line!
type MessageSchema = typeof en

const th: MessageSchema = {
  ui: {
    hello: 'สวัสดี',
    vue: 'วู',
    css: 'เทลวินด์ ซีเอสเอส',
    template: 'เทมเพลต'
  },
  counter: {
    title: 'ตัวอย่าง Pina',
    current: 'ค่าปัจจุบัน',
    double: 'ค่าดับเบิ้ล',
    inc_btn: 'เพิ่ม',
    reset_btn: 'รีเซ็ท',
  }
}

export default th