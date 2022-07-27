<?php

  function notify($title, $msg, $type, $width) 
  {
    $_SESSION['title'] = $title;
    $_SESSION['msg'] = $msg;
    $_SESSION['type'] = $type;
    $_SESSION['width'] = $width;

  }

  function showMessage() 
  {
    if(isset($_SESSION['title'])) {
      echo alertBox($_SESSION['title'], $_SESSION['msg'], $_SESSION['type'], $_SESSION['width']);
      
      unset($_SESSION['title']);
      unset($_SESSION['msg']);
      unset($_SESSION['type']);
      unset($_SESSION['width']);
    }
  }
  

  function alertBox($title, $msg, $type, $width)
  {
    switch( $type ) {
      case 'erro':
      case 'error':
      case 'danger':
        $type = 'alert-danger';
        $icon  = 'icon-park-solid:close-one';
        $title = 'Erro!';
      break;
      case 'ok':
      case 'success':
        $type = 'alert-success';
        $icon  = 'akar-icons:circle-check-fill';
        $title = 'Sucesso!';
      break;
      case 'aviso':
      case 'warning':
        $type = 'alert-warning';
        $icon  = 'ph:warning-circle-fill';
        $title = 'Aviso!';
      break;
      case 'info':
        $type = 'alert-info';
        $icon  = 'akar-icons:info-fill';
        $title = 'Informação!';
      break;
      default:
        $type = 'alert-default';
        $icon  = 'mdi mdi-alert-circle mr-2';
        $title = 'Aviso!';
    }

    $box = "<div class=\"col-md-6 py-4 my-2 d-flex justify-content-center w-100\">
              <span class=\"$width text-center alert $type\" role=\"alert\">
              <span class=\"iconify mb-1\" data-icon=\"$icon\"></span> <strong> $title </strong> $msg
              </span>
           </div>";

    return $box;
  }
