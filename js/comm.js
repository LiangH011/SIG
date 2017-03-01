var value1;
$(function() {
	//回到顶部
	$(window).scroll(function() {
		if($(window).scrollTop() > 100) {
			$(".goTop").show();
		} else {
			$(".goTop").hide();
		}
		$(".goTop").click(function() {
			$('html,body').animate({
				scrollTop: 0
			}, 600);
			return false;
		})
	})

	/************************************联系我们表单验证***********************************/
	var statu1 = false;
	var statu2 = false;
	var statu3 = false;
	var statu4 = false;
	$(".btn-tijiao").click(function() {
		//手机号码验证
		$(".form #phone").blur(function() {
			var value = $(this).val();
			var Reg = /^1\d{10}$/;
			if(value == null || value.length == 0) {
				$(this).siblings("span").html("不能为空");
				$(this).siblings("span").css("display", "block");
			} else {
				if(!Reg.test(value)) {
					$(this).siblings("span").html("请输入以1开头的11位数字");
				} else {
					statu1 = true;
					$(this).siblings("span").html("输入正确");
				}
			}
		})

		//QQ号验证
		$(".form #qqNum").blur(function() {
			var value = $(this).val();
			var Reg = /^[1-9]{1}[0-9]{5}$/;
			if(value == null || value.length == 0) {
				$(this).siblings("span").html("不能为空");
				$(this).siblings("span").css("display", "block");
			} else {
				if(!Reg.test(value)) {
					$(this).siblings("span").html("请输入数字");
				} else {
					statu2 = true;
					$(this).siblings("span").html("输入正确");
				}
			}
		})

		//邮箱验证
		$(".form #email").blur(function() {
			var value = $(this).val();
			var Reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
			if(value == null || value.length == 0) {

				$(this).siblings("span").html("不能为空");
				$(this).siblings("span").css("display", "block");
			} else {
				if(!Reg.test(value)) {
					$(this).siblings("span").html("请输入正确的邮箱");
				} else {
					statu3 = true;
					$(this).siblings("span").html("输入正确");
				}
			}
		})

		//文本输入验证

		$(".form textarea")
			.focus(function() {
				$(this).text("");
			})
			.blur(function() {
				$(this).text(value1);
				if(value1 == null || value1.length == 0) {
					$(this).siblings("span").html("不能为空");
					$(this).siblings("span").css("display", "block");
				} else {
					statu4 = true;
					$(this).siblings("span").html("输入正确");
				}
			})
		if(statu1 && statu2 && statu3 && statu4) {
			console.log(1)
			$(".form").submit();
		} else {
			return false;
			console.log(2)
		}

	})

})

function txt() {
	value1 = $(".form textarea").val();

	console.log(value1);
}