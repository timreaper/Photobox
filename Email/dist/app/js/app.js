$(window).load(function(){main.load_views()}),$(window).resize(function(){responsive_helper.set_view()});var main=new function(){var i=this;i.data={},this.load_views=function(){$("#page").html(Photobox.email.main()),responsive_helper.set_view()}},responsive_helper=new function(){this.set_view=function(){window.innerWidth>=480?this.view="desktop":this.view="mobile",this.run()},this.run=function(){"mobile"==this.view?($(".show-desktop").hide(),$(".show-mobile").show()):($(".show-mobile").hide(),$(".show-desktop").show())}};