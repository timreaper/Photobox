/**
 * Created by Ed on 22/06/2016.
 */

var router = new function () {
    this.page = '';

    this.get_pathname = function () {
        return window.location.hash.split('#!/');
    };

    this.route = function () {
        this.page = router.get_pathname()[1];
        main.load_master_template();
        switch (this.page) {
            case '':
                home.load_template();
                break;
            case 'register':
                register.load_template();
                break;
            default:
                home.load_template();
        }
    };
};