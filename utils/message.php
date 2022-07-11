<?php

  // Com alerts e ícones do Bootstrap

  function exibeMensagem() 
  {
    if(isset($_SESSION['msg'])) {
      echo monta_box_mensagem_aviso($_SESSION['msg'], $_SESSION['status']);
      
      unset($_SESSION['msg']);
      unset($_SESSION['status']);
    }
  }

  function monta_box_mensagem_aviso( $msg, $status = 'info' )
  {
    switch( $status ) {
      case 'erro':
      case 'danger':
        $status = 'alert-danger';
        $icone  = 'mdi mdi-close-circle mr-2';
        $titulo = 'Aviso!';
      break;
      case 'ok':
      case 'success':
        $status = 'alert-success';
        $icone  = 'mdi mdi-check-circle mr-2';
        $titulo = 'Sucesso!';
      break;
      case 'aviso':
      case 'warning':
        $status = 'alert-warning';
        $icone  = 'mdi mdi-alert mr-2';
        $titulo = 'Aviso!';
      break;
      case 'info':
        $status = 'alert-info';
        $icone  = 'mdi mdi-alert-circle mr-2';
        $titulo = 'Informação!';
      break;
      default:
        $status = 'alert-default';
        $icone  = 'mdi mdi-alert-circle mr-2';
        $titulo = 'Aviso!';
    }

    $box = '';
    $box .= '<div class="row"><div class="col-md-12"><div class="alert ' . $status . '" role="alert">';
      // $box .= '<p><i class="' . $icone . '"></i> <strong>' . $titulo . '</strong></p>';
      $box .= '<i class="' . $icone . '"></i> ' . $msg;
    $box .= '</div></div></div>';

    return $box;
  }


?>