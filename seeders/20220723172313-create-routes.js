'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('routes', [
      {
        id: 1,
        userId: 1,
        name: 'Centro Historico',
        description: `Más de 1.300.000 personas desarrollan su vida  en Córdoba, una capital que tiene la extraordinaria capacidad de combinar dosis exactas de modernidad y tradición, una cualidad que cualquier visitante puede disfrutar caminando por su Centro Histórico, descubriendo entre bulliciosas avenidas y pobladas peatonales la antigua traza que diseñaron los fundadores.
 El Centro Histórico sigue siendo el corazón de la ciudad, permitiendo retrotraerse a la parte más fascinante de la historia social, cultural y religiosa del país, visitando museos o algunas de las Iglesias más antiguas de América del Sur. También puede maravillarse con los efectos del desarrollo económico.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        userId: 1,
        name: 'Museos Circuito Corto',
        description: `La provincia de Córdoba es reconocida por sus espectaculares paisajes, por sus sabores únicos, por su patrimonio arquitectónico pero también por su enorme oferta cultural y educativa.
En ese sentido la provincia de Córdoba cuenta con miles de museos y espacios que reconstruyen fragmentos de la historia de nuestro país, sitios arqueolígicos, edificios declarados Patrimonio de la Humanidad (UNESCO), galerías de artes, museos polifaséticos, colecciones de piezas únicas prehispánicas, hogares de los primeros habitantes de Córdoba son algunas las categorías de este recorrido de museos a lo largo y ancho del territorio provinicial.
Te invitamos a descubrir Córdoba a través de sus museos.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        userId: 3,
        name: 'Cordoba Jesuitica',
        description: `Los Jesuitas llegaron  a la ciudad de Córdoba en 1599 y la convirtieron en el centro neurálgico de su tarea evangelizadora, pedagógica y misional. De la mano de estos religiosos, Córdoba fue el punto de referencia fundamental en el panorama cultural del Río de la Plata y Tucumán.
En 1767, por la orden del Rey Carlos III, los Jesuitas fueron expulsados de todos los territorios en poder de España. Pudieron, sin embargo, legar una valiosa herencia a la ciudad de Córdoba, que incluye una de las primeras y más prestigiosas Universidades de América Latina -1613- y el templo de la Compañía de Jesús - el más antiguo del país, la primer imprenta que tuvo el Virreinato del Río de la Plata, situada en el sótano del Museo de San Alberto, y el Colegio Máximo, ahora denominado Colegio Nacional del Monserrat.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 4,
        userId: 4,
        name: 'Barrio Guemes',
        description: `En este circuito recorreremos construcciones de fines del siglo XIX e inicio del XX, destacándose las viviendas del primer barrio obrero que tuvo la ciudad. La restauración de sus fachadas revalorizó a la calle Belgrano como eje principal del circuito de artesanos y anticuarios de la ciudad. Güemes es una zona de la ciudad ideal para recorrerla los fines de semana y feriados de año por la tarde noche, ya que cuenta con una amplia propuesta artesanal, gastronómica, cultural y musical, a través de sus galerías, pubs, bares y restaurantes, con impronta bohemia y gourmet.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 5,
        userId: 2,
        name: 'Las tres cafeterias',
        description: `Tomate tres cafes en una tarde de la mano de las mejores cafeterias de Barrio guemes.
Solo para los verdaderos amantes del cafe`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 6,
        userId: 3,
        name: 'Vegetarianos Love',
        description: `Algunos de los lugares y platos que se pueden disfrutar son: Casa Mhia ofrecerá sándwich en pan ciabatta, de milanesa rellena con cebolla caramelizada, panceta y queso, topping cheddar, barbacoa, tomate, coleslaw, mix de chips y limonada; Casa Munay tendrá crocante de maíz oriental (zócalo de maíz en hierbas aromáticas con vegetales y salsa a base de sésamo, maní y soja( y cerveza;  Bao Kitchen tiene Gua Bao Tofu “Gong Bao” vegano (pan casero cocido al vapor con tofu braseado en salsa gongbao, maní, cilantro y pickles caseros) con Iced tea de bebida; Manteca Negra prepara su sándwich de pan focaccia de masa madre con hummus, pesto, tomate seco con un kimchi estilo coreano, coliflor asado y rúcula, y agua con y sin gas para tomar; el Bodegón Vegano preparará su Milanesa Napolitana Vegana (milanesa de seitán, salsa de tomate, muzzarella de almendras, jamón de arroz, rodajas de tomate, y papas fritas) y Jugo de naranja o agua para beber.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 7,
        userId: 4,
        name: 'Sabado a la noche',
        description: `Compilado de 4 bares y restaurantes para disfrutar en la noche del sabado.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 8,
        userId: 2,
        name: 'Nueva Cordoba',
        description: "Otra opción para conocer la Córdoba de fines del siglo XIX y principios del XX, es el circuito por el barrio de Nueva Córdoba, que parte del Patio Olmos y recorre la avenida Hipólito Irigoyen, articulando todo el barrio y uniendo los innumerables atractivos culturales, recreacionales y religiosos del sector.",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 9,
        userId: 2,
        name: 'Iglesias del norte',
        description: `La visita guiada por los barrios General Paz y San Vicente, para conocer las iglesias y los conventos de las órdenes religiosas de la ciudad de Córdoba que albergan no sólo un rico patrimonio, sino también historias de vida de mujeres que se dedicaron a Dios.
Se visitarán especialmente el Instituto de Hermanas Terciarias Esclavas del Corazón de Jesús de barrio General Paz y la Congregación de hermanas Terciarias Franciscanas María del Tránsito Cabanillas de barrio San Vicente. `,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('routes', null, {});
  },
};
