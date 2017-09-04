$( document ).ready(function() {
  var graph_drawn = false;
  var first_model = undefined,
      second_model = undefined;




    $('.single-model').on('click', function() {
      if(!$(this).hasClass('selected')) {

          if (!first_model) {
            $(this).addClass('selected-first');
            $(this).addClass('selected');
            first_model = {"model" : $(this).data('model'), "data" : $(this).data('graph')};
            console.log(first_model);
          } else if (first_model && !second_model) {
            $(this).addClass('selected');
            $(this).addClass('selected-second');
            second_model = {"model" : $(this).data('model'), "data" : $(this).data('graph')};
            console.log(second_model);
          }

      } else {

        if(first_model) {
        if($(this).data('model') === first_model.model) {
          $(this).removeClass('selected selected-first');
          first_model = undefined;console.log(first_model);
        }
      }
      if(second_model) {
        if($(this).data('model') === second_model.model){
          $(this).removeClass('selected selected-second');
          second_model = undefined;
          console.log(second_model);
        }
      }
      }

      if((typeof first_model !== 'undefined' ) && (typeof second_model !== 'undefined')) {
        $.each(first_model.data, function(bar_type, value) {

             $('#bar-' + bar_type).css('height', value+'%');
             $('#numeric-' + bar_type).html(value/10);


         });
       $.each(second_model.data, function(bar_type, value) {
            $('#bar-' + bar_type + '-second').css('height', value+'%');
            $('#numeric-' + bar_type + '-second').html(value/10);


        });
      }
    });



});


/*

if (!graph_drawn) {
  drawGraph(this);
  graph_drawn = true;
} else {
  if (first_model && second_model) {
    $('.single-model[data-model="'+ first_model.model + '"]').removeClass('selected-first');
    $('.single-model[data-model="'+ second_model.model + '"]').removeClass('selected-second');
    first_model = undefined,
    second_model = undefined;
  }
    drawGraph(this);

  }





    });

    function drawGraph(that) {
      if(!first_model) {
        first_model = { "model" : $(that).data('model'), "data" : $(that).data('graph')};
          $(that).addClass('selected-first');

      } else {
          if(first_model.model !== $(that).data('model')) {
        second_model = { "model" : $(that).data('model'), "data" : $(that).data('graph')};
        $(that).addClass('selected-second');

        $.each(first_model.data, function(bar_type, value) {

             $('#bar-' + bar_type).css('height', value+'%');
             $('#numeric-' + bar_type).html(value/10);


         });
       $.each(second_model.data, function(bar_type, value) {
            $('#bar-' + bar_type + '-second').css('height', value+'%');
            $('#numeric-' + bar_type + '-second').html(value/10);


        });


      }
    }
    }

*/
