<?php

function isCnpjValid($cnpj)	{

  // Etapa 1: Cria um array com apenas os digítos numéricos, isso permite receber o CNPJ em diferentes formatos como "00.000.000/0000-00", "00000000000000", "00 000 000 0000 00" etc...
  
  $j = 0;

  for($i = 0; $i < (strlen($cnpj)); $i++) {
      if(is_numeric($cnpj[$i])) {
          $num[$j] = $cnpj[$i];
          $j++;
        }
    }

  //Etapa 2: Conta os dígitos, um CNPJ válido possui 14 dígitos numéricos.

  if(count($num) != 14) {
      $isCnpjValid = false;
    }
  //Etapa 3: O n�mero 00000000000 embora n�o seja um cnpj real resultaria um cnpj v�lido ap�s o calculo dos d�gitos verificares e por isso precisa ser filtradas nesta etapa.
  if ($num[0]==0 && $num[1]==0 && $num[2]==0 && $num[3]==0 && $num[4]==0 && $num[5]==0 && $num[6]==0 && $num[7]==0 && $num[8]==0 && $num[9]==0 && $num[10]==0 && $num[11]==0)
    {
      $isCnpjValid = false;
    }

  //Etapa 4: Calcula e compara o primeiro dígito verificador.

  else {
      $j = 5;
      for($i = 0; $i < 4; $i++) {
          $multiplica[$i] = $num[$i] * $j;
          $j--;
      }

      $soma = array_sum($multiplica);
      $j = 9;

      for($i = 4; $i < 12; $i++) {
          $multiplica[$i] = $num[$i] * $j;
          $j--;
      }

      $soma = array_sum($multiplica);	
      $resto = $soma % 11;		

      if($resto < 2) {
          $dg = 0;
      }
      else {
          $dg = 11 - $resto;
      }

      if($dg != $num[12]) {
          $isCnpjValid = false;
      } 
    }

  //Etapa 5: Calcula e compara o segundo dígito verificador.
  if(!isset($isCnpjValid)) {
      $j = 6;
      for($i = 0; $i < 5; $i++) {
          $multiplica[$i] = $num[$i] * $j;
          $j--;
      }

      $soma = array_sum($multiplica);
      $j = 9;

      for($i = 5; $i < 13; $i++) {
          $multiplica[$i] = $num[$i] * $j;
          $j--;
      }

      $soma = array_sum($multiplica);	
      $resto = $soma % 11;			
      
      if($resto < 2) {
          $dg = 0;
      }
      else {
          $dg = 11 - $resto;
      }
      if($dg != $num[13]) {
          $isCnpjValid = false;
      }
      else {
          $isCnpjValid = true;
        }
    }
  //Etapa 6: Retorna o resultado em um valor booleano.
  return $isCnpjValid;			
}