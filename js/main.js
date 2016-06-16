$(document).ready(function () {
    $('head').find('link').each(function () {
        var lang = $(this).attr('hreflang');
        var link = $(this).attr('href');
        $('.store-switcher a[data-alternate="' + lang + '"]').attr('href', link);
    });
});
