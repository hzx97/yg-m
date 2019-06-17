$(function () {
    //fullpage
    $('#fullpage').fullpage({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],


    });

    $(window).resize(function () {
        autoScrolling();
    });

    function autoScrolling() {
        var $ww = $(window).width();
        if ($ww < 888) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }
    autoScrolling();

    //交互逻辑
    var sex = true;

    //菜单栏的
    $('.nav-btn').on('click', function () {

        if ($('.menu-item').css('display') === 'none') {
            $('#header').css('background', '#000')
            $('#menu').show()
        } else {
            $('#header').css('background', 'rgba(0,0,0,0)')
            $('#menu').hide()
        }
    })

    $('#menu').on('click', function () {
        $('#header').css('background', 'rgba(0,0,0,0)')
        $('#menu').hide()
    })

    //提交验证

    $('#queryBtn').on('click', function (e) {
        e.preventDefault();
        var weChat = $('#queryInp').val()
        if (weChat === 'yes') {
            $('#res-i').removeClass().addClass('iconfont icon-icon-yes  text-primary')
            $('#resTitle').text('该账号为WantonBanana官方客服微信敬请放心咨询体验。')
            $('#res-bs').text('验证其他账号')
            $('#res').show()
        } else {
            $('#res-i').removeClass().addClass('iconfont icon-wb-icon-8  text-primary')
            $('#resTitle').text('请注意！该账号为假冒客服微信及时删除谨防上当受骗。 ')
            $('#res-bs').text('验证其他账号')
            $('#res').show()
        }
    })
    $('#res-btn').on('click', function () {
        $('#res').hide()
    })

    $('#male-btn').on('click', function () {
        sex = true;
        $('#try-case').show()

    })
    $('#female-btn').on('click', function () {
        sex = false;
        $('#try-case').show()

    })
    $('#case-refuse').on('click', function () {
        $('#try-case').hide()
    })
    $('#case-agreen').on('click', function () {

        $('#try-case').hide()
        if (sex) {
            $('#try-er-title').text('《WantonBanana男生通道官方微信')
            $('#try-er-img').removeClass().addClass('bg-male')
        } else {
            $('#try-er-title').text('《WantonBanana女生通道官方微信')
            $('#try-er-img').removeClass().addClass('bg-female')
        }
        erShow = true
        $('#try-er').show()
        

    })
    $('#try-er').on('click', function () {
        $('#try-er').hide()
     })

     


})