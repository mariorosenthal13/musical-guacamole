/**
 Custom JS

 1. OPEN AND CLOSE MENU
 2. OPEN AND CLOSE SEARCH BAR
 3. HEADER BACKGROUND AFTER PAGE LOAD
 4. HEADER BACKGROUND AFTER PAGE SCROLL
 5. HEADER FULL HEIGHT
 6. BACKGROUND IMAGE PARALLAX EFFECT
 7. WOW ANIMATION
 8. TESTIMONIALS CAROUSEL
 9. PLAYER
 10. POPUP SLIDER
 11. MUSIC DISCOGRAPHY BANNERS EQUAL WIDTH AND HEIGHT
 12. BLOG MANSORY
 13. CART NUMBER PICKER
 14. SHOP SORTING DROPDOWN SELECT
 15. SINGLE PRODUCT IMAGE ZOOM
 16. PAYMENT RADIO BUTTON
 17 .PRE LOADER

 **/

"use strict"; 
//Variable for caching
var windowElement = jQuery(window);
var body = jQuery("body");

//Variable for player
var current_track = 1;

//Variable for slider
var current_slide = 0;
var slides_length = 0;
var prev_slide = 0;
var slideWidth = $("#popup-container").width() * 0.8;
var popup_images_arr = [];

// Get track duration by source
function getDuration(src) {
    return new Promise(function(resolve) {
        var audio = new Audio();
        $(audio).on("loadedmetadata", function(){
            resolve(audio.duration);
        });
        audio.src = src;
    });
}

// Function For Gallery Popup Slider
function changeSlide() {

    $("a.popup-image img").eq(0).attr('src', popup_images_arr[current_slide]);
    $("a.popup-image img").eq(2).attr('src', popup_images_arr[current_slide]);

    if (current_slide == 0 && prev_slide == slides_length-1) {
        $("#slides-container").stop(true,false).animate({'left':'-' + slideWidth*2 + 'px'},500, function() {
            $("a.popup-image img").eq(1).attr('src', popup_images_arr[current_slide]);
            $("#slides-container").css({'left' : '-' + slideWidth + 'px'})
        });
    } else if (prev_slide == 0 && current_slide == slides_length-1) {
        $("#slides-container").stop(true,false).animate({'left':'0px'},500, function() {
            $("a.popup-image img").eq(1).attr('src', popup_images_arr[current_slide]);
            $("#slides-container").css({'left' : '-' + slideWidth + 'px'})
        });
    } else if (prev_slide < current_slide){
        $("#slides-container").stop(true,false).animate({'left':'-' + slideWidth*2 + 'px'},500, function() {
            $("a.popup-image img").eq(1).attr('src', popup_images_arr[current_slide]);
            $("#slides-container").css({'left' : '-' + slideWidth + 'px'})
        });
    } else {
        $("#slides-container").stop(true,false).animate({'left':'0px'},500, function() {
            $("a.popup-image img").eq(1).attr('src', popup_images_arr[current_slide]);
            $("#slides-container").css({'left' : '-' + slideWidth + 'px'})
        });
    }

    $("#popup-container li").filter(function (index) {
        return index != current_slide
    }).removeClass("active");

    $("#popup-container li").filter(function (index) {
        return index == current_slide
    }).addClass("active");

}

// Key Event Change Slider
$(document).keydown(function(e) {
    if($('#popup-container').css('display')== "block") {
        switch (e.which) {
            case 37:
                $('.popup_left').trigger('click');
                break;
            case 39:
                $('.popup_right').trigger('click');
                break;
            case 27:
                $('#popup-container').trigger('click');
                break;

            default:
                return; // exit this handler for other keys
        }
    }
        // Key Event Menu
    else if($('div.nav-menu').hasClass('active')){
            switch(e.which) {
                case 27:
                    $('.menu_icon').trigger('click');
                    break;

                default: return; // exit this handler for other keys
            }
        }
        // Key Event Search
        else if($('div.search-bar').hasClass('active')){
            switch(e.which) {
                case 27:
                    $('.search_icon').trigger('click');
                    break;

                default: return; // exit this handler for other keys
            }
        e.preventDefault(); // prevent the default action (scroll / move caret)
        }
});

//Function for Music Discography banners equal width and height
function setTeamMemberHeight() {
    $('.music-banner').height($('.music-banner').width());
    $('.music-banner-1').height($('.music-banner-1').width());
    $('.music-banner-2').height($('.music-banner-2').width());
    $('.music-banner-3').height($('.music-banner-3').width());
}
//Function for Music Discography banners equal width and height after window resize
windowElement.resize(function () {
    setTeamMemberHeight();
});


jQuery(function ($) {
    "use strict";
    /* ----------------------------------------------------------- */
    /*  1. OPEN AND CLOSE MENU
    /* ----------------------------------------------------------- */
    $('.menu_icon').on('click', function () {
        $(this).toggleClass('active');
        $('.search_icon').removeClass('active');
        $('#header .nav-menu').toggleClass('active');
        $('#header .search-bar').removeClass('active');
    });


    /* ----------------------------------------------------------- */
    /*  2. OPEN AND CLOSE SEARCH BAR
    /* ----------------------------------------------------------- */
    $('.search_icon').on('click', function () {
        $(this).toggleClass('active');
        $('.menu_icon').removeClass('active');
        $('#header .search-bar').toggleClass('active');
        $('#header .nav-menu').removeClass('active');
    });


    /* ----------------------------------------------------------- */
    /*  3. HEADER BACKGROUND AFTER PAGE LOAD
    /* ----------------------------------------------------------- */
    if ( windowElement.scrollTop() > 20) {
        $('.header-continer').addClass('active');
    } else {
        $('.header-continer').removeClass('active');
    }


    /* ----------------------------------------------------------- */
    /*  4. HEADER BACKGROUND AFTER PAGE SCROLL
    /* ----------------------------------------------------------- */
    windowElement.on('scroll',function () {
        if ($(this).scrollTop() > 20) {
            $('.header-continer').addClass('active');
        } else {
            $('.header-continer').removeClass('active');
        }
    });


    /* ----------------------------------------------------------- */
    /*  5. HEADER FULL HEIGHT
    /* ----------------------------------------------------------- */
    $.fn.fullHeight = function(){
        var self = this;
        var windowHeight = window.innerHeight;
        var fullHeightFunction = function(){
            return self.css({
                'height': windowHeight
            });
        }
        windowElement.on('resize', function(){
            windowHeight = window.innerHeight;
            fullHeightFunction();
        });
        fullHeightFunction();
        return self;
    }
    $('.home #header').fullHeight();


    /* ----------------------------------------------------------- */
    /*  6. BACKGROUND IMAGE PARALLAX EFFECT
    /* ----------------------------------------------------------- */
    windowElement.on('scroll', function () {

        /* Header Section Background Image */
        var st1 = $(this).scrollTop();
        $("#header .bg_image").css({
            "background-position-y": (st1/3)
        });

        /* Tours Section Background Image */
        var st2 = $(this).scrollTop();
        $("#on-tour .section_bg_image").css({
            "background-position-y": (-st2/20 + 100)
        });

    });


    /* ----------------------------------------------------------- */
    /*  7. WOW ANIMATION
    /* ----------------------------------------------------------- */
    var wow = new WOW(
        {
            animateClass: 'animated',
            offset: 100
        }
    );
    wow.init();


    /* ----------------------------------------------------------- */
    /*  8. TESTIMONIALS CAROUSEL
    /* ----------------------------------------------------------- */

    $('.cd-testimonials-wrapper').flexslider({
        selector: ".cd-testimonials > li",
        animation: "slide",
        controlNav: true,
        animationSpeed: 400,
        smoothHeight: true,
        start: function() {
            $('.cd-testimonials').children('li').css({
                'opacity': 1,
                'position': 'relative'
            });
        }
    });

    /* ----------------------------------------------------------- */
    /*  9. PLAYER
    /* ----------------------------------------------------------- */

    plyr.setup({
        controls: [
            'play',
            'progress',
            'current-time',
            'duration',
            'mute',
            'volume'
        ]
    });

    // Home New Album
    $(body).on('click', '#album-release button[data-plyr="play"]', function () {
        $('#album-release .plyr--playing button[data-plyr="pause"]').trigger('click')
    });

    $('.pause-mp3').hide();
    $('.play-mp3').on('click',function () {
        $('.play-mp3').show();
        $('.pause-mp3').hide();
        $(this).closest('.play-pause').find('svg').toggle();
        if ($(this).closest('.music_line').index() != current_track) {
            $("#mp3_1").html("");
            $("#mp3_1").html('<audio controls class="audio1"><source src="' + $(this).closest('.play-pause').data('src') + '" type="audio/mpeg"></audio>');
            plyr.setup({
                controls: [
                    'play',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume'
                ]
            });
        }

        current_track = $(this).closest('.music_line').index();

        $("#mp3_1").find("button").eq(0).trigger("click");

    });

    $('.pause-mp3').on('click',function () {
        $('.pause-mp3').hide();
        $('.play-mp3').show();
        $("#mp3_1").find("button").eq(1).trigger("click");
    });

    $("body").on("click", "#mp3_1 .plyr__controls button", function () {
        if ($(this).data("plyr") == "play") {
            $("#playlist").find(".music_line").eq(current_track-1).find(".play-pause .play-mp3").hide();
            $("#playlist").find(".music_line").eq(current_track-1).find(".play-pause .pause-mp3").show();
        } else {
            $('.pause-mp3').hide();
            $('.play-mp3').show();
        }
    });

    $(document).on('ready',function () {
        var tracks_arr = [];
        $(".play-pause").each(function () {
            var that = $(this);
            getDuration($(this).data("src"))
                .then(function(length) {
                    let duration = parseInt(length);
                    let minutes = Math.floor(duration/60);
                    let seconds = duration - minutes*60;
                    if (seconds < 10) {
                        seconds = "0" + seconds;
                    }
                    that.closest(".music_line").find(".plyr__time--duration").html(minutes + ":" + seconds);
                });
        });
    });


    /* ----------------------------------------------------------- */
    /*  10. POPUP SLIDER
    /* ----------------------------------------------------------- */

    $(".anim_border").on("click", function (event) {
        popup_images_arr = [];
        slides_length = $(".img_link").length;

        $("#slides-container").html("");
        $("#popup-container ul").html("");
        $.each($(".img_link"), function (index, value) {
            popup_images_arr.push($(".img_link img")[index].src);
        });

        for (var i = 0; i < popup_images_arr.length; i++) {
            if (event.currentTarget == $(".anim_border")[i]) {
                current_slide = i;
            }
        }
        $("#slides-container").append("<a href=\"javascript:void(0)\" class=\"popup-image\"><img src="+ popup_images_arr[current_slide] +"></a>");
        $("#slides-container").append("<a href=\"javascript:void(0)\" class=\"popup-image\"><img src="+ popup_images_arr[current_slide] +"></a>");
        $("#slides-container").append("<a href=\"javascript:void(0)\" class=\"popup-image\"><img src="+ popup_images_arr[current_slide] +"></a>");

        $("#slides-container").css('width', 3*slideWidth +'px');
        $("a.popup-image img").css('width', slideWidth +'px');
        $("#slides-container").css({'left':'-'+ slideWidth +'px'});

        // Slider Width in Window Resize time
        windowElement.resize(function () {
            slideWidth = $("#popup-container").width() * 0.8;
            $("#slides-container").css('width', 3*slideWidth +'px');
            $("a.popup-image img").css('width', slideWidth +'px');
            $("#slides-container").css({'left':'-'+ slideWidth +'px'});
            if (windowElement.width() <= 767) {
                slideWidth = $("#popup-container").width() * 0.9;
                $("#slides-container").css('width', 3*slideWidth +'px');
                $("a.popup-image img").css('width', slideWidth +'px');
                $("#slides-container").css({'left':'-'+ slideWidth +'px'});
            }
        });

        // Slider Width during <=767
        if (windowElement.width() <= 767) {
            slideWidth = $("#popup-container").width() * 0.9;
            $("#slides-container").css('width', 3*slideWidth +'px');
            $("a.popup-image img").css('width', slideWidth +'px');
            $("#slides-container").css({'left':'-'+ slideWidth +'px'});
        }


        for (var i = 0; i < popup_images_arr.length; i++) {
            if (event.currentTarget != $(".anim_border")[i]) {
                $("#popup-container ul").append("<li></li>");
            } else {
                $("#popup-container ul").append("<li class='active'></li>");
            }
        }

        $("#popup-container").css("display", "block").animate({
            opacity: 1
        }, 300);
    });

    body.on("click", ".popup_left",  function () {
        prev_slide = current_slide;
        if (current_slide) {
            current_slide--;
        } else {
            current_slide = slides_length - 1;
        }
        changeSlide();
    });
    body.on("click", ".popup_right",  function () {
        prev_slide = current_slide;
        if (current_slide < slides_length - 1) {
            current_slide++;
        } else {
            current_slide = 0;
        }
        changeSlide();
    });

    body.on("click", "#popup-container li", function () {
        prev_slide = current_slide;
        current_slide = $("#popup-container li").index($(this));
        changeSlide();
    });

    $("#popup-container").on("click", function (e) {
        if ($(e.target).is($("#popup-container")))
            $("#popup-container").animate({
                opacity: 0
            }, 300, function () {
                $(this).css("display", "none");
            })

    });


    /* ----------------------------------------------------------- */
    /*  11. MUSIC DISCOGRAPHY BANNERS EQUAL WIDTH AND HEIGHT
    /* ----------------------------------------------------------- */
    setTeamMemberHeight();


    /* ----------------------------------------------------------- */
    /*  12.BLOG MANSORY
    /* ----------------------------------------------------------- */

    window.msnry = new Masonry( '.grid', {
        columnWidth: '.grid-sizer',
        percentPosition: true
    });


    // This for demonstration need send ajax call to get new post
    $('.more').on("click", function(){

        var html = '<div class="grid-item grid-item--width1" >' +
            '<a href="11-Blog-Single-Post.html ">\n' +
            '                <div class="grid-item-img">\n' +
            '                    <img src="resources/images/13_blog_mansory.png" alt="Andre Benz"/>\n' +
            '                </div>\n' +
            '                <div class="grid-item-content">\n' +
            '                    <div class="g_t">\n' +
            '                        <h3>NEW DJ</h3>\n' +
            '                        <p>\n' +
            '                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n' +
            '                        </p>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </a>' +
            '</div>'
            + '<div class="grid-item grid-item--width2">' +
            '<a href="11-Blog-Single-Post.html ">\n' +
            '                <div class="grid-item-img">\n' +
            '                    <img src="resources/images/hatim-belyamani.png" alt="Karim Boubker"/>\n' +
            '                </div>\n' +
            '                <div class="grid-item-content">\n' +
            '                    <div class="g_t">\n' +
            '                        <h3>OUR TOUR</h3>\n' +
            '                        <p>\n' +
            '                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n' +
            '                        </p>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </a>' +
            '</div>'
            + '<div class="grid-item grid-item--width3">' +
            '<a href="11-Blog-Single-Post.html ">\n' +
            '                <div class="grid-item-content">\n' +
            '                    <div class="g_t">\n' +
            '                        <h3>DRUM FESTIVAL</h3>\n' +
            '                        <p>\n' +
            '                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n' +
            '                        </p>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '                <div class="grid-item-img">\n' +
            '                    <img src="resources/images/samuel-fyfe.png" alt="Samuel Fyfe">\n' +
            '                </div>\n' +
            '            </a>' +
            '</div>'
            +'<div class="grid-item grid-item--width4">' +
            '<a href="11-Blog-Single-Post.html ">\n' +
            '                <div class="grid-item-img">\n' +
            '                    <img src="resources/images/mink-mingle.png" alt="">\n' +
            '                </div>\n' +
            '                <div class="grid-item-content">\n' +
            '                    <div class="g_t">\n' +
            '                        <h3>DARK SIDE</h3>\n' +
            '                        <p>\n' +
            '                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.\n' +
            '                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n' +
            '                            when an unknown printer took a galley of type and scrambled it to make a type specimen\n' +
            '                        </p>\n' +
            '                    </div>\n' +
            '                </div>\n' +
            '            </a>' +
            '</div>';
        $("div.grid").append(html);

        window.msnry = new Masonry( '.grid', {
            columnWidth: '.grid-sizer',
            percentPosition: true
        });

    });

    /* ----------------------------------------------------------- */
    /*  13.CART NUMBER PICKER
    /* ----------------------------------------------------------- */

    $.fn.numberPicker = function() {
        var dis = 'disabled';
        return this.each(function() {
            var picker = $(this),
                p = picker.find('button:last-child'),
                m = picker.find('button:first-child'),
                input = picker.find('input'),
                min = parseInt(input.attr('min'), 10),
                max = parseInt(input.attr('max'), 10),
                inputFunc = function(picker) {
                    var i = parseInt(input.val(), 10);
                    if ( (i <= min) || (!i) ) {
                        input.val(min);
                        p.prop(dis, false);
                        m.prop(dis, true);
                    } else if (i >= max) {
                        input.val(max);
                        p.prop(dis, true);
                        m.prop(dis, false);
                    } else {
                        p.prop(dis, false);
                        m.prop(dis, false);
                    }
                },
                changeFunc = function(picker, qty) {
                    var q = parseInt(qty, 10),
                        i = parseInt(input.val(), 10);
                    if ((i < max && (q > 0)) || (i > min && !(q > 0))) {
                        input.val(i + q);
                        inputFunc(picker);
                    }
                };
            m.on('click', function(){changeFunc(picker,-1);});
            p.on('click', function(){changeFunc(picker,1);});
            input.on('change', function(){inputFunc(picker);});
            inputFunc(picker); //init
        });
    };
    $('.plusminus').numberPicker();

    /** Delete Cart **/
    $('.delete-product').on('click', function (e) {
        e.preventDefault();
        $(this).parents('.cart-item').remove();
    });

    /** 404 Page fiull height **/
    $('.page-404 #header-404').fullHeight();


    /* ----------------------------------------------------------- */
    /*  14.SHOP SORTING DROPDOWN SELECT
    /* ----------------------------------------------------------- */
    $(".dropdown-menu li a").on('click', function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText+' <span class="caret"></span>');
    });

    /* ----------------------------------------------------------- */
    /*  15.SINGLE PRODUCT IMAGE ZOOM
    /* ----------------------------------------------------------- */
    var $zoom = $('.zoom').magnify();


    /* ----------------------------------------------------------- */
    /*  16.PAYMENT RADIO BUTTON
    /* ----------------------------------------------------------- */

    $('.pay-text').css('display','none');
    if ($(".paypal input").is(':checked')) {
        $(".paypal input").closest('.custom-control').find('.pay-text').css('display','block');
        $(".paypal input").closest('.custom-control').siblings().find('.pay-text').css('display','none');
    } else {
        $(".ubs input").closest('.custom-control').find('.pay-text').css('display','block');
        $(".ubs input").closest('.custom-control').siblings().find('.pay-text').css('display','none');
    }
    $(".paypal input, .ubs input").on("change", function () {
            $(this).closest('.custom-control').find('.pay-text').css('display','block');
            $(this).closest('.custom-control').siblings().find('.pay-text').css('display','none');
    });

    // Add To Cart
    var nav = $('.shop-view-cart'),
        animateTime = 300,
        navLink = $('.catd-button');
    nav.css({'height':'0'});
    navLink.on('click',function(){
        nav.css({overflow:'visible'});
        if(nav.height() === 0){
            autoHeightAnimate(nav, animateTime);
        }
    });

/* Function to animate height: auto */
    function autoHeightAnimate(element, time) {
    var curHeight = element.height(), // Get Default Height
        autoHeight = element.css('height', 'auto').height() + 30; // Get Auto Height
    element.height(curHeight); // Reset to Default Height
    element.stop().animate({height: autoHeight}, time); // Animate to Auto Height
}

    // Auto complete Search focus
    body.on("click", ".chosen-single", function () {
        $('.chosen-search input').focus();
        $('.chosen-search input').trigger('click');
    });

});

/* ----------------------------------------------------------- */
/*  17.PRE LOADER
/* ----------------------------------------------------------- */
windowElement.on('load', function(){
    $('#preloader').fadeOut('slow',function(){
        $(this).remove();
    });
});
