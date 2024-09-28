const title = "Graphicspress";
const email = "graphicspress28@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    "¡Hola! Estoy interesado en conocer más sobre los servicios de " + title + " y me gustaría obtener más información. ¡Gracias!"
);
const numeroWhatsApp = "+573105516292";

const textos = {
    index: {
        title: title,
    },
    homeContent: {
        title: title,
    },
    about: {
        description1: "En Graphicspress, nos dedicamos a innovar en creatividad, ofreciendo servicios de papelería, impresión y fotocopiadora para satisfacer todas tus necesidades. Nuestro compromiso es brindarte la mejor calidad en cada proyecto.",
        description2: "Contamos con un equipo apasionado y especializado que trabaja para hacer realidad tus ideas, asegurando que cada detalle sea perfecto. Ven y descubre cómo podemos ayudarte a destacar con nuestros servicios personalizados."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Innovando creatividad.",
            p2: ""
        },
        address: "", // Información no proporcionada
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61565759785634&mibextid=ZbWKwL",
        instagram: "www.instagram.com", // Instagram no proporcionado
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};

export default textos;
