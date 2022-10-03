export default function Footer() {
    return (
        <>
            <div className="bg-white w-full p-8">
                <div className="grid grid-rows-1 gap-8 md:grid-cols-10 xl:gap-8 xl:grid-cols-12 left-auto right-auto">
                    <div className="md:col-span-4 xl:col-span-2">
                        <h2 className="font-bold mb-6 uppercase">Menu</h2>
                        <nav className="flex flex-col gap-4">
                            <a href="#" className="hover:underline">
                                Inicio
                            </a>
                            <a href="#" className="hover:underline">
                                Nosotros
                            </a>
                            <a href="#" className="hover:underline">
                                Servicios
                            </a>
                            <a href="#" className="hover:underline">
                                Blog
                            </a>
                            <a href="#" className="hover:underline">
                                Contacto
                            </a>
                        </nav>
                    </div>
                    <div className="md:col-span-4 xl:col-span-3">
                        <h2 className="font-bold mb-6 uppercase">Redes sociales</h2>
                        <nav>
                            <a
                                href="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000&t=st=1660333883~exp=1660334483~hmac=70d21d08617e34074243187ec59df8fd4b564c084f33609c6db242de4e40fc01"
                                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                                target="_blank"
                            >

                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/jtdevsmx/"
                                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                                target="_blank"
                            >

                                instagram
                            </a>
                            <a
                                href="https://twitter.com/jtdevsmx"
                                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                                target="_blank"
                            >

                                twitter
                            </a>
                        </nav>
                    </div>
                    <div className="md:col-span-4 xl:col-span-3">
                        <h2 className="font-bold mb-6 uppercase">Contacto</h2>
                        <div className="flex flex-col gap-4">
                            <p className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                </svg>
                                Juigalpa, Chontales Nicaragua
                            </p>
                            <p className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                EwSolutions99@gmail.com
                            </p>
                            <p className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    />
                                </svg>
                                (+505) 8634-9918 
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="flex flex-col xl:flex-row gap-4 items-center justify-between">
                    <p className="text-gray-800 text-center md:text-left">
                        &copy; 2022
                        <span className="text-gray-900 font-bold">Ewischers Solutions.</span> Todos
                        los derechos reservados.
                    </p>
                    <div className="flex flex-col md:flex-row items-center gap-2">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Terminos y condiciones
                        </a>
                        <span className="hidden md:flex">|</span>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-gray-900 transition-colors"
                        >
                            Política de privacidad
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
