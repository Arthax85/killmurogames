body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #1a1a1a, #000000);
    color: #ffffff;
}

h1, h2, h3 {
    font-family: 'Orbitron', sans-serif;
    color: #007BFF;
    text-shadow: 0 0 10px #007BFF, 0 0 20px #007BFF;
}

a {
    text-decoration: none;
    color: #007BFF;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

a:hover {
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
}

header {
    background-color: rgba(0, 0, 0, 0.8);
    color: #ffffff;
    padding: 20px;
    text-align: center;
}

header h1 {
    margin: 0;
    font-size: 3em;
    font-family: 'Orbitron', sans-serif;
    text-shadow: 0 0 10px #007BFF, 0 0 20px #007BFF;
}

nav {
    margin: 10px 0;
}

nav .category {
    color: #007BFF;
    text-decoration: none;
    margin: 0 15px;
    font-size: 1.2em;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

nav .category:hover {
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
}

.search-container {
    margin-top: 10px;
    display: flex;
    justify-content: center;
}

#search {
    width: 60%;
    padding: 10px;
    background-color: rgba(51, 51, 51, 0.8);
    border: 1px solid #444;
    color: #ffffff;
    border-radius: 5px;
    margin-right: 10px;
}

.search-container button {
    padding: 10px;
    background-color: #007BFF;
    border: none;
    color: #ffffff;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.search-container button:hover {
    background-color: #00ff88;
    box-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
}

main {
    padding: 20px;
}

.product-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
}

.product-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
}

.product {
    background-color: rgba(26, 26, 26, 0.8);
    border: 2px solid #007BFF;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    height: 150px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #007BFF, 0 0 30px #007BFF;
}

/* Estilo específico para el cuadro de World of Warcraft */
.product-wow {
    background-image: url('wowidle.png');
    background-size: cover;
    background-position: center;
}

/* Estilo específico para el cuadro de El enigma de Aceps */
.product-aceps {
    background-image: url('enigma.png');
    background-size: cover;
    background-position: center;
}

/* Estilo específico para el cuadro de Las Crónicas de Eldoria */
.product-cronicas {
    background-image: url('cronicas.png');
    background-size: cover;
    background-position: center;
}

/* Fondo oscuro semi-transparente para mejorar la legibilidad */
.product-wow::before,
.product-aceps::before,
.product-cronicas::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

/* Asegura que el contenido esté por encima del fondo */
.product-wow h2,
.product-aceps h2,
.product-cronicas h2 {
    position: relative;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px 10px;
    border-radius: 5px;
    display: inline-block;
    margin: 0;
}

.product-info {
    text-align: center;
    margin-top: 10px;
}

.product-info p {
    margin: 5px 0;
    font-size: 1.2em;
    color: #007BFF;
}

.product-info a {
    color: #007BFF;
    text-decoration: none;
    transition: color 0.3s ease;
}

.product-info a:hover {
    color: #00ff88;
}

/* Sección de Noticias y Actualizaciones */
.news-section {
    margin-top: 40px;
    padding: 20px;
    background-color: rgba(26, 26, 26, 0.8);
    border: 2px solid #007BFF;
    border-radius: 10px;
}

.news-container {
    display: flex;
    gap: 20px; /* Espacio entre las columnas */
}

.news-column, .updates-column {
    flex: 1; /* Cada columna ocupa el mismo espacio */
    display: flex;
    flex-direction: column; /* Las publicaciones se apilan verticalmente */
}

.news-column h3, .updates-column h3 {
    color: #00ff88;
    font-size: 1.5em;
    margin-bottom: 15px;
    text-align: center; /* Centrar el título de cada columna */
}

.news-item {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #007BFF;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    margin-bottom: 20px; /* Espacio entre noticias */
}

.news-item:hover {
    transform: scale(1.02);
    box-shadow: 0 0 10px #007BFF, 0 0 20px #007BFF;
}

.news-item h3 {
    margin: 0 0 10px;
    font-size: 1.3em;
    color: #00ff88;
}

.news-date {
    color: #666;
    font-size: 0.9em;
    margin-bottom: 10px;
}

.news-link {
    color: #007BFF;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.news-link:hover {
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
}


/* Estilos generales para la página "Sobre mí" */
.about-me {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(26, 26, 26, 0.8);
    border: 2px solid #007BFF;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.about-me h2 {
    font-size: 2em;
    color: #007BFF;
    text-align: center;
    margin-bottom: 20px;
}

.about-me h3 {
    font-size: 1.5em;
    color: #00ff88;
    margin-top: 20px;
    margin-bottom: 10px;
}

.about-me p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #ffffff;
    margin-bottom: 15px;
}

.about-me strong {
    color: #00ff88;
}

/* Estilos generales para la página de Términos y Condiciones */
.terms-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(26, 26, 26, 0.8);
    border: 2px solid #007BFF;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.terms-section h2 {
    font-size: 2em;
    color: #007BFF;
    text-align: center;
    margin-bottom: 20px;
}

.terms-section h3 {
    font-size: 1.5em;
    color: #00ff88;
    margin-top: 20px;
    margin-bottom: 10px;
}

.terms-section p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #ffffff;
    margin-bottom: 15px;
}

.terms-section a {
    color: #007BFF;
    text-decoration: none;
    transition: color 0.3s ease;
}

.terms-section a:hover {
    color: #00ff88;
}

/* Estilos generales para la página de Política de Privacidad */
.privacy-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(26, 26, 26, 0.8);
    border: 2px solid #007BFF;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.privacy-section h2 {
    font-size: 2em;
    color: #007BFF;
    text-align: center;
    margin-bottom: 20px;
}

.privacy-section h3 {
    font-size: 1.5em;
    color: #00ff88;
    margin-top: 20px;
    margin-bottom: 10px;
}

.privacy-section p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #ffffff;
    margin-bottom: 15px;
}

.privacy-section ul {
    margin-left: 20px;
    margin-bottom: 15px;
}

.privacy-section ul li {
    font-size: 1.1em;
    color: #ffffff;
    margin-bottom: 5px;
}

.privacy-section a {
    color: #007BFF;
    text-decoration: none;
    transition: color 0.3s ease;
}

.privacy-section a:hover {
    color: #00ff88;
}

/* Estilos generales para la página de FAQ */
.faq-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(26, 26, 26, 0.8);
    border: 2px solid #007BFF;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.faq-section h2 {
    font-size: 2em;
    color: #007BFF;
    text-align: center;
    margin-bottom: 20px;
}

.faq-section h3 {
    font-size: 1.5em;
    color: #00ff88;
    margin-top: 20px;
    margin-bottom: 10px;
}

.faq-section p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #ffffff;
    margin-bottom: 15px;
}

.faq-section a {
    color: #007BFF;
    text-decoration: none;
    transition: color 0.3s ease;
}

.faq-section a:hover {
    color: #00ff88;
}

/* Estilos generales para la página de Juegos */
.games-section {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: rgba(26, 26, 26, 0.8);
    border: 2px solid #007BFF;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.games-section h2 {
    font-size: 2em;
    color: #007BFF;
    text-align: center;
    margin-bottom: 20px;
}

.game {
    position: relative;
    margin-bottom: 30px;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    border: 1px solid #007BFF;
    border-radius: 10px;
}

.game-image {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 100px;
    height: auto;
    border-radius: 10px;
    border: 2px solid #007BFF;
}

.game h3 {
    font-size: 1.5em;
    color: #00ff88;
    margin-bottom: 10px;
}

.game p {
    font-size: 1.1em;
    line-height: 1.6;
    color: #ffffff;
    margin-bottom: 10px;
}

.download-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #007BFF;
    color: #ffffff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
}

.download-button:hover {
    background-color: #00ff88;
    box-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
}

/* Estilos para la lista de canales */
.channel-list {
    list-style-type: none;
    padding: 0;
}

.channel-list li {
    margin: 10px 0;
}

.channel-list a {
    color: #007BFF;
    text-decoration: none;
    font-size: 1.1em;
    transition: color 0.3s ease;
}

.channel-list a:hover {
    color: #00ff88;
}

.channel-list i {
    margin-right: 10px;
    color: #007BFF;
}

footer {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 20px;
    text-align: center;
    border-top: 1px solid #444;
    margin-top: 40px;
}


.footer-links {
    margin-bottom: 10px;
}

.footer-links a {
    color: #007BFF;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.footer-links a:hover {
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
}

.footer-info {
    color: #888;
    font-size: 0.9em;
    margin-top: 10px;
}

.footer-info a {
    color: #007BFF;
    text-decoration: none;
    transition: color 0.3s ease, text-shadow 0.3s ease;
}

.footer-info a:hover {
    color: #00ff88;
    text-shadow: 0 0 10px #00ff88, 0 0 20px #00ff88;
}