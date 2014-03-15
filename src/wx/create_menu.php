<?php
header("Content-type: text/html; charset=utf-8");  

require("wx_inc.php");

$data = '{
     "button":[
     {	
          "name":"我",
          "sub_button":[
		   {
			   "type":"view",
			   "name":"YOU+必读",
			   "url":"http://my.youplus.cc/#/readme"
		   },
		   {
			   "type":"view",
			   "name":"我的YOU+",
			   "url":"http://my.youplus.cc/#/my"
		   },
		   {
			   "type":"view",
			   "name":"生活预约",
			   "url":"http://my.youplus.cc/#/reserve"
		   },
		   {
			   "type":"view",
			   "name":"活动查询",
			   "url":"http://my.youplus.cc/#/events"
		   }
	   		]
      },
      {
           "name":"YOU+圈子",
           "sub_button":[
 		   {
 			   "type":"view",
 			   "name":"小伙伴们",
 			   "url":"http://my.youplus.cc/#/people"
 		   }
 	   		]
      }]
 }';
 
$access_token = get_access_token();
if($access_token===NULL){
 echo "failed to get access token!";
 die();
}
$str = post("https://api.weixin.qq.com/cgi-bin/menu/create?access_token=".$access_token, $data);
$r = json_decode($str, true);
if($r['errorcode']==0){
	echo "create menu successful!";
	die();
}
	
 

?>