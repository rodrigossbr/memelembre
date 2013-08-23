var App = {
    search: {
        view: function() {
            var $id = $(this).data('id-event');
            alert($id);
        },
        init: function() {
            $('#main').html($('#search-menu').html()).find('.view-detals-event').click(App.search.view);
        }
    },
    form: {
        init: function() {
            $('#main').html($('#form-menu').html());
        }
    },
    about: {
        init: function() {
            $('#main').html($('#about-menu').html());
        }
    },
    init: function() {
        $('#btn-search-menu').click(App.search.init).click();
        $('#btn-form-menu').click(App.form.init);
        $('#btn-about-menu').click(App.about.init);
        $('.email-sync').click(function() {
        });
    }
};
$(document).ready(function() {
    App.init();
});