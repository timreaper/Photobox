var responsive_helper = new function () {
    var view;

    this.set_view = function () {
        if (window.innerWidth >= 480) {
            this.view = 'desktop';
        } else {
            this.view = 'mobile';
        }
        this.run();
    };

    this.run = function () {
        if (this.view == 'mobile') {
            $('.show-desktop').hide();
            $('.show-mobile').show();
        } else {
            $('.show-mobile').hide();
            $('.show-desktop').show();
        }
    }
};