1.在容器中追加元素
jQuery的append()方法可以在获取某个DOM元素后追加内容，其内容可以是HTML代码或者文本。

$('#messages').append(`<p><span>${timestr}</span><br /><span>你发送了一个抖动<span></p>`);


2.jQuery使操作对象发生抖动

该操作基于jquery-ui插件,此插件依赖jquery，使用示例

<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="https://apps.bdimg.com/libs/jqueryui/1.10.4/jquery-ui.min.js"></script>
$( ".chatPage" ).effect( "shake" );
3.隐藏操作对象

$(".loading-div").hide();
4.改变操作对象的css样式

$('body').css('overflow','scroll');
5.在操作对象里写入HTML代码

$('#statistics').html('『云友论坛稳定运行中☺本站浏览次数：{$views}』');
6.给操作对象监听回车事件

/*设置监听事件，向输入框中输入内容，当键盘按键弹起的时候，将输入的内容作为参数传入到函数info中*/
$("#myinput").bind("keyup",function(event){
/*当键盘按下上下键的时候，不进行监听，否则会与keyup事件起冲突*/
if(event.keyCode==38||event.keyCode==40){
return false;
}
var value=$("#myinput").val();
info(value);
})
7.百度搜索框智能提示---jsonp

<form method="get">
     <input list="languageList" name="q">
     <datalist id="languageList" ></datalist> 
     <div>
     <input type="submit" value="搜素">
     <i onclick="Focus()"></i>
     </div> 
</form>
<script>
/*设置监听事件，向输入框中输入内容，当键盘按键弹起的时候，将输入的内容作为参数传入到函数info中*/
$("#myinput").bind("keyup",function(event){
/*当键盘按下上下键的时候，不进行监听，否则会与keyup事件起冲突*/
if(event.keyCode==38||event.keyCode==40){
return false;
}
var value=$("#myinput").val();
info(value);
})
/*将ajax封装到函数中*/
function info(value){
/*百度搜索框智能提示的接口*/
var url="https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su";
/*需要传入的参数，cb是callback的缩写*/
var data={
wd:value,
cb:"helloword"
}
/*因为涉及跨域，这里使用jsonp*/
$.ajax({
url:url,
data:data,
type:"GET",
dataType:"jsonp",
jsonpCallback:"helloword",
/*跨域成功的时候返回的数据*/
success:function(result){
/*返回成功之后可以在开发者工具里的Console打印看一下*/
console.log(result);
/*将获取的数据整理后返回到页面*/
var a=result.s;
var list="";
for(var i in a){
var l = a[i];
list+="<option>"+l+"</option>";
}
$("#languageList").html(list);
},
/*跨域失败的时候返回的数据*/
error:function(){
console.log("error");
}
})
}
</script>

8.对操作对象隐藏和显示

$('.header3').fadeOut("slow");
$('.header3').fadeIn("slow");
9.对操作对象延时控制隐藏和显示

<script>
          $(document).ready(
           function()
            {
            /**
            *1.delay函数是jquery 1.4.2新增的函数
            *2.hide函数里必须放一个0,不然延时不起作用
            */
            $('#topBanner2').delay(30000).hide(0);
        }
           );
      </script>
10.Ajax请求

客户端：

// 判断是不是护眼模式

<script>
	$(function(){
		$.post("{:url('//addons/cms/index/istheme')}",function(res){
			if(res.code==1){
				$('header3').css('background-color','gray');
				$('#cover1').css('background-color','gray');
				$('#eye').html('关闭护眼');
			}else{
				$('header3').css('background-color','');
				$('#cover').css('background-color','');
				$('#eye').html('开启护眼');
			}
		},'json')
	})
</script>

//  开启和关闭护眼模式

<script>
	function eye(obj){
	if(obj.innerHTML=='开启护眼'){
		$.post("{:url('//addons/cms/index/eye')}",{'type':'open'},function(res){
			if(res.code==1){
				$('header3').css('background-color','gray');
				$('#cover').css('background-color','gray');
				obj.innerHTML='关闭护眼';
				window.location.reload();
			}
		},'json')
	}else if(obj.innerHTML=='关闭护眼'){
		$.post("{:url('//addons/cms/index/eye')}",{'type':'close'},function(res){
			if(res.code==-1){
				$('header3').css('background-color','');
				$('#cover').css('background-color','');
				obj.innerHTML='开启护眼';
				window.location.reload();
			}
		},'json')
	}
}
</script>


服务端：

// 判断是不是护眼模式
    public function istheme(){
        if(Cookie::get('theme')){
            exit(json_encode(array('code'=>1)));
        }else{
            exit(json_encode(array('code'=>-1)));
        }
    }
}

//  开启和关闭护眼模式
    public function eye(){
        $type = input('post.type');
        if($type=='open'){
            // 开启护眼 设置cookie
            Cookie('theme','on');
            exit(json_encode(array('code'=>1)));
        }else if($type=='close'){
            // 关闭护眼 清除cookie
            Cookie::delete('theme');
            exit(json_encode(array('code'=>-1)));
        }
    }