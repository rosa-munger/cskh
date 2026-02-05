$(function () {
  //点击事件
  dainjiclick();
});
function dainjiclick() {
  $(".in-common-use").on("click", "li", function () {
    $(this).addClass("use-text").siblings().removeClass("use-text");
    $("#" + $(this).attr("data-text"))
      .fadeIn()
      .siblings()
      .hide();
  });
  //PC端li跳转页面 - 打开客服聊天页面
  $("#ultest").on("click",".back_XL",function(e){
    e.preventDefault();
    window.open('chat.html', '_blank');
  });
  //移动端li跳转页面 - 打开客服聊天页面
  $("#move-cem").on("click", ".back_move", function (e) {
    e.preventDefault();
    window.open('chat.html', '_blank');
  });
  $("#bookmarkme").click(function () {
    if (window.sidebar && window.sidebar.addPanel) {
      // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, "");
    } else if (window.external && "AddFavorite" in window.external) {
      // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) {
      // Opera Hotlist
      this.title = document.title;
      return true;
    } else {
      // webkit - safari/chrome
      alert(
        "Press " +
          (navigator.userAgent.toLowerCase().indexOf("mac") != -1
            ? "按Ctrl / Cmd "
            : "CTRL") +
          "+ D将此页加入书签。"
      );
    }
  });
  $(".neirf #bookmarkme").click(function () {
    if (window.sidebar && window.sidebar.addPanel) {
      // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, "");
    } else if (window.external && "AddFavorite" in window.external) {
      // IE Favorite
      window.external.AddFavorite(location.href, document.title);
    } else if (window.opera && window.print) {
      // Opera Hotlist
      this.title = document.title;
      return true;
    } else {
      // webkit - safari/chrome
      alert(
        "Press " +
          (navigator.userAgent.toLowerCase().indexOf("mac") != -1
            ? "按Ctrl / Cmd "
            : "CTRL") +
          "+ D将此页加入书签。"
      );
    }
  });
  //在线客服
  $(".online_service").on("click", function () {
    var classTools = $(this).toggleClass("onService");
    var classType = classTools.attr("class");
    if (classType.indexOf("onService") != -1) {
      $(".kfService").show();
    } else {
      $(".kfService").hide();
    }
  });
  //点击弹框中在线客服连接 - 打开客服聊天页面
  $(".kfService button").on("click", function () {
    window.open('chat.html', '_blank');
  });
}
//--------PC端测速
$.test = function () {
  var span,
    d = document, 
    li,
    a,
    i,
    lis = d.getElementById("ultest").getElementsByClassName("back_XL");
  var html1 = "";
  for (i = 0; (li = lis[i++]); ) {
    a = li.getElementsByTagName("a")[0];
    if (!a) {
      continue;
    }
    span = d.createElement("div");
    span.ctime = new Date();
    span.innerHTML =
      '测速中...<img src="' +
      a.href +
      '" border="0" width="1" height="1" onerror="$.testresult(this)" />';
    li.appendChild(span);
  }
};
$.testresult = function (img) {
  var span = img.parentNode;
  var n = "em";
  if (!$.testresult.isrun) {
    $.testresult.isrun = true;
    $(span).parent().find("div").css("background", "#F1010A");
    span.innerHTML =
      '<font id="kkk" color="#ffffff" style=" font-weight:bolder">' +
      ((new Date() - span.ctime) / 1000).toFixed(2) +
      "秒 最快</font>";
  } else {
    span.innerHTML = "" + ((new Date() - span.ctime) / 1000).toFixed(2) + "秒";
  }
};
var ran = Math.random();

//--------移动端端测速
$.move_test = function () {
  var span,
    d = document,
    li,
    a,
    i,
    lis = d.getElementById("move-cem").getElementsByClassName("back_move");
  var html1 = "";
  for (i = 0; (li = lis[i++]); ) {
    a = li.getElementsByTagName("a")[0];
    if (!a) {
      continue;
    }
    span = d.createElement("div");
    span.ctime = new Date();
    span.innerHTML =
      '<div class="cesu">测速中...</div>' +
      '<img src="' +
      a.href +
      '" border="0" width="1" height="1" onerror="$.move_result(this)" />';
    li.appendChild(span);
  }
};
$.move_result = function (img) {
  var span = img.parentNode;
  var n = "em";
  if (!$.move_result.isrun) {
    $.move_result.isrun = true;
    $(span).parent().find("a").css("background", "red");
    $(span).parent().find("span").css("color", "#ffffff");
    span.innerHTML =
      '<font id="kkk" color="#ffffff" style=" font-weight:bolder">' +
      ((new Date() - span.ctime) / 1000).toFixed(2) +
      '秒 最快</font><i class="boult jiant5"></i>';
  } else {
    span.innerHTML =
      "" +
      ((new Date() - span.ctime) / 1000).toFixed(2) +
      "秒" +
      '<i class="boult jiant"></i>';
  }
};
var ran = Math.random();

