<?php
header("Content-type: text/html; charset=utf-8");  

$appid = 'wx01d8c21534b69fda';
$appsecret = '8f1cace051f02e9bb92af215776abd95';

function get_access_token(){
	$url = "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx01d8c21534b69fda&secret=8f1cace051f02e9bb92af215776abd95";
	echo $url;
	$str = get($url);
	
	$r = json_decode($str, true);
	
	if(array_key_exists("access_token", $r)){
		return $r['access_token'];
	}
}
	
function post($url, $data){
	 $ch = curl_init(); 
 
	 curl_setopt($ch, CURLOPT_URL, $url); 
	 curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
	 curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
	 curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
	 curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
	 curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
	 curl_setopt($ch, CURLOPT_AUTOREFERER, 1); 
	 curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
	 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
	 $tmpInfo = curl_exec($ch); 
	 if (curl_errno($ch)) {  
	        echo 'Errno'.curl_error($ch);
	 }
	 curl_close($ch); 	
	 return $tmpInfo;
}
 
function get($url){
 $ch = curl_init(); 

 curl_setopt($ch, CURLOPT_URL, $url); 
 curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "GET");
 curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
 curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
 curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (compatible; MSIE 5.01; Windows NT 5.0)');
 curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
 curl_setopt($ch, CURLOPT_AUTOREFERER, 1); 
 curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); 
 $tmpInfo = curl_exec($ch); 
 if (curl_errno($ch)) {  
        echo 'Errno'.curl_error($ch);
 }
 curl_close($ch); 	
 return $tmpInfo;
}
 
?>