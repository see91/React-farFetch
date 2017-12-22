import $ from 'jquery'

function getCode() {
    let vCode = '';
    for (var i = 0; i < 6; i++) {
        vCode += Math.round(Math.random() * (9 - 0) + 0);
    }
    return vCode
}

let vCode = getCode();

function code() {
    var token = '7c7d6dd7398c2eb78eafa0c22bf61e94';
    var mobile = '';
    var msg = '您的验证码为' + vCode;
    var country_code = '86';
    $.ajax({
        type: 'POST',
        url: 'http://www.api51.cn/api/smsApi/sendmsg',
        data: {
            'mobile': mobile,
            'msg': msg,
            'country_code': country_code,
            'token': token
        },
        dataType: "json",
        success: function (data) {
            if (data.result == 0) {
                alert('发送成功')
            } else {
                alert('发送失败')
            }
        }
    });

}

export default {vCode}
