import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importa el enrutador desde el archivo router

// Importa las dependencias de Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faXTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Importa el icono de X (anteriormente Twitter)

// Importa los estilos de Tailwind CSS
import './assets/tailwind.css';

// Añade los iconos a la librería
library.add(faXTwitter, faFacebook, faInstagram); // Añade el icono de X (anteriormente Twitter) a la librería

const app = createApp(App);

// Registra el componente FontAwesomeIcon globalmente
app.component('font-awesome-icon', FontAwesomeIcon);

// Usa el router en la aplicación
app.use(router);

// Monta la aplicación
app.mount('#app');


