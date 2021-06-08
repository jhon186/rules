/*************************

本脚本仅用于小白，懒人一键清除京东Cookie

可解决以下问题
同一账号获取两次，即账号一 = 账号二
多账号删除ck，例：5个账号变成1个
ck获取错误，可清除再次尝试
其他京东Cookie问题

本脚本修改于NobyDa京东多合一签到脚本，只是给那些不愿意动手、动脑、甚至是看不懂中国汉字的人使用，当然其他人也可以用

======Quantumult X=======
[task_local]
0 0 0 0 1/1 ?  https://raw.githubusercontent.com/zwf234/rules/master/js/Del_jd_ck.js, tag=清除京东ck, img-url=https://qxzy.top/rules/QuantumultX/img/jd.png, enabled=true

*************************/

var DeleteCookie = true; //是否清除所有Cookie, true则开启.

var $nobyda = nobyda();

function ReadCookie() {
  DualAccount = 1;
  const EnvInfo = $nobyda.isJSBox ? "JD_Cookie" : "CookieJD"
  const EnvInfo2 = $nobyda.isJSBox ? "JD_Cookie2" : "CookieJD2"
  const EnvInfo3 = $nobyda.isJSBox ? "JD_Cookies" : "CookiesJD"
  if (DeleteCookie) {
    if ($nobyda.read(EnvInfo) || $nobyda.read(EnvInfo2) || ($nobyda.read(EnvInfo3) || '[]') != '[]') {
      $nobyda.write("", EnvInfo)
      $nobyda.write("", EnvInfo2)
      $nobyda.write("", EnvInfo3)
      $nobyda.notify("京东Cookie清除成功 !", "", '可以重新获取Cookie了')
      $nobyda.done()
      return
    }
    $nobyda.notify("脚本终止", "", '未获取京东Cookie️')
    $nobyda.done()
  } 
}


ReadCookie();
