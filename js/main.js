;(function(){
    "use strict";

        var element1 = document.getElementById('feedBlock'),
            hideFeedButton = document.getElementById('hideFeed');
        hideFeedButton.addEventListener("click", openFeedFunc);
        function openFeedFunc() {
            if (element1.classList.contains('ba-service-block__view-no')){
                element1.classList.remove('ba-service-block__view-no');
            } else {
                element1.classList.add('ba-service-block__view-no');
            }
        }

        var element2 = document.getElementById('settingsBlock'),
            hideSettingsButton = document.getElementById('hideSettings');
        hideSettingsButton.addEventListener("click", openSettingsFunc);

        function openSettingsFunc() {
            if (element2.classList.contains('ba-service-block__view-no')){
                element2.classList.remove('ba-service-block__view-no');
            } else {
                element2.classList.add('ba-service-block__view-no');
            }
        }

    var element3 = document.getElementById('teamBlock'),
        hideTeamButton = document.getElementById('hideTeam');
    hideTeamButton.addEventListener("click", openTeamFunc);

    function openTeamFunc() {
        if (element3.classList.contains('ba-service-block__view-no')){
            element3.classList.remove('ba-service-block__view-no');
        } else {
            element3.classList.add('ba-service-block__view-no');
        }
    }

    var element4 = document.getElementById('inboxBlock'),
        hideInboxButton = document.getElementById('hideInbox');
    hideInboxButton.addEventListener("click", openTeanFunc);

    function openTeanFunc() {
        if (element4.classList.contains('ba-service-block__view-no')){
            element4.classList.remove('ba-service-block__view-no');
        } else {
            element4.classList.add('ba-service-block__view-no');
        }
    }

    var element5 = document.getElementById('statisticsBlock'),
        hideStatButton = document.getElementById('hideStatistics');
    hideStatButton.addEventListener("click", openStatFunc);

    function openStatFunc() {
        if (element5.classList.contains('ba-service-block__view-no')){
            element5.classList.remove('ba-service-block__view-no');
        } else {
            element5.classList.add('ba-service-block__view-no');
        }
    }
})();





