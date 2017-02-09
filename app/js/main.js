$(document).ready(function() {
    
    //Preloader func along 3 sec 
    setTimeout(function() {
        $('.wrap').addClass('loaded');
    }, 2000);


    var viewportWidth = $(window).width();
    var viewportHeight = $(window).height();



    //HEADER - Show popup callback
    $('.callbeck, .callback_fix, .left_btn, #buy_in_store').on('click', function(e){
        e.preventDefault();
        $('.popup_callback').fadeIn(500);
        //Callback popup - vertical centering
        var wrapperHeight = $('.form_wrapper').outerHeight();
        var formHeight = $('.form_callback').outerHeight();
        var formPadding = (wrapperHeight-formHeight)/2;
        $('.form_callback').css('top', formPadding); 
    });

    //HEADER - hide popup Callback
    $('.close').on('click', function(e){
        e.preventDefault();
        $('.popup_callback').fadeOut(500); 
    });

    //MASK for telephones
    $('input[name="телефон"]').mask('+38(999)999-99-99');

    $("form").submit(function(e) {
        e.preventDefault();
        $('form_send').find('input[type="text"]').trigger('red');
        $('form_send').find('textarea').trigger('blur');
        if (!$(this).find('input[type="text"]').hasClass('error_input') && !$(this).find('textarea').hasClass('error_input')) {
            var type = $(this).attr('method');
            var url = $(this).attr('action');
            var data = $(this).serialize();
            $.ajax({
                type: type,
                url: url,
                data: data,
                success: function() {
                    $('.popup_success').fadeIn(500);
                    var centeringSuccess = ($('.success_box').outerHeight() - $('.p_text_success').outerHeight())/2;
                    $('.p_text_success').css('margin-top', centeringSuccess);
                }
            });
        }
        $(this).trigger("reset");    
        setTimeout(function() {
            $('.popup_success').fadeOut(500);
            $('.popup_callback').fadeOut(500);
        }, 3000);
    }); 




    ////////// START DESKTOP DEVICES //////////
    if(viewportWidth>1100){

    console.log("Page for desctop is ready!");

    //MAIN - define viewport values
    
    //HEADER - Get size for #Header
    $('#header').css('height', viewportHeight).css('width', viewportWidth);

    //HEADER - Get size for slides in slider
    var slideHeight = viewportHeight * 92  / 100;
     $('.slide').css('height', slideHeight);
     // $('#slide1').css('height', slideHeight);
     // $('#slide2').css('height', slideHeight);
     // $('#slide3').css('height', slideHeight);

    //HEADER - func for slider on header
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        minSlides: 1,
        slideMargin: 0,
        moveSlides: 1,
        infiniteLoop: true,
        pager: true
    });

    //PAGE2 - Get size for page2
    $('#page2').css('height', viewportHeight).css('width', viewportWidth);
    var width_wrapper_p2 = (viewportHeight - $('#page_wrapper_page2').outerHeight()) / 2 - 70;
    // $('#page_wrapper_page2').css('margin-top', width_wrapper_p2);

        //PAGE3 - Show hidden content each item
        $('.up_item_page3').on("click", function(){
            var $this = $(this);
            var width_elem = $this.attr('data-width');
            var length_elem = $this.attr('data-length');
            var elem_id = $this.attr('id');
            var global_margin = $this.outerWidth() * width_elem;
            var this_width = $this.outerWidth() / 2;
            var real_margin = global_margin - this_width;
            var tragle_width = $('.arr_trangle_hidden').outerWidth() / 2;
            var this_margin = real_margin - tragle_width;

            var get_text = $this.find('.hover_cont_details').children('.p_details').text();

            $('.cont_for_details2').slideUp(300);
            $('.item_cont_page3').css('height', '50%').css('transition', 'all 0.25s');
            $('.cont').css('height', '50%').css('transition', 'all 0.25s');

            if ($this.hasClass('item_opened')) {
                $('.page3_cont_wrapper').css('margin-top', '0%').css('transition', 'all 0.5s');
                $this.removeClass('item_opened');
                $this.addClass('opened_again');
            }else{
                $('.cont_for_details').slideUp();
                $('.page3_cont_wrapper').css('margin-top', '-2.5%').css('transition', 'all 0.5s');
                $this.removeClass('opened_again');
            }                       


            if(width_elem==1){
                $('.cont_for_details').find('.arr_trangle').css('margin-left', this_margin);
                $this.parent().find('.cont_for_details').slideToggle(300).find('.p_details').html('<p class="p_details">' + get_text + '</p>');
                $('.up_item_page3').removeClass('item_opened');
                $this.addClass('item_opened');
                var margin_on_click = viewportHeight * 20 / 100;
                console.log('open1');
            } else{
                var some_padding = viewportWidth * 0.6 / 100;
                var this_mar_pad = some_padding*length_elem+this_margin;
                $this.parent().find('.cont_for_details').slideToggle(300).find('.p_details').html('<p class="p_details">' + get_text + '</p>');
                $('.cont_for_details').find('.arr_trangle').css('margin-left', this_mar_pad);
                // $('.page3_cont_wrapper').css('margin-top', '-2.5%').css('transition', 'all 0.5s');
                $('.up_item_page3').removeClass('item_opened');
                $this.addClass('item_opened');
            }

            if($this.hasClass('opened_again')){
                $this.removeClass('item_opened');        
            }

        });

        //PAGE3 - Show hidden content each item
        $('.down_item_page3').on("click", function(){
            var $this = $(this);
            var width_elem = $this.attr('data-width');
            var length_elem = $this.attr('data-length');
            var elem_id = $this.attr('id');
            var global_margin = $this.outerWidth() * width_elem;
            var this_width = $this.outerWidth() / 2;
            var real_margin = global_margin - this_width;
            var tragle_width = $('.arr_trangle_hidden').outerWidth() / 2;
            var this_margin = real_margin - tragle_width;

            var get_text = $this.find('.hover_cont_details').children('.p_details').text();

            $('.cont_for_details').slideUp(300);
            $('.page3_cont_wrapper').css('margin-top', '0%').css('transition', 'all 0.5s');

            if ($this.hasClass('item_opened')) {
                    $('.page3_cont_wrapper').css('margin-top', '0%').css('transition', 'all 0.5s');
                    $('.item_cont_page3').css('height', '50%').css('transition', 'all 0.25s');
                    $('.cont_page3').css('height', '50%').css('transition', 'all 0.25s');
                    $this.removeClass('item_opened');
                    $this.addClass('opened_again');
            }else{
                    $('.cont_for_details2').slideUp();
                    $('.page3_cont_wrapper').css('margin-top', '-2.5%').css('transition', 'all 0.5s');
                    $('.item_cont_page3').css('height', '45%').css('transition', 'all 0.25s');
                    $('.cont_page3').css('height', '60%').css('transition', 'all 0.25s');
                    $this.removeClass('opened_again');
            }

            if(width_elem==1){
                $('.cont_for_details2').find('.arr_trangle').css('margin-left', this_margin);
                $this.parent().find('.cont_for_details2').slideToggle(300).find('.p_details').html('<p class="p_details">' + get_text + '</p>');
                $('.down_item_page3').removeClass('item_opened');
                $this.addClass('item_opened');
                var margin_on_click = viewportHeight * 20 / 100;
            } else{
                var some_padding = viewportWidth * 0.6 / 100;
                var this_mar_pad = some_padding*length_elem+this_margin;
                $this.parent().find('.cont_for_details2').slideToggle(300).find('.p_details').html('<p class="p_details">' + get_text + '</p>');
                $('.cont_for_details2').find('.arr_trangle').css('margin-left', this_mar_pad);
                // $('.page3_cont_wrapper').css('margin-top', '-2.5%').css('transition', 'all 0.5s');
                $('.down_item_page3').removeClass('item_opened');
                $this.addClass('item_opened');
            }

           if($this.hasClass('opened_again')){
                $this.removeClass('item_opened');        
            }
        });

        //PAGE3 - close details content
        $('.close_btn_details').on("click", function(){
            $('.cont_for_details').slideUp(300);
            $('.cont_for_details2').slideUp(300);
            $('.page3_cont_wrapper').css('margin-top', '0%').css('transition', 'all 0.5s');
            $('.item_cont_page3').css('height', '50%').css('transition', 'all 0.25s');
            $('.cont').css('height', '50%').css('transition', 'all 0.25s');
        });

        //PAGE4 - show more pictures
        $("#item_cont_next").on("click", function(e) {
            e.preventDefault();
            $('#portfolio_first_items').fadeOut(500);
            $('#portfolio_second_items').fadeIn(500);
        });

        //PAGE4 - back to main gallery
        $("#item_cont_back").on("click", function(e) {
            e.preventDefault();
            $('#portfolio_second_items').fadeOut(500);
            $('#portfolio_first_items').fadeIn(500);
        });

        //Get size for page3 (services) (81.25%)
        // var sizePage3 = viewportHeight * 85.93 / 100;
        $('#page3').css('height', viewportHeight).css('width', viewportWidth);
        // console.log('page services size - ' + sizePage3);

        // var sizePage4 = viewportHeight * 107.81 / 100;
        $('#page4').css('height', viewportHeight).css('width', viewportWidth);
        // console.log('page services size - ' + sizePage4);

        // var sizePage5 = viewportHeight * 84.37 / 100;
        $('#page5').css('height', viewportHeight).css('width', viewportWidth);
        // console.log('page services size - ' + sizePage5);

        // var sizePage6 = viewportHeight * 60.93 / 100;
        $('#page6').css('height', viewportHeight).css('width', viewportWidth);
        // console.log('page services size - ' + sizePage6);

        // var sizePage7 = viewportHeight * 56.25 / 100;
        $('#page7').css('height', viewportHeight).css('width', viewportWidth);
        // console.log('page services size - ' + sizePage7);

        // var sizePage8 = viewportHeight * 404.31 / 100;
        // var sizePage8 = viewportHeight * 300 / 100;
        var sizePage8 = viewportHeight * 280 / 100;
        $('#page8').css('height', sizePage8).css('width', viewportWidth);
        // console.log('page services size - ' + sizePage8);
        var centeringMoreGoods = ($('.item_wrap').outerHeight() - $('.p_text_more').outerHeight()) / 2;
        $('#more_goods').css('margin-top' , centeringMoreGoods);


        var sizeFooter = viewportHeight * 70.87 / 100;
        $('#footer').css('height', sizeFooter).css('width', viewportWidth);
        var storeHeight =  $('#page8 .garden_store').outerHeight();
        var titleHeight = $('#page8 .title_wrapper').outerHeight(); 
        var titleTitle = $('#page8 .page_title_wrap').outerHeight(); 
        var helpMargin = sizePage8 * 3 / 100;
        var footerMargin = (storeHeight + titleHeight + titleTitle) - sizePage8 + helpMargin;
        $('#footer').css('margin-top', footerMargin);




        








   



    //HEADER - set menu on load
    var menu_make_small = viewportHeight/2;
    var scrollTop = $(window).scrollTop();
    if (scrollTop > menu_make_small) {
        $('.menu_enjoy ').css('width', '4.3%').css('transition', 'all 0.5s').css('padding-top', '5%');
        $('.textes').hide();
        $('.text_link').css('display', 'none');
        $('.img_logo').css('margin-left', '5%').css('width', '90%');
        $('.imges').css('width', '100%');
        $('.text_hover').css('display', 'none');

    } 
    if(scrollTop < menu_make_small){
        $('.menu_enjoy ').css('width', '22%').css('transition', 'all 0.5s').css('padding-top', '0%').css('bacground-color', 'red');
        $('.textes').fadeIn(100);
        $('.text_link').css('display', 'inline-block');
        $('.img_logo').css('margin-top', '15%').css('margin-left', '25%').css('width', '55%');
        $('.imges').css('width', '25%');
        $('.text_hover').css('display', 'none');
    }
    if(scrollTop > viewportHeight){
        $('.text_hover').css('display', 'inline-block');
         $('.textes').fadeOut();
    }

    
    //HEADER - CHANGE MENU ON SCROLL
    $(window).scroll(function () {
        // $('#page2').animate({scrollTop: top}, 100);
        // console.log('scroll start');
        var menu_make_small = viewportHeight/2;
        var scrollTop = $(window).scrollTop();
        if (scrollTop > menu_make_small) {
            $('.menu_enjoy').css('width', '4.3%').css('transition', 'all 0.5s').css('padding-top', '5%');
            $('.textes').fadeOut(100);
            $('.text_link').css('display', 'none');
            $('.img_logo').css('margin-left', '5%').css('width', '90%');
            $('.imges').css('width', '100%');
            var menuLinkMarginTop = $('.imges').outerHeight();
            $('.text_hover').css('margin-top', -menuLinkMarginTop);
            $('.soc_icons').css('width', '55%');


        } 
        if(scrollTop < 400){
            $('.menu_enjoy').css('width', '22%').css('transition', 'all 0.5s').css('padding-top', '0%').css('bacground-color', 'red');
            $('.textes').fadeIn(100);
            $('.text_link').css('display', 'inline-block');
            $('.img_logo').css('margin-top', '15%').css('margin-left', '25%').css('width', '55%');
            $('.imges').css('width', '25%');
            $('.text_hover').css('display', 'none');
            $('.soc_icons').css('width', '100%');
        }

        var menuLinkMarginTop = $('.imges').outerHeight();
        // console.log(scrollTop, menuLinkMarginTop);

        // if(scrollTop > 400){
        //     var menuLinkMarginTop = $('.imges').outerHeight();
        //     console.log(menuLinkMarginTop);
        // }
    });

    //HEADER - func for slider on header
    $('.bxslider').bxSlider({
        pagerCustom: '#bx-pager',
        minSlides: 1,
        // slideHeight: slideHeight,
        // slideWidth: 1500,
        slideMargin: 0,
        moveSlides: 1,
        infiniteLoop: true,
        pager: true
    });

    //HEADER - determine active menu button
    $(".menu_link").mouseover(function(e) {
                e.preventDefault();
            $(".menu_link").each( function( index, element) {
                var id_each_elem = $(element).attr("id");
                $(element).children('.imges').find('.img_link').attr("src", 'img/'+ id_each_elem +'.png');
            });

        var $this = $(this);
        var id = $this.attr("data-id");
        $(".menu_link").removeClass("active");
        $(".menu_link").find('.textes').children('.text_link').removeClass("active_text");
        $this.addClass("active").css('transition', 'all 0.5s');
        $this.find('.textes').children('.text_link').addClass("active_text");
        $this.children('.imges').find('.img_link').attr("src", 'img/'+ id +'.png').css('transition', 'all 0.5s');
    });

    $(".menu_link").mouseout(function() {
            $(".menu_link").each( function( index, element) {
               var id_each_elem = $(element).attr("id");
               $(element).children('.imges').find('.img_link').attr("src", 'img/'+ id_each_elem +'.png').css('transition', 'all 0.5s');
            });
             $(".menu_link").removeClass("active");
             $(".menu_link").find('.textes').children('.text_link').removeClass("active_text");

    });


    //PAGE2 - SHOW menu items on hover (FIXED MENU)
    $(".menu_link").mouseover(function() {
        var menu_make_small = viewportHeight/3;
        var scrollTop = $(window).scrollTop();
        var $this = $(this);
        if(scrollTop > menu_make_small){
            // $(".menu_link").removeClass('active2');
            // $this.css('width', '200%').html('<div class="on_hover_text"><p class="text_link">Some text</p></div>'); 
            // $this.addClass('active2').css('width' ,'300%');
            // $this.find('.text_hover').css('display', 'inline-block');
            // $this.find('.imges').css('display', 'none');
            // $this.find('.text_hover').css('display', 'inline-block');

            $(".text_hover").each( function( index, element) {
               $(element).css('width', '0%').css('display', 'none');
            });
            $this.find('.text_hover').css('display', 'inline').animate({width:'330%'});
            setTimeout(function() {
                $this.find('.text_hover').children('.text_link_hover').css('display', 'inline-block');
            }, 500);
        }
    });

    $(".menu_link").mouseout(function() {
        var $this = $(this);
        $(".menu_link").css('width', '100%');
        $this.find('.text_hover').css('display', 'none').css('width', '0%');
        $(".text_hover").each( function( index, element) {
               $(element).css('width', '0%').css('display', 'none');
               $(element).children('.text_link_hover').css('display', 'none');
            });
        // $this.find('.text_hover').css('display', 'none');
        // $this.find('.imges').css('display', 'inline-block');
       // $('.menu_link').children('menu_on_hover').css('display', 'none').css('transition', 'all 0.5s');
    });

    //PAGE2 - Go top func (FIXED MENU)
     $(".go_top_link").on("click", function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 600);
    });


    //On HEADER remove active class from menu
    $(".img_logo").on("click", function(e) {
        e.preventDefault();
        $(".menu_link").each( function( index, element) {
                var id_each_elem = $(element).attr("id");
                $(element).children('.imges').find('.img_link').attr("src", 'img/'+ id_each_elem +'.png');
            });
        $(".menu_link").removeClass("active");
    });

    //determine active menu button FIXED
    $(".menu_btn_fixed").on("click", function(e) {
            e.preventDefault();
            var $this = $(this);

        $(".menu_btn_fixed").each( function( index, element) {
            var elem_img = $(element).attr("id");
            // console.log(elem_img);
            // $(element).attr("src", 'img/'+elem_img+'.png');
            $(element).children('.menu_fix_link').children('.img_menu_fix').attr("src", 'img/'+elem_img+'.png');
            // $(element).children('.menu_fix_link').html('<img src="img/'+ elem_img +'.png" alt="" class="img_menu_fix"><span class="helper_fix"></span>');
        });

        var my_id = $this.attr("data-id");
        $(".menu_btn_fixed").removeClass("active");
        $this.addClass("active");
        // console.log(my_id);
         $this.children('.menu_fix_link').children('.img_menu_fix').attr("src", 'img/'+my_id+'.png');
    });


    $("nav").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);                
    });   


    var widthScr_win = $('.scroll_window').outerWidth();
    var heightScr = $('.scroll_window').outerHeight();

    //func get a fixed menu and callback btns
    $(window).scroll(function () {
        var scrollFix = viewportHeight*190/100;
        // console.log(scrollFix);
        if ($(this).scrollTop() > scrollFix) {
            $('.callack_fixed').css('position', 'fixed').css('top', '6%').css('display', 'block');
            $('.wrap_left_menu_fix').css('position', 'fixed').css('top', '0%');
            $('.go_top').css('display', 'block');
        } 
        else {
            $('.callack_fixed').css('position', 'absolute').css('top', '215%').css('display', 'none');
            $('.wrap_left_menu_fix').css('position', 'absolute').css('top', '130%');
            $('.go_top').css('display', 'none');
        }
    });

    //PAGE3 on Hover arrow move down
    $(".hover_cont").mouseover(function() {
        // console.log('mouse_over');
        // var $this = $(this).find('.services_icon');    
        var $this = $(this).find('.serv_arrow').css('bottom', '10%');    
    });

    $(".hover_cont").mouseout(function() {
        var $this = $(this).find('.serv_arrow').css('bottom', '20%');       
    });


    //PAGE4 popup pics by portfolio
    $('.item_link').on('click', function(e){
            e.preventDefault();
            $('.page4_popup_pic').fadeIn(500); 
    });

    $('#close_this_shit').on('click', function(e){
            e.preventDefault();
            $('.page4_popup_pic').fadeOut(500); 
    });

    // PAGE4 - make the gallery
    $(".item_link").on("click", function(e) {
        e.preventDefault();
        var $this = $(this);
        var id_pic = $this.attr("data-id");
        $('#pic_scanner').attr("src", 'img/gallery/portfolio_pic'+id_pic+'.jpg');
        $('#pic_scanner').attr("data-id", id_pic);


        $(".arr_left").css('display', 'block');
        $(".arr_right").css('display', 'block');  
        if(id_pic==1){
            $(".arr_left").css('display', 'none');                 
        }
        if(id_pic==34){
            $(".arr_right").css('display', 'none');                 
        }

    });
       
    // PAGE4 - make left arrow in gallery    
    $(".arr_left").on("click", function(e) {
            e.preventDefault();
        var detect_id = $('#pic_scanner').attr("data-id");            
        var move_left = detect_id-1;
        $('#pic_scanner').attr("src", 'img/gallery/portfolio_pic'+move_left+'.jpg');
        $('#pic_scanner').attr("data-id", move_left);         
        
        $(".arr_left").css('display', 'block');
        $(".arr_right").css('display', 'block');

        if(move_left==1){
            $(".arr_left").css('display', 'none');                 
        }
        if(detect_id==34){
            $(".arr_right").css('display', 'none');                 
        }
    }); 

    // PAGE4 - make right arrow in gallery
     $(".arr_right").on("click", function(e) {
            e.preventDefault();
        var detect_id = $('#pic_scanner').attr("data-id");            
        var move_right = ++detect_id;
        $('#pic_scanner').attr("src", 'img/gallery/portfolio_pic'+ move_right +'.jpg');
        $('#pic_scanner').attr("data-id", move_right);         
        
        // console.log(++detect_id);
        // console.log();

        $(".arr_left").css('display', 'block');
        $(".arr_right").css('display', 'block');
        
        if(detect_id==1){
            $(".arr_left").css('display', 'none');                 
        }
        if(detect_id==34){
            $(".arr_right").css('display', 'none');                 
        }

    });


    //PAGE6 - vertical centering text in items
    $(".item_text_page6_ptext").each( function( index, element) {
        var parent_heighter = $('.item_text_page6').outerHeight();
        var child_heighter = $(element).outerHeight();
        var center_helper = (parent_heighter - child_heighter) /2;

            $(element).css('padding-top', center_helper);
        });



 

    // PAGE8 - get size for block item_wrap
    var itemHeight =  $('.item_wrap').outerHeight();
    // console.log(itemHeight);
    $('.item_wrap').css('height', itemHeight);


   


    }




        //PAGE5 - Vertical centering text on page 5
        $(".child_text").each( function( index, element) {
            var conteiner_height = $('.right_cont').outerHeight();
            var each_height = $(element).outerHeight();
            var each_margin = (conteiner_height - each_height) / 2;
            // console.log(each_margin);
             $(element).parent('.child').css('margin-top', each_margin);
        });

        //PAGE8 - show more goods
        $('#more_goods').on("click", function(){
            $('.item_wrap').show();
            $('#more_goods').hide();

            var storeHeight =  $('#page8 .garden_store').outerHeight();
            var titleHeight = $('#page8 .title_wrapper').outerHeight(); 
            var titleTitle = $('#page8 .page_title_wrap').outerHeight(); 
            var helpMargin = sizePage8 * 10 / 100;
            var footerMargin = (storeHeight + titleHeight + titleTitle) - sizePage8 + helpMargin;
            $('#footer').css('margin-top', footerMargin);
        });

        //PAGE8 - func get info in popup store
        $('.price_details, .item_price_details').on('click', function(e){
            e.preventDefault();
                
            var $this = $(this);
            var pic_name = $this.attr("data-id");
            var pic_price = $this.attr("data-price");
            var item_name = $this.attr("data-name");
            var item_stock = $this.attr("data-stock");

            $('.popup_store').fadeIn(500); 
            $('.img_item_size').attr("src", 'img/store/'+pic_name+'.jpg');
            $('.price').html('<p class="price_text">'+ pic_price +'</p><span class="helper"></span>');
            // $('.item_in_stock').html('<p class="price_text">' + item_stock + '</p>');
            $('.in_stock').html('<div class="item_in_stock"><p class="price_text">' + item_stock + '</p><span class="helper"></span></div>');
            $('.buy_btn').html('<p class="price_text">купити</p><span class="helper"></span>');
            //set position for buy button
            // var imgPopupStore = $('.img_item_size').outerHeight()/5;
            // $('.buy_btn').css('margin-top', imgPopupStore);

            $('.wrap_infos .title_item').html(''+ item_name +'');
            // $('.item_code').html('<p class="text_info"><b>Код товару:</b> '+ item_code +'</p>');
            $('body').css('overflow-y', 'hidden');

        });  

    //Func hide popup in store page
    $('.arr_back_link, .back_link, .close_x_btn').on('click', function(e){
        e.preventDefault();
        $('.popup_store').fadeOut(500); 
        $('body').css('overflow-y', 'visible');
    });   


    ////////// END DESKTOP DEVICES //////////





    ////////// START MOBILE DEVICES //////////
    if(viewportWidth<1100){
        console.log("Page for mobile is ready!");

        var portWMob = $(window).width();
        var portHMob = $(window).height();

        // $('#second_tel_mobile').show();

        //mobile menu func
        $('.nav_button').click(function(){
            $('#burger').toggleClass('active-sandwich');
            $('.mob_menu').slideToggle(500);

        });


        //Smooth sliding to anthors in mobile menu
        $(".menu_wrapper").on("click", "a", function(event) {
            console.log('clicker');
            event.preventDefault();
            var topHeaderHeight = $('.top_header').outerHeight();
            var id = $(this).attr('href'),
                top = $(id).offset().top - topHeaderHeight;
            $('body, html').animate({scrollTop: top}, 1000);
            // $(".nav_button").trigger( "click" );
            $('.mob_menu').slideUp(500)
            $('#burger').removeClass('active-sandwich');
        });

       //PAGE3 - set text into popup
        $('.item_cont_page3').on("click", function(){
            var $this = $(this);
            var get_text = $this.find('.hover_cont_details').children('.p_details').text();
            $('.page3_cont_hid').fadeIn(300).find('.page3_item_text').html('<p class="p_details_mob">' + get_text + '</p>');
            $('body').css('overflow-y', 'hidden');
        });

        $('#page3_close_btn').on("click", function(){
            $('.page3_cont_hid').fadeOut(300);            
            $('body').css('overflow-y', 'visible');
        });


        //PAGE4 - hide/show gallery on responsive
        $('.page4_cont').hide();
        $('.mobile_gallery_wrapper').show();

        //PAGE4 hide/show store items on responsive
        $('.item_wrap').show();
        $('#more_goods').hide();

        //PAGE5 - change bg in items
        $('#page5_item3').css('background', '#99BF18');
        $('#page5_item4').css('background', '#EA9309');


        // GORIZONTAL VIEW //
        if(portWMob<portHMob){

            // HEADER SETTING
            $('#header').css('width', portWMob).css('height', portHMob/3+50);
            $('.slide').css('width', portWMob).css('height', portHMob/3);
            $('.mob_menu').css('width', portWMob).css('height', portHMob);  
            
            //SETTING SIZE for callback popup
            // $('.callback_box').css('height', '60%');  

            //GALLERY SETTING    
            $('#page4').css('width', portWMob).css('height', portHMob/3+75);
            $('.slide_mobile').css('width', portWMob).css('height', portHMob/3);

            //PAGE 5 setting Content
            $('#page5 .wrap .page5_cont .item_right').css('float', 'none').css('width', '100%');
            $('#page5 .wrap .page5_cont .item_left').css('float', 'none').css('width', '100%');

            //PAGE 8 - remove class fopr line height
            $('.item_title_helper').css('line-height', '15px');


        }


        // VERTICAL VIEW //
        if(portWMob>portHMob){

            // HEADER SETTING
            $('#header').css('width', portWMob).css('height', portHMob);
            $('.slide').css('width', portWMob).css('height', portHMob-50);
            $('.mob_menu').css('width', portWMob).css('height', portHMob);

            //SETTING SIZE for callback popup
            // $('.callback_box').css('height', '90%');

            //GALLERY SETTING    
            $('#page4').css('width', portWMob).css('height', portHMob);
            $('.slide_mobile').css('width', portWMob).css('height', portHMob-75);

            //PAGE 5 setting Content
            // $('.item_right').css('float', 'right').css('width', '50%');
            // $('.item_left').css('float', 'left').css('width', '50%');

            //PAGE 8 - remove class fopr line height
            $('.item_title_helper').css('line-height', '30px');

            //PAGE98 - popup store
            $('.img_item_size').css('width', '50%').css('float', 'left').css('margin-top', '15px');
            $('.in_stock ').css('float', 'left').css('margin-left', '5%');

        }












        window.onresize = function(event) {
            var portWMob = $(window).width();
            var portHMob = $(window).height();

            //PAGE5 - Vertical centering text on page 5
            $(".child_text").each( function( index, element) {
                var conteiner_height = $('.right_cont').outerHeight();
                var each_height = $(element).outerHeight();
                var each_margin = (conteiner_height - each_height) / 2;
                // console.log(each_margin);
                 $(element).parent('.child').css('margin-top', each_margin);
            });
       
            // GORIZONTAL VIEW //
            if(portWMob<portHMob){

                // HEADER SETTING   
                $('#header').css('width', portWMob).css('height', portHMob/3+50);
                $('.slide').css('width', portWMob).css('height', portHMob/3);
                $('.mob_menu').css('width', portWMob).css('height', portHMob);

                //SETTING SIZE for callback popup
                // $('.callback_box').css('height', '60%'); 
                
                //GALLERY SETTING    
                $('#page4').css('width', portWMob).css('height', portHMob/3+75);
                $('.slide_mobile').css('width', portWMob).css('height', portHMob/3);

                 //PAGE 5 setting Content
                $('#page5 .wrap .page5_cont .item_right').css('float', 'none').css('width', '100%');
                $('#page5 .wrap .page5_cont .item_left').css('float', 'none').css('width', '100%');
            
                //PAGE 8 - remove class fopr line height
                $('.item_title_helper').css('line-height', '15px'); 

            }        


            // VERTICAL VIEW //
            if(portWMob>portHMob){

                // HEADER SETTING
                $('#header').css('width', portWMob).css('height', portHMob);
                $('.slide').css('width', portWMob).css('height', portHMob-50);
                $('.mob_menu').css('width', portWMob).css('height', portHMob);

                //SETTING SIZE for callback popup
                // $('.callback_box').css('height', '90%');

                //GALLERY SETTING    
                $('#page4').css('width', portWMob).css('height', portHMob);
                $('.slide_mobile').css('width', portWMob).css('height', portHMob-75);  


                //PAGE 5 setting Content
                // $('#page5 .wrap .page5_cont .item_right').css('float', 'right').css('width', '50%');
                // $('#page5 .wrap .page5_cont .item_left').css('float', 'left').css('width', '50%');

                //PAGE 8 - remove class fopr line height
                $('.item_title_helper').css('line-height', '30px');    


            }

        

        };

            //HEADER - func for slider on header
            $('.bxslider').bxSlider({
                pagerCustom: '#bx-pager',
                minSlides: 1,
                slideMargin: 0,
                moveSlides: 1,
                infiniteLoop: true,
                pager: true
            });

            //PAGE4 - Gallery
            $('.bxslider_mob').bxSlider({
                minSlides: 1,
                moveSlides: 1,
                infiniteLoop: true
            });





    }
    ////////// END MOBILE DEVICES //////////








});