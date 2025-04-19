<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER["REQUEST_METHOD"];

if ($method == "OPTIONS") {
    die();
}
require_once('../models/resenias.model.php');
//error_reporting(0);
$resenias = new Resenias;

switch ($_GET["op"]) {

    case 'todos':
        $datos = array();

        $datos = $resenias->todos();
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    case 'libros':
        $id_libro = $_POST["id_libro"];
        $datos = array();

        $datos = $resenias->libros($id_libro);
        while ($row = mysqli_fetch_assoc($datos)) {
            $todos[] = $row;
        }
        echo json_encode($todos);
        break;

    case 'uno':
        $id_resenia = $_POST["id_resenia"];
        $datos = array();
        $datos = $resenias->uno($id_resenia);
        $res = mysqli_fetch_assoc($datos);
        echo json_encode($res);
        break;

    case 'insertar':
        $id_libro = $_POST["id_libro"];
        $usuario = $_POST["usuario"];
        $comentario = $_POST["comentario"];
        $valoracion = $_POST["valoracion"];
        $fecha = $_POST["fecha"];
        $datos = array();
        $datos = $resenias->insertar($id_libro, $usuario, $comentario, $valoracion, $fecha);
        echo json_encode($datos);
        break;

    case 'actualizar':
        $id_resenia = $_POST["id_resenia"];
        $id_libro = $_POST["id_libro"];
        $usuario = $_POST["usuario"];
        $comentario = $_POST["comentario"];
        $valoracion = $_POST["valoracion"];
        $fecha = $_POST["fecha"];
        $datos = array();
        $datos = $resenias->actualizar($id_resenia, $id_libro, $usuario, $comentario, $valoracion, $fecha);
        echo json_encode($datos);
        break;

    case 'eliminar':
        $id_resenia = $_POST["id_resenia"];
        $datos = array();
        $datos = $resenias->eliminar($id_resenia);
        echo json_encode($datos);
        break;
}
