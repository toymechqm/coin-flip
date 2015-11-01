$( document ).ready(function() {

  $(function(){
    var $img = $("#myimg");

      function rotate(degree,speed,orientation) {
      $img.css({ WebkitTransform: 'rotateY('+degree+'deg)'});
      $img.css({ '-o-transform': 'rotateY('+degree+'deg)'});
      $img.css({ '-transform': 'rotateY('+degree+'deg)'});
      $img.css({ '-moz-transform': 'rotateY('+degree+'deg)'});

      $img.css({ '-moz-transition': speed+'s'});
      $img.css({ '-moz-transform-style': 'preserve-3d'});
      $img.css({ '-webkit-transition': speed+'s'});
      $img.css({ '-webkit-transform-style': 'preserve-3d'});
      $img.css({ '-o-transition': speed+'s'});
      $img.css({ '-o-transition-style': 'preserve-3d'});
      $img.css({ '-transition': speed+'s'});
      $img.css({ '-transform-style': 'preserve-3d'});
      }

      $('#flip').click(function(){
          $speed = 0.05;
          for($i=0;$i<=1440;$i++)
          {
              if($i % 100 == 0)
              {
                   $speed = $speed + 0.1 ;
              }
              rotate($i,$speed,'Y');
          }
          setTimeout(function(){
              $('#myimg').removeAttr('style');
          },3000);
          var toss = Math.random();

          if (toss >= 0.5) {
            $( ".results" ).empty().append($("#h21").text());
          } else{
            $( ".results" ).empty().append($("#h22").text());
          }
      });
  });

  $( "#add1" ).click(function() {
    $( "#h21" ).empty().append($("#opt1").val());

  });

  $( "#add2" ).click(function() {
    $( "#h22" ).empty().append($("#opt2").val());
  });

});
