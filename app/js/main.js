$(document).ready(function (){
    $.getJSON('js/quiz.json', function(data) {
        var template = document.getElementById('qTemplate').innerHTML;;
        var html= Mustache.to_html(template,data);
        $('#quiz').append(html);
    }).done (function(){
      $('ol').randomize();
      $('#qContainer').carousel({
        interval:0,
        keyboard:true
      });
      $('.options').first().addClass('active');

    })



});






$.fn.randomize = function(selector){
    var $elems = selector ? $(this).find(selector) : $(this).children(),
        $parents = $elems.parent();

    $parents.each(function(){
        $(this).children(selector).sort(function(){
            return Math.round(Math.random()) - 0.5;
        // }). remove().appendTo(this); // 2014-05-24: Removed `random` but leaving for reference. See notes under 'ANOTHER EDIT'
        }).detach().appendTo(this);
    });

    return this;
};
