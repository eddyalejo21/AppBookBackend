<?php
//TODO: Clase de Comercios
require_once('../config/comun.php');

class Resenias
{
    //TODO: Implementar los metodos de la clase Proveedores
    public $tabla;

    public function __construct()
    {
        $this->tabla = new ClaseTabla("resenias","id_resenia");
        $this->tabla->AgregarCampo("id_libro");
        $this->tabla->AgregarCampo("usuario");
        $this->tabla->AgregarCampo("comentario");
        $this->tabla->AgregarCampo("valoracion");
        $this->tabla->AgregarCampo("fecha");
    }
    public function todos() 
    {
        $datos = $this->tabla->DevolverTodos();
        return $datos;
    }
    public function libros($id_libro) 
    {
        $datos = $this->tabla->DevolverReseniaPorLibro($id_libro);
        return $datos;
    }
    public function uno($id_resenia) 
    {
        $datos = $this->tabla->DevolverUno($id_resenia);
        return $datos;
    }
    public function insertar($id_libro, $usuario, $comentario, $valoracion, $fecha) 
    {
        $valores = array($id_libro, $usuario, $comentario, $valoracion, $fecha);
        return $this->tabla->InsertarRegistro($valores);
    }
    public function actualizar($id_resenia, $id_libro, $usuario, $comentario, $valoracion, $fecha) 
    {
        $valores = array($id_libro, $usuario, $comentario, $valoracion, $fecha);
        return $this->tabla->ActualizarRegistro($id_resenia, $valores);
    }
    public function eliminar($id_resenia) 
    {
       return $this->tabla->EliminarRegistro($id_resenia);   
    }
}