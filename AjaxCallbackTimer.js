/**
 * Provides the Ajax Callback Timer module
 * 
 */
var AjaxCallbackTimer = function ($) {
    'use strict';

    var serviceUrl = "test.json", setCountdownTimer = function (interval,
            callback) {

        var time = interval, worker = setInterval(
                function () {

                    var minutes, seconds, current_date = new Date().getTime(), seconds_left = time / 1000;
                    time = time - 1000;

                    // do some time calculations
                    seconds_left = seconds_left % 86400;
                    seconds_left = seconds_left % 3600;

                    minutes = parseInt(seconds_left / 60);
                    seconds = parseInt(seconds_left % 60);

                    // TODO: update the timer interface

                    // times up (00:00), stop the counting, callback the function
                    if (time < 0) {
                        clearInterval(worker);
                        worker = current_date = seconds_left = minutes = seconds = null;
                        // invoke the callback
                        if (typeof callback === "function") {
                            callback();
                        }
                        // call update again
                        update(interval, callback);

                    }

                }, 1000);

    }, update = function (interval, callback) {
        // time to burst cache

        var jqxhr = $.getJSON(serviceUrl + "?" + new Date().getTime(),
                function (data) {
                    //TODO: JSON returned, do your magic


                });

        // inialize the timer again, after  ajax is completed
        jqxhr.complete(function () {
            // give control back to the timer
            setCountdownTimer(interval, callback);
        });

    }, initialize = function (interval, jsonUrl, callback) {

        $.ajaxSetup({
            cache : false
        });

        if (jsonUrl) {
            serviceUrl = jsonUrl;
        }

        update(interval, callback);

    };

    return {
        init : initialize
    };

}(jQuery);
