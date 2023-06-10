const midnight = 0;
const morning = 4;
const midday = 10;
const afternoon = 15;
const night = 19;
//获取当前小时数(0-23)
var now_hour = String(new Date().getHours()).padStart(2, '0');
//获取页面问候元素
var greetings = document.getElementById('greetings');
//记录想修改的问候
let greeting_text = '';
//设置规则
if (midnight <= now_hour && now_hour < morning) {
    greeting_text = '大半夜的，还tm不睡'
} else if (morning <= now_hour && now_hour < midday) {
    greeting_text = '早安！一日之计在于晨'
} else if (midday <= now_hour && now_hour < afternoon) {
    greeting_text = '一转眼就到中午了'
} else if (afternoon <= now_hour && now_hour < night) {
    greeting_text = '下午记得睡个午觉'
} else if (night <= now_hour && now_hour < 24) {
    greeting_text = '晚上记得早点睡'
}
//修改问候语
greetings.innerText = greeting_text;
