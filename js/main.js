;(function(){
    "use strict";

    //     var element1 = document.getElementById('feedBlock'),
    //         hideFeedButton = document.getElementById('hideFeed');
    //     hideFeedButton.addEventListener("click", openFeedFunc);
    //     function openFeedFunc() {
    //         if (element1.classList.contains('ba-service-block__view-no')){
    //             element1.classList.remove('ba-service-block__view-no');
    //         } else {
    //             element1.classList.add('ba-service-block__view-no');
    //         }
    //     }
    //
    //     var element2 = document.getElementById('settingsBlock'),
    //         hideSettingsButton = document.getElementById('hideSettings');
    //     hideSettingsButton.addEventListener("click", openSettingsFunc);
    //
    //     function openSettingsFunc() {
    //         if (element2.classList.contains('ba-service-block__view-no')){
    //             element2.classList.remove('ba-service-block__view-no');
    //         } else {
    //             element2.classList.add('ba-service-block__view-no');
    //         }
    //     }
    //
    // var element3 = document.getElementById('teamBlock'),
    //     hideTeamButton = document.getElementById('hideTeam');
    // hideTeamButton.addEventListener("click", openTeamFunc);
    //
    // function openTeamFunc() {
    //     if (element3.classList.contains('ba-service-block__view-no')){
    //         element3.classList.remove('ba-service-block__view-no');
    //     } else {
    //         element3.classList.add('ba-service-block__view-no');
    //     }
    // }
    //
    // var element4 = document.getElementById('inboxBlock'),
    //     hideInboxButton = document.getElementById('hideInbox');
    // hideInboxButton.addEventListener("click", openTeanFunc);
    //
    // function openTeanFunc() {
    //     if (element4.classList.contains('ba-service-block__view-no')){
    //         element4.classList.remove('ba-service-block__view-no');
    //     } else {
    //         element4.classList.add('ba-service-block__view-no');
    //     }
    // }
    //
    // var element5 = document.getElementById('statisticsBlock'),
    //     hideStatButton = document.getElementById('hideStatistics');
    // hideStatButton.addEventListener("click", openStatFunc);
    //
    // function openStatFunc() {
    //     if (element5.classList.contains('ba-service-block__view-no')){
    //         element5.classList.remove('ba-service-block__view-no');
    //     } else {
    //         element5.classList.add('ba-service-block__view-no');
    //     }
    // }

    const doc = document;
    const itemsClick = doc.querySelectorAll('.ba-service-block');


    for ( let i = 0; i < itemsClick.length; i++) {
        itemsClick[i].onclick = function () {
            this.classList.toggle('ba-service-block--view-no');
        }
    }

    var menuToggle = doc.querySelector('.ba-menu-toggle'),
        body = doc.body;

    menuToggle.onclick = function(event) {
        event.preventDefault();
        body.classList.toggle('ba-menu-opened');
    }
    console.log(menuToggle);
    console.log(body);

})();

// ;(function($){
//
//     $(function() {
//         var body = $('body'),
//             menuToggle = $('.ba-menu-toggle');
//
//         menuToggle.click(function(event){
//            event.preventDefault();
//            body.toggleClass('ba-menu-opened');
//         });
//     });
//
// })(jQuery);

//Slick Slider Team
;(function($){
    $(function(){
        $('.ba-customers-reviews__main').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            vertical: true,
            verticalSwiping: true,
            prevArrow: $('.ba-slider__arrow--prev'),
            nextArrow: $('.ba-slider__arrow--next')
        });

        $('.ba-team__gallery').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.ba-team__description',
            centerMode: true,
            centerPadding: '30px',
            arrows: false
        });
        $('.ba-team__description').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            swipe: false,
            asNavFor: '.ba-team__gallery'
        });
    });

})(jQuery);

