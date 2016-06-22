/**
 * Created by Ed on 06/06/2016.
 */
var main = new function () {
    /*Allows for refactoring*/
    var self = this;
    self.data = {};

    this.load_master_template = function () {
        $('#page').html(Photobox.website.main());
    };
};