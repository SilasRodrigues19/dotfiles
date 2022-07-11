<?php


// Current Date
function data_atual() {
  $data = date('Y-m-d H:i:s');
  return $data;
}

function convert_date_param($data) { 

  // Validates char lenght
  if(strlen(trim($data)) != 10) return $data;

  // Separate date
  $var_data = explode("/", $data);

  // Validates day
  if(!is_numeric($var_data[0]) || strlen(trim($var_data[0])) != 2 || $var_data[0] > 31 || $var_data[0] <= 0) return $data;

  // Validates month
  if(!is_numeric($var_data[1]) || strlen(trim($var_data[1])) != 2 || $var_data[1] > 12 || $var_data[1] <= 0) return $data;

  // Validates year
  if(!is_numeric($var_data[2]) || strlen(trim($var_data[2])) != 4) return $data;

  // Return date in format YYYY-MM-DD
  return $var_data[2].'-'.$var_data[1].'-'.$var_data[0];

}

function getMonth($month) {

  switch((int)$month ) {
      case 1: $string = "Janeiro"; break;
      case 2: $string = "Fevereiro"; break;
      case 3: $string = "Março"; break;
      case 4: $string = "Abril"; break;
      case 5: $string = "Maio"; break;
      case 6: $string = "Junho"; break;
      case 7: $string = "Julho"; break;
      case 8: $string = "Agosto"; break;
      case 9: $string = "Setembro"; break;
      case 10: $string = "Outubro"; break;
      case 11: $string = "Novembro"; break;
      case 12: $string = "Dezembro"; break;
  }
  return $string;
}

function getWeekDay($day) {

  switch($day) {
    case 6:
      $string = "Sábado";
    break;
    case 0:
      $string = "Domingo";
    break;
    case 1:
      $string = "Segunda";
    break;
    case 2:
      $string = "Terça";
    break;
    case 3:
      $string = "Quarta";
    break;
    case 4:
      $string = "Quinta";
    break;
    case 5:
      $string = "Sexta";
    break;
  }

  return $string;
}

function completeDate($data) {

	$txt_semana = array('Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado');
	$txt_mes = array(1 => 'Janeiro', 2=> 'Fevereiro', 3 => 'Março', 4 => 'Abril', 5 => 'Maio', 6 => 'Junho', 7 => 'Julho', 8 => 'Agosto', 9 => 'Setembro', 10 => 'Outubro', 11 => 'Novembro', 12 => 'Dezembro');
	$semana = $txt_semana[date('w')];
	$mes = $txt_mes[(int)$data[1]];
	$dia = $data[0];
	$ano = $data[2];
	$datacompleta = " $dia de $mes de $ano";

	return $datacompleta;

}

// Hours to minutes
function h2m($num) {
  $mtz = explode(":", trim($num));
  if(count($mtz) > 0){
    return intval($mtz[0])* 60 + intval($mtz[1]);
  }
  return false;

}

// Minutes to hours
function m2h($mins) {
    if ($mins < 0) {
        $min = Abs($mins);
    } else {
        $min = $mins;
    }
    $H = Floor($min / 60);
    $M = ($min - ($H * 60)) / 100;
    $hours = $H + $M;
    if ($mins < 0) {
        $hours = $hours * (-1);
    }

    $expl = explode(".", $hours);
    $H = $expl[0];
    if (empty($expl[1])) {
        $expl[1] = 00;
    }

    $M = $expl[1];
    if (strlen($M) < 2) {
        $M = $M . 0;
    }

    $hours = $H . ":" . $M;

    return $hours;
}

?>