/
var script = document.createElement('script');
script.src = './js/luuuyutingRequest.js'; 
document.head.appendChild(script);



// 获取密码输入框的值

console.log('密码：', passwordValue);

btn.onclick = function () {
	console.log("按钮点击")
	const btn = document.getElementById("button")
	const loginNameInput = document.getElementById('txtLoginNo');
	const loginNameValue = loginNameInput.value;
	const passwordInput = document.getElementById('txtPwd');
	// 获取密码输入框的值并声明变量
	const passwordValue = passwordInput.value;

	const requestInstance = new luuuyutingRequest();

	requestInstance.post({
		username: loginNameValue,
		password: passwordValue
	}).then((res) => {
		console.log(res);
	}).catch((err) => {
		console.error(err);
	});
}