// Banner swiper
jQuery('.navigation-carousel-pc li a').click(function(e) {
    e.preventDefault();
    jQuery('.navigation-carousel-pc li').removeClass('active');
    jQuery(this).parent('li').addClass('active');
});
// Search, Fav Click 
var nvnopen = false;
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
    }
    else {
        jQuery('.main-contain-box').css('transform', 'translate3d(0px, 0px, 0px)');
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
});
var bannerswiper = new Swiper('.swiper-banner', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    nextButton: '.navigation-carousel .swiper-button-next',
    prevButton: '.navigation-carousel .swiper-button-prev',
});
// Spot swiper
var swiper = new Swiper('#spot-index .list-spot', {
    slidesPerView: 4,
    slidesPerColumn: 2,
    nextButton: '#spot-index .swiper-button-next',
    prevButton: '#spot-index .swiper-button-prev',
    spaceBetween: 20,
    breakpoints: {
        1024: {
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
            width: 300,
            slidesPerColumn: 1,
            slidesPerView: 1,
            spaceBetween: 10
        },
        320: {
            width: 200,
            slidesPerColumn: 1,
            slidesPerView: 1,
            spaceBetween: 10
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