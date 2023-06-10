
const midnight_hour = 0;
const night_hour = 6;
const morning_hour = 10;
const midday_hour = 15;
const afternoon_hour = 18;
const evening_hour = 22;

//获取当前小时数(0-23)
const now_hour = String(new Date().getHours()).padStart(2, '0');
//获取页面问候元素
const greetings = document.getElementById('greetings');
//记录想修改的问候
let greeting_text = '';
//设置规则
if (midnight_hour <= now_hour && now_hour < night_hour) {
    greeting_text = '大半夜的，还tm不睡';
} else if (night_hour <= now_hour && now_hour < morning_hour) {
    greeting_text = '早！打工人';
} else if (morning_hour <= now_hour && now_hour < midday_hour) {
    greeting_text = '下午记得睡个午觉';
} else if (midday_hour <= now_hour && now_hour < afternoon_hour) {
    greeting_text = '傍晚好';
} else if (afternoon_hour <= now_hour && now_hour < evening_hour) {
    greeting_text = '晚上好';
} else if (evening_hour <= now_hour && now_hour < 24) {
    greeting_text = '再不睡等着猝死吧你';
}
//修改问候语
greetings.innerText = greeting_text;
