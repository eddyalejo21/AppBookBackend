<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];

if ($method == "OPTIONS") {
    die();
}
require_once('../models/libros.model.php');
//error_reporting(0);
$libros = new Libros;

switch ($_GET["op"]) {

    case 'todos': 
        $datos = array();
        
        $datos = $libros->todos();
        while ($row = mysqli_fetch_assoc($datos))
        {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    case 'uno':
        $id_libro = $_POST["id_libro"];
        $datos = array();
        $datos = $libros->uno($id_libro);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;
        
    case 'insertar':
        $titulo = $_POST["titulo"];
        $autor = $_POST["autor"];
        $fecha_publicacion = $_POST["fecha_publicacion"];
        $descripcion = $_POST["descripcion"];
        $imagen = $_POST["imagen"];
        $datos = array();
        $datos = $libros->insertar($titulo, $autor, $fecha_publicacion, $descripcion, $imagen);
        echo json_encode($datos);
        break;
        
    case 'actualizar':
        $id_libro = $_POST["id_libro"];
        $nombre = $_POST["titulo"];
        $descripcion = $_POST["autor"];
        $id_tipoactividad = $_POST["fecha_publicacion"];
        $descripcion = $_POST["descripcion"];
        $imagen = $_POST["imagen"];
        $datos = array();
        $datos = $libros->actualizar($id_libro, $titulo, $autor, $fecha_publicacion, $descripcion, $imagen);
        echo json_encode($datos);
        break;
        
    case 'eliminar':
        $id = $_POST["id_libro"];
        $datos = array();
        $datos = $libros->eliminar($id_libro);
        echo json_encode($datos);
        break;
}