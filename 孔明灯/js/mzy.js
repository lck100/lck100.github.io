//获取网址参数数据（带#号的不行？）
function mzy_url_parm(variable)
{
	 var query = window.location.search.substring(1);
	 var vars = query.split("&");
	 for (var i=0;i<vars.length;i++) {
			 var pair = vars[i].split("=");
			 if(pair[0] == variable){return pair[1];}
	 }
	 return(false);
}
//获取上级地址（被iframe时）
function mzy_get_parent_url(){
    var url = null;
    if (parent !== window) { 
        try {
           url = parent.location.href; 
        }catch (e) { 
           url = document.referrer; 
        } 
     }
     return url;
}
//h5复制

function mzy_h5_copy(txt) {
  let content = txt.toString()// 复制内容，必须字符串，数字需要转换为字符串				
  if (!document.queryCommandSupported('copy')) {
    // 不支持
    return false
  }
  
  let textarea = document.createElement("textarea")
  textarea.value = content
  textarea.readOnly = "readOnly"
  document.body.appendChild(textarea)
  textarea.select() // 选择对象
  textarea.setSelectionRange(0, content.length) //核心
  let result = document.execCommand("copy") // 执行浏览器复制命令
  textarea.remove()
  if (result === false) {
  			alert('当前浏览环境不支持')
  } else {
  			alert("复制成功！")
  }	
  //return result  
}

function mzy_copy_share_url(txt) {
  let content = txt.toString()// 复制内容，必须字符串，数字需要转换为字符串				
  if (!document.queryCommandSupported('copy')) {   
    return false // 不支持
  }  
  let textarea = document.createElement("textarea")
  textarea.value = content
  textarea.readOnly = "readOnly"
  document.body.appendChild(textarea)
  textarea.select() // 选择对象
  textarea.setSelectionRange(0, content.length) //核心
  let result = document.execCommand("copy") // 执行浏览器复制命令
  textarea.remove()
  if (result === false) {
  			alert('当前浏览环境不支持')
  } else {
  			alert("成功复制了分享内容！")
  }	
}

//============================================================运行环境判断
//是否app
function mzy_isApp(){ 
    var platform=mzy_url_parm("platform");
	if (platform=="app") { 
		return true;
	} else {
		return false;
	}
 }
//安卓/ios
function mzy_isAndroid(){ 
	var u = navigator.userAgent, app = navigator.appVersion;
	var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //g
	return isAndroid;
 }
function mzy_isIos(){ 
	var u = navigator.userAgent, app = navigator.appVersion;
	var isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	return isIOS;
 }

//移动/pc端
function mzy_isWap(){ 
		var sUserAgent = navigator.userAgent.toLowerCase(); 
		var bIsIpad = sUserAgent.match(/ipad/i) == "ipad"; 
		var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os"; 
		var bIsMidp = sUserAgent.match(/midp/i) == "midp"; 
		var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4"; 
		var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb"; 
		var bIsAndroid = sUserAgent.match(/android/i) == "android"; 
		var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce"; 
		var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile"; 
		if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) { 			
			return true;//移动站
		} else {			
			return false;//PC站
		}
 }
function mzy_isPc(){ 
    var isWap=mzy_isWap();
	if(isWap) {return false;} else {return true;}
 }

//是否微信
function mzy_isWx() {
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}



  /* 当前设备浏览器版本信息 */
  var browser = {
	  versions: function() {
		  var u = navigator.userAgent, app = navigator.appVersion;
		  return {//移动终端浏览器版本信息
			  trident: u.indexOf('Trident') > -1, //IE内核
			  presto: u.indexOf('Presto') > -1, //Opera内核
			  webKit: u.indexOf('AppleWebKit') > -1, //苹果/谷歌内核
			  gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
			 mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
			 ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //iOS终端
			 android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //Android终端或者UC浏览器
			 iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
			 iPad: u.indexOf('iPad') > -1, //是否iPad
			 webApp: u.indexOf('Safari') == -1 //是否Web应该程序，没有头部与底部
		 };
	 }(),
	 language: (navigator.browserLanguage || navigator.language).toLowerCase()
 }

 //根据设备的不同，可以做一些事情。
 if (browser.versions.ios || browser.versions.iPhone || browser.versions.iPad) {
	 //window.location="http://localhost/index.html";
 }
 else if (browser.versions.android) {
	 //window.location="http://localhost/demo.php";
 }
 
//         document.writeln("语言版本: " + browser.language + "<br/>");　　
//         document.writeln("是否为移动终端: " + browser.versions.mobile + "<br/>");
//         document.writeln("iOS终端: " + browser.versions.ios + "<br/>");
//         document.writeln("Android终端: " + browser.versions.android + "<br/>");
//         document.writeln("是否为iPhone: " + browser.versions.iPhone + "<br/>");
//         document.writeln("是否iPad: " + browser.versions.iPad + "<br/>");
//         document.writeln("用户代理: " + navigator.userAgent + "<br/>");// 用户代理是一种对数据打包/创造分组头,以及编址/传递消息的部件.
        