'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('pois', [
      {
        id: 1,
        userId: 1,
        title: 'Iglesia Catedral',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652654403/zmpdkjw68qphgtto6k7k.jpg',
        description: `Uno de los símbolos de la ciudad, su construcción se inició en 1574 y tardó aproximadamente 200 años su realización definitiva.
Es importante contemplarla desde la Plaza y advertir su mezcla de estilos unificados por lo monumental de la obra arquitectónica. En las aristas de las torres se destacan los ángeles músicos, de factura aborigen.
La imponente cúpula es de 1753, y en la bóveda de su nave central se manifiesta el talento de Emilio Caraffa, el gran maestro de la pintura cordobesa.        
Aquí descansan los restos de Fray Mamerto Esquiú.        
En su atrio descansan los restos de tres grandes cordobeses, el Deán Gregorio Funes, primer rector de nuestra universidad, los restos del General José María Paz y los restos del General Bustos, ambos gobernadores de Córdoba del siglo XIX.`,
        address: 'Independencia 80, X5022 Córdoba, Argentina',
        latitude: -31.4168,
        longitude: -64.1845,
        cost: 'Gratis',
        schedule: `Lunes a viernes de 9:00 a 19:30 hs.
Sábados y domingos de 9:00 a 12:00 y 16:00 a 19:30 hs.
Feriados de 17:00 a 19:30 Hs.`,
        contact: `Teléfono: +54 9 0351 4223446
WhatsApp: +54 9 351 7665839
Email: catedralcba@gmail.com`,
        others: `Santa Misa
Lunes a viernes Santa misa 18 hs.
Sábados 18:30 hs. (Misa para jóvenes)
Domingos 10:30 hs y 18 hs.
Confesiones: una hora antes de cada misa y viernes de 9 a 11 hs.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 2,
        userId: 1,
        title: 'Iglesia Santa Catalina de Siena',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652655558/li28lynrahlqky9jkz7t.jpg',
        address: 'Obispo Trejo 44, Centro, X5000IYB Córdoba, Argentina',
        description: `Esta Iglesia forma junto con el Monasterio del mismo nombre, un solo conjunto de características arquitectónicas diferentes. Sus comienzos se remontan al año 1613. Su fachada refleja un claro y definido neoclásico contrastando con el sólido barroco que corona el ingreso al Monasterio, en donde se destaca una escultura de Santa Catalina de Siena, patrona de la iglesia. Su interior tranquilo y oscuro finaliza con la mística reja de la clausura que alberga el canto dulce y apacible de las religiosas que impregnan de alegría los muros del templo.`,
        latitude: -31.4162,
        longitude: -64.1858,
        cost: '$50',
        schedule: `Lunes a Viernes 10am a 12pm.`,
        contact: `Teléfono: 0351 15-379-5161`,
        others: `Misa Domingo 10am`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 3,
        userId: 1,
        title: 'Basilica Santo Domingo',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652656818/jc1qupzijizoiz720hqx.jpg',
        address: 'Velez Sarsfield 30, Centro, X5000JJN Córdoba, Argentina',
        description: `La orden de los predicadores se establece en Córdoba, en el siglo XVI, y diagraman la construcción del seminario y la Iglesia.
Este templo atesora en sus cimientos, los testimonios de las devastadoras inundaciones provocadas por el, ahora acallado, arroyo de La Cañada. Pero definitivamente las obras se iniciaron gracias a Olegario Correa en 1857 y se inauguró en 1861, sufrió varias modificaciones, entre ellas, la ampliación para el camarín de la Virgen.
Su fachada es simple con características renacentistas, y fueron los hermanos Kánepa los encargados de concluirla. Las cúpulas tienen un revestimiento de cerámicas donadas por el entonces presidente argentino Justo J. De Urquiza.
La pieza de mayor valor de esta iglesia la constituye la Virgen alojada en el Camarín, ella es la patrona de la Arquidiócesis de Córdoba: Nuestra Señora del Rosario del Milagro.`,
        latitude: -31.4155,
        longitude: -64.1869,
        cost: 'Gratis',
        schedule: `Todos los dias de 10 a 18hs`,
        contact: `Teléfono: 03514239005`,
        others: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 4,
        userId: 1,
        title: 'Iglesia de los Capuchinos',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652657282/qzqrrqt9qoybfdximkdi.jpg',
        address: 'Buenos Aires 600-699, Córdoba, Argentina',
        description: `La Iglesia de los capuchinos pertenece a la Orden Franciscana y fue elegida como Primera Maravilla Artificial de la Ciudad. Su construcción comenzó en el año 1926 y fue finalizada en el año 1934.
El arquitecto que se encargó del diseño de la iglesia fue Augusto Ferrari quien realizó su trabajo en un estilo neogótico aprendido en Europa. El ingreso a la Iglesia del Sagrado Corazón, está ornamentado con estatuas de Moisés y Juan El Bautista. En el lateral derecho, se puede observar, la torre trunca que representa la materia que muere; del otro lado la otra torre de 70 metros representa el alma que asciende.
La Iglesia de los Capuchinos se destaca por su gran número de esculturas y pinturas. Su techo es especialmente llamativo, ya que está conformado por bóvedas, ornamentadas por distintos artistas. Estas bóvedas tienen pintadas en ellas estrellas doradas, las cuales no fueron pintadas al azar. De hecho cada bóveda representa el cielo nocturno de Córdoba en los distintos meses del año.
También cuenta con obras de arte que tratan de la vida de San Francisco De Asís. Ferrari diseñó las columnas de distintos estilos que llegan a la altura de las naves y representan las diferentes culturas pre-cristianas. En la cornisa, que marca el comienzo de la fachada, hay en el centro un vitral y una escultura de San Francisco de Asís mirando al cielo, con las manos entrecruzadas.`,
        latitude: -31.4245,
        longitude: -64.1858,
        cost: 'Gratis',
        schedule: `Lunes a Sabados de 14:30 a 19hs`,
        contact: `Teléfono: 0351 468-1922`,
        others: `Visitas guiadas Martes a Domingos 18:30 y 20hs. $600 y $800 por persona.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 5,
        userId: 1,
        title: 'Museo Superior de Bellas Artes Evita',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652657988/j0nbup6khmzyydfsgqgw.jpg',
        address: 'Av. Hipólito Yrigoyen 511, X5004 Córdoba, Argentina',
        description: `El Palacio Ferreyra fue inaugurado en el año 1916. Se trata de una majestuosa construcción de estilo francés, que corona el tradicional barrio Nueva Córdoba, que nació de la elegancia de las familias más tradicionales de la ciudad. El Palacio cuenta con 35 dormitorios, 19 baños y una multiplicidad de salas. Tiene una extensión de más de 500 m² y fue concebido como residencia para la Familia Ferreyra.
Actualmente este edificio ha sido restaurado y refuncionalizado para albergar al MUSEO SUPERIOR DE BELLAS ARTES EVITA de la Provincia de Córdoba.
El museo fue inaugurado el 17 de octubre de 2007, con la idea de contar con un sitio de inigualables características para exhibir la colección de arte de la Provincia de Córdoba. La propuesta museológica también está abierta a muestras transitorias, que signifiquen una contribución al desarrollo cultural de la ciudad. El museo tiene un gran hall central de más de 20 metros de altura, 12 salas de exposición permanente, un auditorio, una sala taller-biblioteca y un espacio de interpretación. El palacio está rodeado de jardines, que invitan a caminar alrededor del inmueble.`,
        latitude: -31.4272,
        longitude: -64.185,
        cost: 'Entrada General $15',
        schedule: `Visitas Guiadas: Público general: martes a viernes a las 12 y a las 17. Sábados, domingos y feriados a las 11 y 17 hs. Instituciones Educativas y Grupos: martes a viernes a las 10 y a las 15. Sábados, domingos y feriados a las 15 hs. `,
        contact: `Teléfono: 0351-4343637
Email: infomuseopalacioferreyra@gmail.com`,
        others: `Agendar visitas educativas vía telefónica al 0351-4343637 los días lunes de 9 a 15, y martes a viernes de 9 a 20.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 6,
        userId: 1,
        title: 'Museo Provincial de Fotografía',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652658587/hdunbstqgl1aanygyp9u.jpg',
        address: 'Av. Hipólito Yrigoyen 622, X5000JHT Córdoba, Argentina',
        description: `Al igual que el Museo Evita, se ubica en una antigua residencia de alto valor arquitectónico de estilo neo-clásico francés, pero mucho más pequeña que el Palacio Ferreyra. Con gran impacto visual, la amplia escalera central –coronada por un precioso y colorido vitral– se impone la ingresar. Cuenta con balcones que permiten vistas de las avenidas Hipólito Yrigoyen y Poeta Lugones, a la re-estructurada plaza España y al Museo de plástica Emilio Caraffa, cruzando la plaza.
La galería de arte, que funciona desde 2013, se distingue por los buenos y versátiles montajes, que exponen a artistas locales y de Sudamérica. Es un museo acogedor y hermoso, especializado en difundir producciones fotográficas nacionales y provinciales. Cuenta, además, con una colección fotográfica propia. Las diminutas salas de las dos plantas que alberga el espacio cultural, exhiben interesantes muestras dentro del gran abanico de técnicas que tiene el mundo de la fotografía, con exposiciones de formatos, temáticas y expresiones artísticas analógicas y digitales.
Diseñado por el arquitecto Miguel Arrambide, su construcción se realizó entre 1920 y 1924. Hasta hoy se conserva casi todo original.
La hija del propietario (Margarita Kegeler) contrajo matrimonio con el Doc. Humberto Dionisio, profesional de la medicina y creador del instituto del cáncer, para entonces, era el único en su tipo. En honor al desempeño y sacrificio en el tópico de la salud, el espacio cultural lleva su nombre.
El Palacio Dionisi, aparte de ser el primer museo fotográfico público de la provincia, ya es parte del patrimonio histórico de estas tierras.`,
        latitude: -31.4294,
        longitude: -64.1848,
        cost: '$50 - Gratis los miercoles',
        schedule: `Martes a Domingos y feriados de 10 a 20hs`,
        contact: `Teléfono: +54 (0351) 433-3411
Email: museopalaciodionisi@gmail.com`,
        others: `Jubilados, menores y estudiantes entran gratis.`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 7,
        userId: 1,
        title: 'Museo de Antropología UNC',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652659506/sk1uwhjfnspj7xof5usj.jpg',
        address: 'Av. Hipólito Yrigoyen 174, X5000 Córdoba, Argentina',
        description: `Al tratarse de un museo universitario, la tarea educativa ocupa un rol central. Como los anteriores museos, la sede es una casona original de principios del siglo XXn. Sin embaro, en este caso, la línea arquitectónica es italiana, con elementos ornamentales y decorativos propios del liberty (nombre que recibió en Italia el estilo artnouveau).
En la planta baja sobresalen las salas de arqueología andina y arqueología serrana: una colección de piezas, cerámicas, urnas y utensilios de la cultura precolombina de Catamarca, Santiago del Estero, Entre Ríos, Santa Fe, Chubut, Córdoba y otros países de latinoamérica.
La sala de la segunda planta está ideada para abordar y difundir el estudio de la antropología social. Siguiendo el recorrido, se encuentran dos salas sorprendentes: “Rituales e Identidades Andinas”. En la primera, se exhiben las prácticas ancestrales de los pueblos andinos, y en la segunda se muestran bellísimos y coloridos textiles –mayormente de Bolivia– de enorme valor etnográfico y simbólico. Es un museo muy atractivo, no solo para los especialistas o estudiantes afines, sino para el público en general.`,
        latitude: -31.4227,
        longitude: -64.1879,
        cost: 'Gratis',
        schedule: `Lunes a Viernes de 9 a 17hs`,
        contact: `Teléfonos: 5353610 int.: 50057 (recepción)
50056 (dirección) 50058 (Idacor).
Mail: museo@ffyh.unc.edu.ar`,
        others: '',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 8,
        userId: 1,
        title: 'Museo Provincial de Bellas Artes',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652659886/ryzzl8nlr31uqhi9986a.jpg',
        address: 'Av. Poeta Leopoldo Lugones 411, X5000HZE Córdoba, Argentina',
        description: `Este corredor cultural, ubicado en la Av. Leopoldo Lugones al 411, al tiempo que brinda montajes con producciones de arte contemporáneo, se consolida como una institución educativa con fines comunitarios, alzando las banderas de la inclusión social. El museo cuenta con nueve salas de exhibición, de manera que el turista puede recorrer de 4 a 7 muestras simultáneamente. Todas las técnicas del arte están incluidas: dibujo, nuevas tecnologías, fotografía, video-arte, escultura y pintura se nos ofrecen diariamente.
Creado el 5 de diciembre de 1914, a partir de 1916 comenzó a funcionar en el característico edificio en curva, en un alto antes del ingreso al parque Sarmiento. Esta edificación fue diseñada por el notable arquitecto Juan Kronfuss. La sede original fue ampliada en 1962 y, tiempo después, se ejecutó otra importante obra de ampliación edilicia, concretada en 2007. En consecuencia, el museo triplicó su espacio expositivo e introdujo nuevos servicios de seguridad, depósito de obras, biblioteca y atención al público.
        `,
        latitude: -31.4284,
        longitude: -64.1838,
        cost: '$250 - Miercoles entrada Gratis',
        schedule: `Martes a Domingos y feriados de 10 a 19hs`,
        contact: `Teléfonos: (54-351) 434-3348/49.
Mail: comunicacion@museocaraffa.org.ar`,
        others: `Colectivos
Líneas: (todas las que van a Plaza España)
20 -21 -23 -24 -26 -28 -29 -67 -71 -13 -16 -18 -19 -52 -55`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
      {
        id: 9,
        userId: 1,
        title: 'Museo Provincial de Ciencias Naturales',
        imageURL:
          'http://res.cloudinary.com/avalojuan/image/upload/v1652660275/kt2ivvjutsg1armptpzb.jpg',
        address:
          'Av. Poeta Leopoldo Lugones 395, X5000 HZD, Córdoba, Argentina',
        description: `Es un espacio consagrado al estudio y la difusión de las ciencias naturales.
En sus comienzos fue llamado “Museo Politécnico Provincial” y dirigido por  el reverendo Jerónimo Lavagna, quién terminó donando las producciones artísticas que pueden apreciarse en la puesta actual.
Con el correr de los años el museo pasó por varios domicilios, hasta que en 2007 llegó al Barrio de Nueva Córdoba. Destaca en este edificio la arquitectura en forma de caracol, con tres entarimados circulares que se conectan entre sí mediante rampas, las cuales permiten la circulación continua de los turistas y un permanente estímulo visual.
El perfil de la institución se caracteriza por conservar una colección de valiosa y destacada minería, ejemplares de fauna, flora y elementos rocosos de todas las latitudes del globo terráqueo. En esa línea, la muestra de animales y plantas que habitan en la provincia cordobesa es un imperdible.
Otra de las grandes atracciones es la exposición de réplicas en tamaño natural de mamíferos gigantes –mega fauna autóctona– que en tiempos de antaño habitaron el territorio cordobés. Además de las copias, se expone una pieza original del caparazón de “Glyptodon”, recuperado en la zona de Almafuerte.
Por otra parte, eruditos de la investigación desarrollan proyectos en los laboratorios de paleontología y biología que posee el museo. En el tercer nivel, la sala está diseñada para conferencias, con una capacidad para más de 80 personas, con equipamientos de iluminación, sonido y proyectores de imágenes.`,
        latitude: -31.4273,
        longitude: -64.1814,
        cost: 'Gratis',
        schedule: `Martes a Domingos y feriados de 10 a 20hs`,
        contact: `Teléfonos: +54 (0351) 4344070/71.
Mail: museocienciasnaturalescba@gmail.com`,
        others: `Colectivos
Líneas: (todas las que van a Plaza España)
20 -21 -23 -24 -26 -28 -29 -67 -71 -13 -16 -18 -19 -52 -55`,
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('pois', null, {});
  },
};
