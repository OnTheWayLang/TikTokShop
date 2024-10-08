import thLocale from 'element-ui/lib/locale/lang/th'
import home from './th/home'

const th = {
    language: 'ภาษาไทย',
    message: {
        'home': home,
    },
    '手机号码最小长度为8位': 'ความยาวขั้นต่ำของหมายเลขโทรศัพท์มือถือคือ 8 หลัก',
    '邮箱账号名称最小长度为6位': 'ความยาวขั้นต่ำของชื่อบัญชีอีเมลคือ 6 ตัวอักษร',
    '邮箱只能包含英文，数字等字符': 'กล่องจดหมายสามารถมีได้เฉพาะอักขระ เช่น ภาษาอังกฤษและตัวเลข',
    '请选择正确的收货地址': 'กรุณาเลือกที่อยู่ในการจัดส่งให้ถูกต้อง',
    ...thLocale
}
export default th
