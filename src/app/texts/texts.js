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
        description1: "Graphicspress es tu socio ideal para todas tus necesidades de papelería, impresión y fotocopiado. Desde el año de su fundación, hemos estado comprometidos con la innovación y la creatividad en cada proyecto que emprendemos.\n" +
            "Nos especializamos en ofrecer servicios de impresión de alta calidad, fotocopiado eficiente y una amplia gama de productos de papeleria. Nuestro equipo trabaja con pasión para asegurar que cada cliente reciba soluciones personalizadas y de primera clase.\n" +
            "En Graphicspress, nuestro objetivo es hacer que tus ideas cobren vida con la mejor tecnología y un servicio excepcional. Ya sea para tus necesidades empresariales o personales, estamos aquí para ayudarte a lograr la perfección en cada detalle.\n" +
            "Descubre cómo podemos transformar tus conceptos en realidad con innovación y creatividad. ¡En Graphicspress, hacemos que tu visión se imprima en cada página!"
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
