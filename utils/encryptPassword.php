<?php
function encryptpassword($str) {
  return md5(hash('sha512', md5(hash('sha512', $str))));
}
?>