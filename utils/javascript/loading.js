function fcLoading(close = false) {

	if(!close){
		
		$.magnificPopup.open({
			modal: true,
			items: {
				type: 'inline',
				src: '#modal-cad-padrao'
			},
			callbacks: {
				open: function() {
					$('#modal-cad-padrao').removeClass('hidden');
				}
			}
		}, 0);

	}else{
		
		$.magnificPopup.close({
			modal: true,
			items: {
				type: 'inline',
				src: '#modal-cad-padrao'
			},
			callbacks: {
				close: function() {
					$('#modal-cad-padrao').addClass('hidden');
				}
			}
		}, 0);

	}
	
}

/*

    No HTML:
    <div id="modal-cad-padrao" class="box-modal-cad-padrao hidden">
      <img src="./assets/img/loading.gif">
      <span>Carregando, aguarde...</span>
    </div>

*/


/*
    No CSS:
    .box-modal-cad-padrao {
        position: relative;
        background: #FFF;
        padding: 10px;
        width:auto;
        max-width: 220px;
        margin: 20px auto;
        text-align: center;
        border-radius: 6px;
    }

    .box-modal-cad-padrao img {
      height:40px;
    }

    .box-modal-cad-padrao span {
      display:block; 
      cursor:default; 
      margin-top:8px; 
      font:14px Arial; color: #777;
    }

    .hidden {
      display: none;
    }
*/


/*
    Links requeridos para funcionar (nesta ordem no HTML)
    https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.min.css

    https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
    https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.min.js
*/