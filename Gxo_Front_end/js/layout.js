
// Banner swiper
jQuery('.navigation-carousel-pc li a').click(function(e) {
    e.preventDefault();
    jQuery('.navigation-carousel-pc li').removeClass('active');
    jQuery(this).parent('li').addClass('active');
});
// Search, Fav Click 
var nvnopen = false;
jQuery('.show-notifi').click(function(){
    jQuery('.contain-box-notifi').fadeIn();
});
jQuery('.ok-notifi').click(function(){
    jQuery('.contain-box-notifi').fadeOut();
});
jQuery('.wrap-icon .search-icon').click(function() {
    jQuery('.contain-box-search').fadeIn();
});
jQuery('.contain-box-search .btn-close').click(function() {
    jQuery('.contain-box-search').fadeOut();
});
jQuery('.wrap-icon .favi-icon').click(function() {
    jQuery('.contain-box-fav').fadeIn();
});
jQuery('.contain-box-fav .btn-close').click(function() {
    jQuery('.contain-box-fav').fadeOut();
});
// Menu
jQuery('.icon-menu a').click(function() {
    nvnopen = !nvnopen;
    if (nvnopen) {
        jQuery('.main-contain-box').css('transform', 'translate3d(240px, 0px, 0px)');
        jQuery('.menu-scroll-div').css('transform', 'translate3d(240px, 0px, 0px)');
    }
    else {
        jQuery('.main-contain-box').css('transform', 'translate3d(0px, 0px, 0px)');
        jQuery('.menu-scroll-div').css('transform', 'translate3d(0px, 0px, 0px)');
    }
});
// Banner swiper
jQuery('.navigation-carousel-pc li a').click(function(e) {
    e.preventDefault();
    var index_menu = jQuery(this).parent('li').index();
    bannerswiper.slideTo(index_menu, 300, false);
    navbannerswiper.slideTo(index_menu, 300, false);
});

var navbannerswiper = new Swiper('.navigation-carousel', {
    slidesPerView: 1,
    slidesPerColumn: 1,
    spaceBetween: 0,
    nextButton: '.navigation-carousel .swiper-button-next',
    prevButton: '.navigation-carousel .swiper-button-prev',
    onSlideChangeEnd: function(swiper) {
        bannerswiper.slideTo(swiper.activeIndex, 300, false);
        jQuery('.navigation-carousel-pc li').removeClass('active');
        nthchild = swiper.activeIndex + 1;
        jQuery('.navigation-carousel-pc li:nth-child(' + nthchild + ')').addClass('active');
    }
});
var bannerswiper = new Swiper('.swiper-banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.navigation-carousel .swiper-button-next',
    prevButton: '.navigation-carousel .swiper-button-prev',
    onSlideChangeEnd: function(swiper) {
        navbannerswiper.slideTo(swiper.activeIndex, 300, false);
        jQuery('.navigation-carousel-pc li').removeClass('active');
        nthchild = swiper.activeIndex + 1;
        jQuery('.navigation-carousel-pc li:nth-child(' + nthchild + ')').addClass('active');
    }
});
// Spot swiper
var swiper = new Swiper('#spot-index .list-spot', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    nextButton: '#spot-index .swiper-button-next',
    prevButton: '#spot-index .swiper-button-prev',
    spaceBetween: 20,
    preventClicks: false,
    preventClicksPropagation: false,
    breakpoints: {
        980: {
            slidesPerColumn: 2,
            slidesPerView: 4,
            spaceBetween: 20
        },
        768: {
            slidesPerColumn: 1,
            slidesPerView: 2,
            spaceBetween: 20
        },
        640: {
            slidesPerColumn: 1,
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: true,
            autoplay: 3000,
            initialSlide: 1
        },
        320: {
            slidesPerColumn: 1,
            slidesPerView: 1,
            spaceBetween: 10,
            width: 200,
            autoplay: 3000,
            initialSlide: 0
        }
    }
});
// Group carousel
$('#group-index .list-bottom-row-group').owlCarousel({
    margin: 20,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        480: {
            items: 3
        },
        768: {
            items: 7
        },
        980: {
            items: 7
        }
    }
});

// Category carousel
$('#category-index .list-bottom-row-cate').owlCarousel({
    margin: 20,
    dots: false,
    nav: false,
    responsive: {
        0: {
            items: 3
        },
        480: {
            items: 3
        },
        768: {
            items: 3
        },
        980: {
            items: 3
        }
    }
});
$(function() {
    $("#spot .body-section .wrap-item-spot").slice(0, 4).show(); // select the first ten
    $("#spot .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#spot .body-section .wrap-item-spot:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#spot .body-section .wrap-item-spot:hidden").length === 0) { // check if any hidden divs still exist
            $("#spot .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
$(function() {
    $("#ranking .body-section .wrap-item-ranking").slice(0, 5).show(); // select the first ten
    $("#ranking .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#ranking .body-section .wrap-item-ranking:hidden").slice(0, 5).show(); // select next 10 hidden divs and show them
        if ($("#ranking .body-section .wrap-item-ranking:hidden").length === 0) { // check if any hidden divs still exist
            $("#ranking .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
$(function() {
    $("#recommend .body-section .wrap-item-recommend").slice(0, 5).show(); // select the first ten
    $("#recommend .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#recommend .body-section .wrap-item-recommend:hidden").slice(0, 5).show(); // select next 10 hidden divs and show them
        if ($("#recommend .body-section .wrap-item-recommend:hidden").length === 0) { // check if any hidden divs still exist
            $("#recommend .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
//GROUP
// Group carousel
jQuery('#group .list-bottom-row-group').owlCarousel({
    margin: 20,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        480: {
            items: 3
        },
        768: {
            items: 7
        },
        980: {
            items: 7
        }
    }
});
$(function() {
    size_li = $("#group .row-group").size();
    $("#group .row-group").slice(0, size_li).hide();
    $("#group .row-group").slice(0, 2).show(); // select the first ten
    $("#group .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#group .row-group:hidden").slice(0, 2).show(); // select next 10 hidden divs and show them
        if ($("#group .row-group:hidden").length === 0) { // check if any hidden divs still exist
            $("#group .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
// Group detail 1 carousel
jQuery('#groupdetail_01 .list-bottom-row-group').owlCarousel({
    margin: 20,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        480: {
            items: 3
        },
        768: {
            items: 7
        },
        980: {
            items: 7
        }
    }
});
$(function() {
    size_li = $("#groupdetail_01 .row-group").size();
    $("#groupdetail_01 .row-group").slice(0, size_li).hide();
    $("#groupdetail_01 .row-group").slice(0, 2).show(); // select the first ten
    $("#groupdetail_01 .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#groupdetail_01 .row-group:hidden").slice(0, 2).show(); // select next 10 hidden divs and show them
        if ($("#groupdetail_01 .row-group:hidden").length === 0) { // check if any hidden divs still exist
            $("#groupdetail_01 .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
    
    
    $("#groupdetail_01 .body-section .wrap-item-group").slice(0, 4).show(); // select the first ten
    $("#groupdetail_01 .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#groupdetail_01 .body-section .wrap-item-group:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#groupdetail_01 .body-section .wrap-item-group:hidden").length === 0) { // check if any hidden divs still exist
            $("#groupdetail_01 .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
jQuery('.action-page').click(function() {
    if (jQuery(this).hasClass('active')) {
        jQuery(this).removeClass('active');
    }
    else {
        jQuery(this).addClass('active');
    }
});
jQuery('#groupdetail_01 .wrap-status li:first-child a').click(function() {
    if (jQuery(this).parent().hasClass('disabled')) {
        jQuery('.wrap-status a').parent().addClass('disabled');
        jQuery(this).parent().removeClass('disabled');
        jQuery('.body-section').addClass('hide');
        jQuery('.rowstyle').removeClass('hide');
    }
});
jQuery('#groupdetail_01 .wrap-status li:last-child a').click(function() {
    if (jQuery(this).parent().hasClass('disabled')) {
        jQuery('.wrap-status a').parent().addClass('disabled');
        jQuery(this).parent().removeClass('disabled');
        jQuery('.body-section').removeClass('hide');
        jQuery('.rowstyle').addClass('hide');
    }
});
//GROUP DETAIL 03
$(function() {
    $("#groupdetail_03 .body-section .wrap-item-group").slice(0, 4).show(); // select the first ten
    $("#groupdetail_03 .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#groupdetail_03 .body-section .wrap-item-group:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#groupdetail_03 .body-section .wrap-item-group:hidden").length === 0) { // check if any hidden divs still exist
            $("#groupdetail_03 .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
// Category carousel
jQuery('#category .list-bottom-row-cate').owlCarousel({
    margin: 20,
    dots: false,
    nav: false,
    items: 3
});
$(function() {
    size_li = $("#category .row-cate").size();
    $("#category .row-cate").slice(0, size_li).hide();
    $("#category .row-cate").slice(0, 2).show(); // select the first ten
    $("#category .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#category .row-cate:hidden").slice(0, 2).show(); // select next 10 hidden divs and show them
        if ($("#category .row-cate:hidden").length === 0) { // check if any hidden divs still exist
            $("#category .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
//CATEGORY DETAIL
$(function() {
    $("#categorydetail .body-section .wrap-item-categorydetail").slice(0, 4).show(); // select the first ten
    $("#categorydetail .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#categorydetail .body-section .wrap-item-categorydetail:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#categorydetail .body-section .wrap-item-categorydetail:hidden").length === 0) { // check if any hidden divs still exist
            $("#categorydetail .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
//HASHTAG
$(function() {
    $("#hashtag .body-section .wrap-item-hashtag").slice(0, 4).show(); // select the first ten
    $("#hashtag .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#hashtag .body-section .wrap-item-hashtag:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#hashtag .body-section .wrap-item-hashtag:hidden").length === 0) { // check if any hidden divs still exist
            $("#hashtag .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
//HASHTAG DETAIL
$(function() {
    $("#hashtagdetail .body-section .wrap-item-hashtag").slice(0, 4).show(); // select the first ten
    $("#hashtagdetail .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#hashtagdetail .body-section .wrap-item-hashtag:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#hashtagdetail .body-section .wrap-item-hashtag:hidden").length === 0) { // check if any hidden divs still exist
            $("#hashtagdetail .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
//MYPAGE
$(function() {
    $("#mypage .body-section .wrap-item-mypage").slice(0, 4).show(); // select the first ten
    $("#mypage .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#mypage .body-section .wrap-item-mypage:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#mypage .body-section .wrap-item-mypage:hidden").length === 0) { // check if any hidden divs still exist
            $("#mypage .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
//USERPAGE
$(function() {
    $("#userpage .body-section .wrap-item-userpage").slice(0, 4).show(); // select the first ten
    $("#userpage .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#userpage .body-section .wrap-item-userpage:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#userpage .body-section .wrap-item-userpage:hidden").length === 0) { // check if any hidden divs still exist
            $("#userpage .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});
//USER PAGE _03
$(function() {
    $("#userpage_03 .body-section .wrap-item-userpage_03").slice(0, 4).show(); // select the first ten
    $("#userpage_03 .show-more").click(function(e) { // click event for load more
        e.preventDefault();
        $("#userpage_03 .body-section .wrap-item-userpage_03:hidden").slice(0, 4).show(); // select next 10 hidden divs and show them
        if ($("#userpage_03 .body-section .wrap-item-userpage_03:hidden").length === 0) { // check if any hidden divs still exist
            $("#userpage_03 .show-more").html('<span style="color:#f1f1f1">もっと見る</span>'); // alert if there are none left
        }
    });
});

// SCROLL DIV
jQuery('.menu-scroll-div a.gotop').click(function(e) {
    // prevent default action
    e.preventDefault();
    jQuery('.menu-scroll-div a.gotop').addClass('active');
    jQuery(this).removeClass('active');
    if (jQuery('.menu-scroll-div').hasClass('menu-hide')) {
        jQuery('.menu-scroll-div').removeClass('menu-hide');
    }
    else {
        jQuery('.menu-scroll-div').addClass('menu-hide');
    }
});

jQuery('.menu-scroll-div ul li a').click(function(e) {
    // prevent default action
    e.preventDefault();
    scrollToElement(jQuery(this).attr('href'), 500);
});

jQuery('a.jumptop').click(function(e) {
    // prevent default action
    e.preventDefault();
    scrollToElement(jQuery(this).attr('href'), 500);
});
$(document).scroll(function() {
    var scrollPosition = $(document).scrollTop();
    var scrollReference = $("#banner").height();
    if (scrollPosition >= scrollReference) {
        $('a.jumptop').fadeIn();
    } else {
        $('a.jumptop').fadeOut();
    }
});

var scrollToElement = function(el, ms) {
    var speed = (ms) ? ms : 300;
    jQuery('html,body').animate({
        scrollTop: jQuery(el).offset().top
    }, speed);
}