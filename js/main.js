function haveBackground() {
    var decision = true;
    var width = $( window ).width();
    var height = $( window ).height();
    var ratio = parseInt(width) / parseInt(height);
    if (ratio < (4/3)) {
        decision = false;
    }
    return decision;
}

$(document).ready(function() {
    if (haveBackground()) {
        $('body').css('background-image', 'url("images/warwick_background.jpg")');
        $('body').css('background-repeat', "no-repeat");
        $('body').css('background-size', "100%");
    } else {
        $('body').css('background-image', 'url("images/warwick_vertical")');
        $('body').css('background-repeat', "no-repeat");
        $('body').css('background-size', "100%");
    }
});