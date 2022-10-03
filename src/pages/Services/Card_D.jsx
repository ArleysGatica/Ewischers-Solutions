
const infoDev = [
    {
        title: 'Identidad de la marca',
        description: 'La capacidad esencial para combinar empatía, creatividad y racionalidad para satisfacer las necesidades de los usuarios y el éxito empresarial.',
        items: {
            1: 'Visual branding',
            2: 'Brand strategy',
            3: 'Identity development',
            4: 'Digital and print collateral',
            5: 'Brand guidelines',
            6: 'Mockup design',
        },
    },
    {
        title: 'Diseño visual',
        description: 'Obtenga su trabajo personalizado y excepcional de diseño de interfaz de usuario y UX para la interfaz de sitio web y aplicación móvil, ilustraciones, gráficos en movimiento, todo para sus necesidades.',
        items: {
            1: 'Design systems',
            2: 'Responsive website',
            3: 'Digital products',
            4: 'Motion & interaction',
            5: 'Illustration',
            6: '3D design',
            7: 'Graphics design',

        }
    },
    {
        title: 'Development',
        description: 'Nuestros expertos desarrolladores finales del Frente - están listos para implementar la estética de los diseños en códigos que adoptan el último marco y tecnología.',
        items: {
            1: 'Front-end development',
            2: 'CMS integrations',
            3: 'SEO friendly',
            4: 'Custom codes',
            5: 'Web maintenance',
            6: 'Quality assurance',
        }
    },
]

const DevSkills = () => {
    return (
        <>
            <div className="grid grid-cols-3 container justify-items-center bg-slate-50 w-[100%]">
                {
                    infoDev.map(({ title, description, items }) => (
                        <div className="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                            <svg className="mb-2 w-10 h-10 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" ></path><path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z"></path></svg>
                            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white justify-center flex">{title}</h5>
                            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">{description}</p>
                            <ul className="flex flex-col">
                                <li>
                                    {
                                        items && Object.keys(items).map((item) => (
                                            <p key={item} className="flex justify-center font-extrabold text-white">{items[item]}
                                            </p>
                                        ))
                                    }
                                </li>
                            </ul>
                        </div>
                    ))
                }
            </div>

        </>
    )
}

export default DevSkills;