

    var links = $('link[rel=alternate]');
    $(links).each(function() {

        var href=$(this).attr('href');  
        var hreflang=$(this).attr('hreflang') ;

        $('ul.store-switcher a[data-alternate='+hreflang+']').attr('href',href);




    });



