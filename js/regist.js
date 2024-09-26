// 使用 script 标签引入 axios.js
var script = document.createElement('script');
script.src = './js/luuuyutingRequest.js'; // 替换为实际的 axios.js 文件路径
document.head.appendChild(script);

// 用户注册请求逻辑
$(document).ready(function() {
    // 提交表单
    $('#button').on('click', function(e) {
        e.preventDefault(); // 阻止默认表单提交

        // 获取输入值
        const username = $('#txtNo').val().trim();
        const password = $('#txtPwd').val().trim();
        const email = $('#txtEmail').val().trim(); // 记得在HTML中添加邮箱输入框

        // 表单验证
        if (checkInputs(username, password, email)) {
            // 创建请求实例
            const requestInstance = new luuuyutingRequest();

            // 发送 POST 请求
            requestInstance.post({
                url: '/auth/register',
                data: {
                    username: username,
                    password: password,
                    email: email
                }
            }).then(res => {
                // 处理成功响应
                console.log('注册成功:', res);
                alert('注册成功，请登录。');
                window.location.href = 'login.html'; // 注册成功后重定向到登录页
            }).catch(err => {
                // 处理错误响应
                console.error('注册失败:', err);
                alert('注册失败，请重试。');
            });
        }
    });
});

// 输入验证函数
function checkInputs(username, password, email) {
    let valid = true;

    // 用户名验证
    if (username === '') {
        $('#prompt_no').text('用户名不能为空').addClass('spanBlurOk');
        valid = false;
    } else {
        $('#prompt_no').text('').removeClass('spanBlurOk');
    }

    // 密码验证
    if (password.length < 6) {
        $('#prompt_pwd').text('密码至少6位').addClass('spanBlurOk');
        valid = false;
    } else {
        $('#prompt_pwd').text('').removeClass('spanBlurOk');
    }

    // 邮箱验证
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 简单的邮箱正则表达式
    if (!emailPattern.test(email)) {
        $('#prompt_email').text('请输入有效的邮箱').addClass('spanBlurOk');
        valid = false;
    } else {
        $('#prompt_email').text('').removeClass('spanBlurOk');
    }

    return valid;
}
