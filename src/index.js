import './sass/style.scss';
import './sass/excellent.scss';
import './sass/login.scss';
import 'bootstrap/dist/css/bootstrap.rtl.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '@fortawesome/fontawesome-free/js/all.min';

import $ from 'jquery';

$(document).ready(function () {
    var currentPage = window.location.pathname.split("/").pop();

    $('.navbar-nav .nav-link').not('.signup').each(function () {
        if ($(this).attr('href') === currentPage) {
            $(this).addClass('active'); 
        } else {
            $(this).removeClass('active'); 
        }
    });
});