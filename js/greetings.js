//获取当前小时数(0-23)
// const now_hour = String(new Date().getHours()).padStart(2, '0');
const now_hour = new Date().getHours();
console.log(now_hour)
//获取页面问候元素
const greetings = document.getElementById('greetings');
//记录想修改的问候
let greeting_text = '';
//设置规则
if (0 <= now_hour && now_hour < 6) {
    greeting_text = '凌晨好';
} else if (6 <= now_hour && now_hour < 10) {
    greeting_text = '早上好';
} else if (10 <= now_hour && now_hour < 15) {
    greeting_text = '中午好';
} else if (15 <= now_hour && now_hour < 19) {
    greeting_text = '下午好';
} else if (19 <= now_hour && now_hour < 22) {
    greeting_text = '傍晚好';
} else if (22 <= now_hour && now_hour < 24) {
    greeting_text = `晚上好`;
}
//修改问候语
greetings.innerText = greeting_text;

