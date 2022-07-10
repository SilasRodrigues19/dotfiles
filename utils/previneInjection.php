<?php

function previneInjection($str){
	return str_replace("'", "", $str);
}