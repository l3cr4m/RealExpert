(function($){

  $(document).ready(function(){

      $('.billboard-container').flickity({
        wrapAround: true,
        cellAlign: 'right',
        arrowShape: {
          x0: 20,
          x1: 65, y1: 50,
          x2: 70, y2: 50,
          x3: 25
        }
      });

      $('.client-container').flickity({
        wrapAround: true,
        cellAlign: 'left',
        pageDots: false,
        arrowShape: {
          x0: 20,
          x1: 65, y1: 50,
          x2: 70, y2: 50,
          x3: 25
        }

    });

  });

})(jQuery)
