//年月日联动

//年
var year = $('#nian').find("option:selected").val();
//月
var month = $('#y').find("option:selected").val();
// 日
var day = $('#ri').find("option:selected").val();

	var dateOption = (function () {

    var option = { 0: "nian", 1: "yue", 2: "ri" };
    function renderOption(min, max) {
        var i = min, optionHtml = "";
        for (; i < max; i++) {
            optionHtml += "<option value='" + i + "'>" + i + "</option>";
        }

        optionHtml = "<option value='-1'>选择</option>" + optionHtml;

        return optionHtml;
    }
    function getTotalDayByDate(year, month) {
        var dayCount = 0;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                dayCount = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                dayCount = 30;
                break;
            case 2:
                //闰年计算
                if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
                    dayCount = 29;
                else
                    dayCount = 28;
                break;
        }
        return dayCount;
    }
    $("#nian").empty().append(renderOption(1920, 2020));
    $("#yue").empty().append(renderOption(1, 13));
    $("#yue").change(function () {
        var year = parseInt($("#nian").val());
        var month = parseInt($(this).val());
        var dayCount = getTotalDayByDate(year, month);
        $("#ri").siblings("span").text("选择");
        $("#ri").empty().append(renderOption(1, dayCount + 1));
    });
    $("#nian,#yue,#ri").change(function () {
        var val = $(this).val();
        $(this).siblings("span").text(val);
    });
})();








//数据库连接
var usern=m$("#usern").value;
var uname=m$("#uname").value;
var username=usern+uname;
m$("#zhuce").onclick = function(){
    //1、
    let xhr = new XMLHttpRequest();

    xhr.open("post","zhuce.php",true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="0"){
                m$(".error").style.color ="red";
                m$(".error").innerHTML ="注册失败";
            }else if(xhr.responseText=="1"){
                m$(".error").style.color ="greenyellow";
                m$(".error").innerHTML ="注册成功，请<a href='login.html'>登录</a>";
            }
        }
    }
    //post方式：设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端数据（键值对）放在send函数的参数里。
    let sendstr = `username=username userpass=m${m$("#userpass").value}`;
    xhr.send(sendstr);

}


function checkuser(obj){
    let xhr =new XMLHttpRequest();

    //2 设置请求参数
    xhr.open("get","zhuce.php?username="+username,true);

    //3 设置回调函数
    xhr.onreadystatechange = function(){
        if(xhr.readyState==4 && xhr.status==200){
            //5 接收请求
            obj.nextElementSibling.innerHTML =  xhr.responseText;
        }
    }
    //4 发送请求
    xhr.send();

}



function check(){
    //非空判断：
    if(m$("#usern").value=="" || m$("#uname").value=="" || m$("#phone").value=="" || m$("#yzm").value=="" || m$("#message").value=="" || m$("#userpass").value==""){
        alert("亲，请把带星号的都输入了");
        return false;//阻止浏览器的默认行为
    }
    //判断用户名是否符合规则

    //判断密码和重复密码是否一致。

    
}

function m$(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}	
