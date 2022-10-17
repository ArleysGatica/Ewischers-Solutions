import Front from "../../assets/Front.jpg";
import DevSkills from "./Card_D";
import { Carousel } from "./carrito";
import Header from "../../components/Navbar";
import { useEffect , useState} from "react";

const Text = {
    title: "Somos una agencia de desarrolladores",
    subtitle:
        "Podemos proporcionarle una serie de servicios de desarrollo de software, como desarrollo web, desarrollo de aplicaciones móviles, diseño de productos o mantenimiento y soporte de software. Contáctenos y conozca mejor nuestros servicios de desarrollo de software.",
};

const Sdata = [
    {
        id: 1,
        title: "Servicio de desarrollo de software web",
        description:
            " ¡Usar las tecnologías más nuevas tanto en el back-end como en el front-end nos permite crear soluciones escalables, en tiempo real y eficientes que definitivamente llevarán su negocio al siguiente nivel!",
        image: Front,
    },
    {
        id: 2,
        title: "Servicio de desarrollo de software móvil",
        description:
            "Nos especializamos en hacer realidad las ideas de nuestros clientes. Nuestros brillantes equipos móviles se enorgullecen de enfrentar los desafíos más difíciles y darles vida en dispositivos Android e iOS.",
        image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 3,
        title: "Servicio de desarrollo de API backend",
        description:
            "Nuestro equipo tiene la experiencia para mejorar el diseño de API para sus necesidades de desarrollo. El diseño de nuestras APIs están enfocados a la funcionalidad, confiabilidad y usabilidad, buscando que los usuarios que las van a utilizar puedan disfrutar cuando las consumen.",
        image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
    {
        id: 4,
        title: "Servicio de implementación de DevOps",
        description:
            "El equipo de Ewischers solutión está preparado para trabajar con tecnologías propias y agnósticas para encontrar la solución a un problema tecnológico.",
        image:
            "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    },
];

const Services = () => {
    return (
        <>

        </>
    );
}
export default Services