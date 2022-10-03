import App from '../../App';
import Front from '../../assets/Front.jpg';

const Data = () => {
    const Text = {
        title: 'Somos una agencia de desarrolladores',
        subtitle: 'Podemos proporcionarle una serie de servicios de desarrollo de software, como desarrollo web, desarrollo de aplicaciones móviles, diseño de productos o mantenimiento y soporte de software. Contáctenos y conozca mejor nuestros servicios de desarrollo de software.'
    }

    const Sdata = [
        {
            id: 1,
            title: 'Servicio de desarrollo de software web',
            description: ' ¡Usar las tecnologías más nuevas tanto en el back-end como en el front-end nos permite crear soluciones escalables, en tiempo real y eficientes que definitivamente llevarán su negocio al siguiente nivel!',
            image: Front
        },
        {
            id: 2,
            title: 'Servicio de desarrollo de software móvil',
            description: 'Desarrollo de aplicaciones móviles para empresas y personas',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 3,
            title: 'Diseño de productos',
            description: 'Diseño de productos para empresas y personas',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        },
        {
            id: 4,
            title: 'Mantenimiento de software',
            description: 'Mantenimiento de software para empresas y personas',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
        }
    ]
    return (
        <>
        <App Sdata={Sdata} Text={Text} />
        </>
    )
}
export default Data;