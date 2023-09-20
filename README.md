# Dataviz Elecciones Ciudad de Buenos Aires 📊

Este repositorio contiene un dataviz interactivo construido con Next.js y React que visualiza los resultados de las elecciones en la Ciudad de Buenos Aires. Utiliza una estética de collage, combinando colores partidarios, recursos ilustrativos de zonas geográficas y objetos identificativos de candidatos para proporcionar una experiencia visual atractiva y comprensible.

## Demostración 🖥️

Podes ver una demostración del dataviz [acá](https://vd-elecciones-paso-2023.vercel.app/eleccion-portenos).

## Capturas de Pantalla 📸

![Captura de Pantalla 1](https://media.discordapp.net/attachments/1067538761841397861/1153822244972286084/Captura_de_pantalla_2023-09-19_a_las_19.37.13.png?width=1854&height=1112)

![Captura de Pantalla 2](https://media.discordapp.net/attachments/1067538761841397861/1153822245467197600/Captura_de_pantalla_2023-09-19_a_las_19.37.33.png?width=1850&height=1112)

## Características Principales 🌟

- Estética de collage para una visualización con tintes de diario.
- Codificación de colores por partido político para una identificación rápida.
- Recursos ilustrativos de las zonas geográficas de la Ciudad de Buenos Aires para contexto.
- Objetos identificativos de candidatos para una conexión visual inmediata.
- Utilizamos la tipografía "Montserrat" para una legibilidad óptima.
- Gráficos generados con Flourish para una presentación visual atractiva.

## Cómo Usar 🚀

1. Cloná o descargá el repositorio.
2. Asegurate de tener Node.js y npm instalados.
3. Ejecutá `npm install` para instalar las dependencias.
4. Ejecutá `npm run dev` para iniciar la aplicación en modo de desarrollo.
5. Abrí tu navegador y andá a `http://localhost:3000`.

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! Si queres mejorar o expandir este dataviz, sentite libre de abrir un issue o enviar un pull request :)

## Integrantes del Proyecto 👩‍💻

- Luz Alba Posse
- Lucía Lopez

# Desarrollo del proyecto 🔧

## Un poco sobre la narrativa 🤓
Decidimos desarrollar nuestro trabajo, desde el escenario del ciudadano y no poner tanto énfasis en  los candidatos. Es la población quién tiene el poder de elegir, y  enfocarse en las necesidades, preocupaciones y deseos de los argentinos, se considera fundamental para construir una sociedad más inclusiva y participativa.
Decidimos crear distintas etapas para desarrollar nuestro enfoque.

- Comenzando por una etapa general, a quienes votaron los porteños, pasando en qué cambió hubo en el voto de la población, si decidieron cambiar de candidato a diferencia del 2019, y qué no cambió y qué sucedió con la población votó en blanco.  Y finalmente, a donde se dirigiran los votos de la población en Octubre.
Asimismo - es posible subrayar  que sucederá en octubre ahora que se generó  un cambio político significativo en la Ciudad de Buenos Aires, con el ascenso de Javier Milei. 

- Se observan divergencias en propuestas. El inesperado éxito de Milei agrega un elemento de incertidumbre en el escenario político, sugiriendo un posible balotaje competitivo en las elecciones generales. En conjunto, las elecciones marcan un momento crucial en la dirección futura de la ciudad y el país.

## Problemas con el conjunto de datos 👓
En el gráfico de candidatos, nos enfocamos en los más votados, por ello quitamos algunas filas de la lista, en busca de ordenar la información y lograr que sea más limpia.

Por otro lado, en cuanto a los votos en blanco, decidimos sumar todos los votos de comunas en una sola fila, hicimos lo mismo con los partidos que menos votos tuvieron. 

Ocurrió que en algunos casos Flourish o Data Wrapper no juntaban los votos de Patricia o demás candidatos, por lo que tuvimos que realizar la sumatoria y completarlo en una única celda.

## Marcas y Canales 📊
En este contexto, la elección de gráficos de barra y mapas ofrece una combinación muy útil de herramientas visuales para representar la cantidad de votos de candidatos tanto a nivel general como por zona.

Los gráficos de barra buscan mostrar cantidades numéricas comparativas de manera intuitiva. El largo de las barras se utiliza para representar la cantidad de votos, lo que permite una fácil comparación entre candidatos y zonas. Además, la codificación de colores de cada barra según el partido político refuerza la asociación entre el candidato y su afiliación política, facilitando la identificación visual.

Por otro lado, la inclusión de mapas proporciona una perspectiva geoespacial crucial para entender la distribución de votos por zona. La codificación de colores en los mapas, utilizando los tonos representativos de cada partido, ofrece una representación efectiva de la preferencia de los votantes en diferentes áreas geográficas. Esto permite identificar tendencias regionales y contrastes en la distribución de votos, aportando un nivel adicional de comprensión y contexto a la visualización.

Gráfico de Barras:

Marca: Las barras en sí mismas son la marca. Representan la cantidad de votos para cada candidato.
Canal: La longitud de las barras codifica la cantidad de votos. Es el canal utilizado para cuantificar los datos.

Mapa:

Marca: Los elementos visuales en el mapa (como polígonos que representan áreas geográficas y puntos que indican ubicaciones específicas) son las marcas.
Canal:
Color: El color utilizado para rellenar los polígonos del mapa codifica la cantidad de votos para cada candidato en cada zona geográfica. Es el canal utilizado para cuantificar los datos.
Ubicación espacial: La ubicación de las áreas geográficas en el mapa (las distintas comunas de la Ciudad de Buenos Aires) es un canal importante para contextualizar la información.

## Decisiones de Diseño 🎨
Utilizamos una estética de collage para transmitir la complejidad y diversidad del proceso electoral en la Ciudad de Buenos Aires. 

El uso de colores representativos de los partidos involucrados desempeña un papel crucial en la identificación y comprensión instantánea de la información. Al asociar cada partido político con un color específico, se facilita la navegación visual a través de la visualización y se agiliza el reconocimiento de las tendencias y preferencias de los votantes.

La inclusión de recursos ilustrativos de las diferentes zonas de la capital federal añade un elemento de contexto geográfico esencial. Al presentar visualmente las distintas áreas geográficas, se proporciona a los espectadores una comprensión más profunda de la distribución de votos y de las tendencias regionales. Esto fomenta una conexión emocional con la información, ya que los espectadores pueden relacionar visualmente los resultados con los lugares que conocen o reconocen. 

La introducción de objetos identificativos de los candidatos añade un nivel adicional de familiaridad. Al incluir elementos visuales que representan a cada candidato, se crea una asociación visual inmediata entre la imagen, el nombre y sus propuestas (Milei y las armas, Bullrich y Rosario) facilitando la identificación.

Además, la disposición y organización de los elementos visuales en el dataviz se ha optimizado para asegurar que la información sea fácil de interpretar y que los espectadores puedan extraer conclusiones de manera efectiva.

# Licencia 📜

Este proyecto está bajo la Licencia [MIT](LICENSE).
