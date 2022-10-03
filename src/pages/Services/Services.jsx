import Front from "../../assets/Front.jpg";
import DevSkills from "./Card_D";
import { Carousel } from "./carrito";
import Header from "../../components/Navbar";

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
            <Header />
            <main classNameName="bg-slate-900 bg-red-400 ">
                <div classNameName="">
                    <h1 classNameName="font-bold mb-4 lg:text-2xl xl:text-2xl uppercase justify-center items-center text-white">
                        Nuestros servicios
                    </h1>
                    <h1 classNameName="font-bold  text-indigo-500 lg:text-2xl xl:text-2xl uppercase justify-center items-center">
                        Servicios de desarrollo de software y más
                    </h1>
                </div>

                <div className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-12 w-full bg-slate-500">
                <div classNameName="">
                    {Sdata.map(item => (
                        <div className="bg-red-500 max-w-2xl mx-auto py-4 px-6 rounded-lg shadow-xl gap-16">
                            <div className="flex items-center justify-between mb-4">
                                <span className="bg-indigo-500 text-white py-2 px-4 text-xl rounded flex font-bold text-center">
                                    {item.title}
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 mb-4">
                                <p className="text-gray-600">
                                    {item.description}
                                </p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex items-center gap-4 ">
                                    <img src={item.image} className="rounded-md" alt="" />
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                    </div>
            </main>

        </>
    );
};

export default Services;
