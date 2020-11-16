<?php

// DONT TOUCH THIS
// If you need help, contact me. Discord: il tanito#0001

$content = json_decode(file_get_contents("http://".$server_ip.":".$server_port."/info.json"), true);
if($content):
    $gta5_players = file_get_contents("http://".$server_ip.":".$server_port."/players.json");
	$content = json_decode($gta5_players, true);
    $players_online = count($content);
    $query_print = $players_online. "/" .$server_maxplayers. " (" .$server_map. ")";
else:
    $players_online = '0';
    $query_print = "Server Offline";
endif;

?>