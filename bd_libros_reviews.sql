-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
-- Base de datos: `bd_libros_reviews`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `libros`
--

CREATE TABLE `libros` (
  `id_libro` int(11) NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `autor` varchar(255) DEFAULT NULL,
  `fecha_publicacion` date DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `imagen` varchar(500) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `libros`
--

INSERT INTO `libros` VALUES
(2, 'Don Quijote de la Mancha', 'Miguel de Cervantes', '1605-01-16', 'La historia de un hidalgo que enloquece tras leer libros de caballería y decide convertirse en caballero andante.', 'https://images.cdn1.buscalibre.com/fit-in/360x360/a6/18/a618be10eae5c2a608ec6e22e6917e29.jpg'),
(3, 'El Señor de los Anillos', 'J.R.R. Tolkien', '1954-07-29', 'Una épica aventura en la Tierra Media donde un hobbit debe destruir un anillo poderoso.', 'https://images.cdn1.buscalibre.com/fit-in/360x360/66/1a/661a3760157941a94cb8db3f5a9d5060.jpg'),
(4, 'El principito', 'Antoine de Saint-Exupéry', '1943-04-06', 'Un piloto se encuentra con un joven príncipe que le cuenta sus aventuras por distintos planetas.', 'https://i.pinimg.com/474x/be/9d/bd/be9dbd153254b42c7e5ba2223d594a33.jpg'),
(5, 'Harry Potter y la piedra filosofal', 'J.K. Rowling', '1997-06-26', 'Un niño descubre que es un mago y asiste a una escuela de magia, donde comienza su aventura.', 'https://images.cdn2.buscalibre.com/fit-in/360x360/e3/bc/e3bcd85377567759874a0664f894a67b.jpg'),
(6, 'Los juegos del hambre', 'Suzanne Collins', '2008-09-14', 'Una joven lucha por sobrevivir en un sangriento juego televisado.', 'https://images.cdn1.buscalibre.com/fit-in/360x360/b7/40/b740aa55d27021aeaf1322d76473e829.jpg'),
(7, 'El Hobbit', 'J.R.R. Tolkien', '1937-09-21', 'Bilbo Bolsón emprende una aventura con enanos para recuperar un tesoro custodiado por un dragón.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSHPpIFK2Da7TOAQmIWvMYFLVV3bfkIX-bQ&s'),
(8, 'Cien años de soledad', 'Gabriel García Márquez', '1967-05-30', 'Una novela que narra la historia de la familia Buendía en Macondo.', 'https://images.cdn3.buscalibre.com/fit-in/360x360/61/8d/618d227e8967274cd9589a549adff52d.jpg'),
(9, 'El código Da Vinci', 'Dan Brown', '2003-03-18', 'Un profesor de simbología y una criptóloga descubren un secreto que podría cambiar la historia del cristianismo.', 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1277077436i/4250.jpg'),
(21, 'Viaje al centro de la Tierra', 'Julio Verne', '1863-11-25', 'Descripcion  del libro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2UaPbaUJQmoFYoaVkAE6r2BavLgVxHzn8uh0z4QVzabSiY_Vj9mPCJoFKf_plSZVM0Gc&usqp=CAU');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `resenias`
--

CREATE TABLE `resenias` (
  `id_resenia` int(11) NOT NULL,
  `id_libro` int(11) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `comentario` text DEFAULT NULL,
  `valoracion` int(11) DEFAULT NULL CHECK (`valoracion` between 1 and 10),
  `fecha` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `resenias`
--

INSERT INTO `resenias` VALUES
(2, 2, 'ana_lectora', 'Una obra maestra atemporal. Cervantes es increíble.', 10, '2025-04-16 15:22:05'),
(3, 2, 'lectura_obligada', 'La sátira y el humor están muy bien logrados.', 9, '2025-04-16 15:22:05'),
(5, 3, 'frodo_fan', 'Increíble mundo de fantasía, lo he leído varias veces. es magnifico y uno de los mejores de la histo', 10, '2025-04-19 05:00:00'),
(6, 3, 'gollum_rules', 'Muy denso al inicio, pero vale la pena.', 8, '2025-04-16 15:22:06'),
(7, 3, 'elrond_elf', 'Un clásico del género, indispensable.', 9, '2025-04-16 15:22:06'),
(8, 3, 'arwen_love', 'Me encanta cómo se desarrollan los personajes.', 8, '2025-04-16 15:22:06'),
(9, 3, 'orc_slayer', 'Las descripciones son algo pesadas.', 6, '2025-04-16 15:22:06'),
(10, 4, 'sofia_poet', 'Tierno, filosófico, y hermoso. Ideal para todas las edades.', 10, '2025-04-16 15:22:06'),
(11, 4, 'lector_mars', 'Sencillo pero profundo. Me hizo reflexionar.', 9, '2025-04-16 15:22:06'),
(12, 4, 'rosa_espinas', 'Una joya que siempre se redescubre.', 10, '2025-04-16 15:22:06'),
(13, 4, 'zorro_amigo', 'Es más que un libro infantil.', 9, '2025-04-16 15:22:06'),
(14, 5, 'mago_hermione', 'El inicio perfecto de una saga mágica.', 9, '2025-04-16 15:22:07'),
(15, 5, 'potterhead123', 'Lo leí en un día. Genial para niños y adultos.', 10, '2025-04-16 15:22:07'),
(16, 5, 'dobby_free', 'Una historia entrañable desde el comienzo.', 9, '2025-04-16 15:22:07'),
(17, 5, 'snape_rules', 'Muy bien escrito para el público joven.', 8, '2025-04-16 15:22:07'),
(18, 5, 'quidditch_fan', '¡Amo el mundo mágico!', 10, '2025-04-16 15:22:07'),
(19, 5, 'griffindor4life', 'El más ligero de todos, pero muy bueno.', 8, '2025-04-16 15:22:07'),
(20, 6, 'katniss_rules', 'Acción sin parar, me encantó la protagonista.', 8, '2025-04-16 15:22:07'),
(21, 6, 'gale_team', 'Un poco repetitivo, pero con buen ritmo.', 7, '2025-04-16 15:22:07'),
(22, 6, 'peeta_pan', 'Tiene buena crítica social detrás.', 9, '2025-04-16 15:22:07'),
(23, 6, 'tributo_13', 'Adictivo. Lo terminé en 2 días.', 8, '2025-04-16 15:22:07'),
(24, 7, 'bilbo_reader', 'Una aventura encantadora, me encanta Tolkien.', 9, '2025-04-16 15:22:09'),
(25, 7, 'dwarf_miner', 'Ligero y entretenido, mejor que la película.', 8, '2025-04-16 15:22:09'),
(26, 7, 'smaug_fan', 'Perfecto para introducirse al mundo de Tolkien.', 8, '2025-04-16 15:22:09'),
(27, 7, 'hobbiton_life', 'Rico en detalles y muy visual.', 7, '2025-04-16 15:22:09'),
(29, 8, 'macondo_fan', 'Una obra profunda y mágica. García Márquez es único.', 10, '2025-04-16 15:22:10'),
(30, 8, 'realismo_magico', 'Difícil de seguir al principio, pero vale el esfuerzo.', 8, '2025-04-16 15:22:10'),
(31, 8, 'aurora_gm', 'Una historia cíclica y fascinante.', 9, '2025-04-16 15:22:10'),
(32, 8, 'buendia_lector', 'Me perdí con los nombres, pero es genial.', 7, '2025-04-16 15:22:10'),
(33, 9, 'langdon_lover', 'Me atrapó desde la primera página. Intrigante.', 9, '2025-04-16 15:22:10'),
(34, 9, 'historico_misterio', 'Muy comercial pero entretenido.', 7, '2025-04-16 15:22:10'),
(35, 9, 'sophie_neveu', 'Buen ritmo y giros interesantes.', 8, '2025-04-16 15:22:10'),
(36, 3, 'eddyyyy', 'Se modifica el comentario, la fecha correcta', 10, '2025-04-18 05:00:00'),
(51, 21, 'prueba_prueba', 'Comentario del libro modificado', 10, '2025-04-19 05:00:00');

--
-- Indices de la tabla `libros`
--
ALTER TABLE `libros`
  ADD PRIMARY KEY (`id_libro`);

--
-- Indices de la tabla `resenias`
--
ALTER TABLE `resenias`
  ADD PRIMARY KEY (`id_resenia`),
  ADD KEY `id_libro` (`id_libro`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `libros`
--
ALTER TABLE `libros`
  MODIFY `id_libro` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `resenias`
--
ALTER TABLE `resenias`
  MODIFY `id_resenia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `resenias`
--
ALTER TABLE `resenias`
  ADD CONSTRAINT `resenias_ibfk_1` FOREIGN KEY (`id_libro`) REFERENCES `libros` (`id_libro`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
