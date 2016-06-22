/**
 * Created by Ed on 06/06/2016.
 */
$(window).load(function () {
    router.route();
});

$(window).on('hashchange', function () {
    router.route();
});