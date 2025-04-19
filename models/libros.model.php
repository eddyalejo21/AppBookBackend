<?php
//TODO: Clase de Libros
require_once('../config/comun.php');

class Libros
{
    //TODO: Implementar los metodos de la clase Libros
    public $tabla;

    public function __construct()
    {
        $this->tabla = new ClaseTabla("libros","id_libro");
        $this->tabla->AgregarCampo("titulo");
        $this->tabla->AgregarCampo("autor");
        $this->tabla->AgregarCampo("fecha_publicacion");
        $this->tabla->AgregarCampo("descripcion");
        $this->tabla->AgregarCampo("imagen");
    }
    public function todos() 
    {
        $datos = $this->tabla->DevolverTodos();
        return $datos;
    }
    public function uno($id_libro) 
    {
        $datos = $this->tabla->DevolverUno($id_libro);
        return $datos;
    }
    public function insertar($titulo, $autor, $fecha_publicacion, $descripcion, $imagen) 
    {
        $valores = array($titulo, $autor, $fecha_publicacion, $descripcion, $imagen);
        return $this->tabla->InsertarRegistro($valores);
    }
    public function actualizar($id_libro, $titulo, $autor, $fecha_publicacion, $descripcion, $imagen) 
    {
        $valores = array($titulo, $autor, $fecha_publicacion, $descripcion, $imagen);
        return $this->tabla->ActualizarRegistro($id_libro, $valores);
    }
    public function eliminar($id_libro) 
    {
       return $this->tabla->EliminarRegistro($id_libro);   
    }
}