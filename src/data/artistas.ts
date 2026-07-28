export interface Artista {
  id: number;
  nombre: string;
  recinto: string;
  ciudad: string;
  fecha?: string;
  categoria: "Conciertos" | "Ferias" | "Eventos Deportivos" | "Eventos Culturales" | "Eventos Especiales";
  imagen: string;
}

export const artistas: Artista[] = [
  { id: 1, nombre: "Shakira", recinto: "Estadio TSM", ciudad: "Torreón", categoria: "Conciertos", imagen: "/shakira-trc.jpg" },
  { id: 2, nombre: "Andrea Bocelli", recinto: "Club Campestre", ciudad: "Torreón", categoria: "Conciertos", imagen: "/about-arena.jpg" },
  { id: 3, nombre: "Guns N' Roses", recinto: "Estadio Akron", ciudad: "Guadalajara", categoria: "Conciertos", imagen: "/hero-concert.jpg" },
  { id: 4, nombre: "Air Supply", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 5, nombre: "Gloria Gaynor", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 6, nombre: "Black Eyed Peas", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 7, nombre: "Caifanes", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-grupo-frontera.jpg" },
  { id: 8, nombre: "Camila", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 9, nombre: "Yuridia", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 10, nombre: "Danna Paola", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 11, nombre: "Ricardo Montaner", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 12, nombre: "Carlos Rivera", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 13, nombre: "Rels B", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 14, nombre: "Ricardo Arjona", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 15, nombre: "Alejandro Sanz", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "13 Oct 2019", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 16, nombre: "Alejandro Fernández", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carin-leon.jpg" },
  { id: 17, nombre: "Chayanne", recinto: "Feria Torreón", ciudad: "Torreón", fecha: "21 Sep 2019", categoria: "Ferias", imagen: "/event-carlos-rivera.jpg" },
  { id: 18, nombre: "Marisela", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 19, nombre: "Danny Ocean", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 20, nombre: "Alfredo Olivas", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carin-leon.jpg" },
  { id: 21, nombre: "Carín León", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carin-leon.jpg" },
  { id: 22, nombre: "Steve Aoki", recinto: "Foro de las Estrellas", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 23, nombre: "Bely y Beto", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 24, nombre: "OV7", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-grupo-frontera.jpg" },
  { id: 25, nombre: "Mon Laferte", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 26, nombre: "Sin Bandera", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 27, nombre: "Kenia Os", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 28, nombre: "Intocable", recinto: "Plaza México", ciudad: "CDMX", categoria: "Conciertos", imagen: "/event-palomazo-torreon.jpg" },
  { id: 29, nombre: "Julión Álvarez", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "6 Mar 2020", categoria: "Conciertos", imagen: "/event-carin-leon.jpg" },
  { id: 30, nombre: "María José", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "1 Feb 2020", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 31, nombre: "Matute", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "29 Nov 2019", categoria: "Conciertos", imagen: "/event-grupo-frontera.jpg" },
  { id: 32, nombre: "Morat", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "1 Nov 2019", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 33, nombre: "Matisse", recinto: "Poliforum", ciudad: "Torreón", fecha: "26 Sep 2019", categoria: "Conciertos", imagen: "/event-julieta-venegas.jpg" },
  { id: 34, nombre: "Babasónicos", recinto: "Poliforum", ciudad: "Torreón", fecha: "22 Sep 2019", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 35, nombre: "Daniel Habif", recinto: "Poliforum", ciudad: "Torreón", fecha: "9 Ago 2019", categoria: "Conciertos", imagen: "/about-arena.jpg" },
  { id: 36, nombre: "Pepe Aguilar", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "9 Ago 2019", categoria: "Conciertos", imagen: "/event-carin-leon.jpg" },
  { id: 37, nombre: "Maluma", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "6 Jul 2019", categoria: "Conciertos", imagen: "/event-myke-towers.jpg" },
  { id: 38, nombre: "Juntos (Jorge Medina & Josi Cuen)", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-palomazo-torreon.jpg" },
  { id: 39, nombre: "El Duelo", recinto: "Coliseo Centenario", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carin-leon.jpg" },
  { id: 40, nombre: "Marco Antonio Solís", recinto: "Por confirmar", ciudad: "Torreón", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
  { id: 41, nombre: "Jaripeo Sin Fronteras", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "28 Feb 2020", categoria: "Eventos Deportivos", imagen: "/event-carin-leon.jpg" },
  { id: 42, nombre: "Bull Riders", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "3 Ago 2019", categoria: "Eventos Deportivos", imagen: "/hero-concert.jpg" },
  { id: 43, nombre: "Sonora Dinamita y Tropicana", recinto: "Feria Torreón", ciudad: "Torreón", fecha: "15 Sep 2019", categoria: "Ferias", imagen: "/event-palomazo.jpg" },
  { id: 44, nombre: "Ángeles Azules", recinto: "Feria Torreón", ciudad: "Torreón", fecha: "13 Sep 2019", categoria: "Ferias", imagen: "/event-grupo-frontera.jpg" },
  { id: 45, nombre: "Gran Silencio", recinto: "Feria Torreón", ciudad: "Torreón", fecha: "12 Sep 2019", categoria: "Ferias", imagen: "/event-myke-towers.jpg" },
  { id: 46, nombre: "El Duelo", recinto: "Feria Torreón", ciudad: "Torreón", fecha: "30 Ago 2019", categoria: "Ferias", imagen: "/event-carin-leon.jpg" },
  { id: 47, nombre: "Emmanuel y Mijares", recinto: "Coliseo Centenario", ciudad: "Torreón", fecha: "14 Feb 2020", categoria: "Conciertos", imagen: "/event-carlos-rivera.jpg" },
];

export const categoriasGaleria = [
  "Todos",
  "Conciertos",
  "Ferias",
  "Eventos Deportivos",
  "Eventos Culturales",
  "Eventos Especiales",
];
