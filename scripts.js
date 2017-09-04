$( document ).ready(function() {

  var first_model = undefined,
      second_model = undefined;




    $('.single-model').on('click', function() {


      if(!$(this).hasClass('selected')) {

          if (!first_model) {

            $(this).addClass('selected selected-first');
            first_model = {"model" : $(this).data('model'), "data" : $(this).data('graph'), "class" : "first"};
            draw_graph(first_model);

          } else if (first_model && !second_model) {

            $(this).addClass('selected selected-second');
            second_model = {"model" : $(this).data('model'), "data" : $(this).data('graph'), "class" : "second"};
            draw_graph(second_model);

          } else if (first_model && second_model) {
              $('.single-model[data-model="'+ second_model.model + '"]').removeClass('selected selected-second');
              reset_graph(second_model);
              $(this).addClass('selected selected-second');
              second_model = {"model" : $(this).data('model'), "data" : $(this).data('graph'), "class" : "second"};
              draw_graph(second_model);
          }

      } else {

        if(first_model) {
        if($(this).data('model') === first_model.model) {
        //  $(this).removeClass('selected selected-first');
          reset_graph(first_model);
          first_model = undefined;

        }
      }
      if(second_model) {
        if($(this).data('model') === second_model.model){
          reset_graph(second_model);
          second_model = undefined;

        }
      }
    }

    });
  function  draw_graph(iem) {

      $.each(iem.data, function(bar_type, value) {
           $('#bar-' + bar_type + '-' + iem.class).css('height', value+'%');
           $('#numeric-' + bar_type + '-' + iem.class).html(value/10);


       });
    }

    function reset_graph(iem) {
      $('.single-model[data-model="'+ iem.model + '"]').removeClass(' selected selected-' + iem.class);
      $.each(iem.data, function(bar_type, value) {
           $('#bar-' + bar_type + '-' + iem.class).css('height', 0);
      });
    }




});
