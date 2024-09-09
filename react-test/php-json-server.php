<?php
$path = $_GET["path"];
$path = preg_replace('/[ \/]+$/', '', $path);
$path = explode('/', $path);
$root = $path[0];
$id = $path[1] ?? "";

$filename = "db.json";
$stdin = "php://input";
$json = json_decode(file_get_contents($filename)) ?? (object) array($root => array());
$json->{$root} = $json->{$root} ?? array();
$stdin_json = json_decode(file_get_contents($stdin));

function getIndexById($elms, $id) {
  foreach($elms as $i => $elm) {
    if($elm->{"id"} == $id) {
      return $i;
    }
  }
  return -1;
}

function getById($elms, $id) {
  return $elms[getIndexById($elms, $id)] ?? (object) array();
}

function getMaxId($elms) {
  return count($elms)? max(array_map( fn($elm) => $elm->{"id"} , $elms)) : 0;
}

if($_SERVER["REQUEST_METHOD"] == "GET") {
  if($id == "") {
    print(json_encode($json->{$root}));
  } else {
    print(json_encode(getById($json->{$root}, $id)));
  }
}

if($_SERVER["REQUEST_METHOD"] == "POST") {
  $id = getMaxId($json->{$root}) + 1;
  $stdin_json->{"id"} = $id;
  array_push($json->{$root}, $stdin_json);
  file_put_contents($filename, json_encode($json));
  print(json_encode($stdin_json));
}

if($_SERVER["REQUEST_METHOD"] == "PUT") {
  $stdin_json->{"id"} = $id;
  $i = getIndexById($json->{$root}, $id);
  if($i!=-1) {
    $json->{$root}[$i] = $stdin_json;
  } else {
    array_push($json->{$root}, $stdin_json);
  }
  file_put_contents($filename, json_encode($json));
  print(json_encode($stdin_json));
}

if($_SERVER["REQUEST_METHOD"] == "DELETE") {
  $i = getIndexById($json->{$root}, $id);
  if($i!=-1) {
    array_splice($json->{$root},$i,1);
    file_put_contents($filename, json_encode($json));
  }
}