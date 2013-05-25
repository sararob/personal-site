//Place all the behaviors and hooks related to the matching controller here.
//All this logic will automatically be available in application.js.
//You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


    jQuery.fn.slideFadeToggle = function (duration, easing, complete) {
        return this.animate({
            opacity: 'toggle',
            height: 'toggle'
        }, jQuery.speed(duration, easing, complete));
    };

$(document).ready(function() {
    $('button#ht').click(function(){
        $('div#hackertweets').toggle();
        $('div#hapily').hide();
        $('div#todo').hide();
        $('div#codecation').hide();
        $('div#medicare').hide();
        $('div#boxiversary').hide();
        $('div#famgram').hide();
    });
    $('button#api').click(function(){
        $('div#hapily').show();
        $('div#hackertweets').hide();
        $('div#todo').hide();
        $('div#codecation').hide();
        $('div#medicare').hide();
        $('div#boxiversary').hide();
        $('div#famgram').hide();
    });
    $('button#td').click(function() {
        $('div#todo').show();
        $('div#hapily').hide();
        $('div#hackertweets').hide();
        $('div#codecation').hide();
        $('div#medicare').hide();
        $('div#boxiversary').hide();
        $('div#famgram').hide();
    });
    $('button#code').click(function() {
        $('div#codecation').show();
        $('div#hapily').hide();
        $('div#hackertweets').hide();
        $('div#todo').hide();
        $('div#medicare').hide();
        $('div#boxiversary').hide();
        $('div#famgram').hide();
    });
    $('button#med').click(function() {
        $('div#medicare').show();
        $('div#codecation').hide();
        $('div#hapily').hide();
        $('div#hackertweets').hide();
        $('div#todo').hide();
        $('div#boxiversary').hide();
        $('div#famgram').hide();
    });
    $('button#event').click(function() {
        $('div#boxiversary').show();
        $('div#medicare').hide();
        $('div#codecation').hide();
        $('div#hapily').hide();
        $('div#hackertweets').hide();
        $('div#todo').hide();
        $('div#famgram').hide();
    });
    $('button#fam').click(function() {
        $('div#famgram').show();
        $('div#boxiversary').hide();
        $('div#medicare').hide();
        $('div#codecation').hide();
        $('div#hapily').hide();
        $('div#hackertweets').hide();
        $('div#todo').hide();
    });
});
