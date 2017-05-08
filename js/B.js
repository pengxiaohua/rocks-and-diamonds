$(function () {
    var count = 0;          //初始化点击次数
    var rockCount = 0;      //初始化点击结果为石块的次数
    var diamondCount = 0;   //初始化点击结果为钻石的次数

    $('li').bind('click', function () {
        count++;             //点击一次count加1
        //当点击次数是3和9时，显示石块
        if (count == 3 || count == 9) {
            $(this).css('background-image', 'url(images/rock.png)');
            rockCount++;
        } else {
            //其他情况点击是钻石
            $(this).css('background-image', 'url(images/diamond.png)');
            diamondCount++;
            console.log(diamondCount);
        }

        //将钻石和石头显示数量输出
        $('.diamond-count').text(diamondCount);
        $('.rock-count').text(rockCount);

        //当钻石数量达到8个时，弹出结果！
        if (diamondCount == 8) {
            $('.alert-background').css('display', 'block');
            // $('.alert-content').css('display','block');
            $('.alert-content').show(300);
        }

        //点击后接触绑定click，再次点击相同li元素无效
        $(this).unbind('click');
    });

    //点击确认，关闭当前窗口
    $('.button-ok').click(function () {
        window.close();
    })
})