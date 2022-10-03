const Card = () => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-4">
                <div className="bg-gray-900 hover:bg-indigo-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer">
                    <div className="flex justify-center py-8">
                        <img
                            src="https://img.freepik.com/foto-gratis/programador-sonriente-tiro-medio-sosteniendo-telefono_23-2149101155.jpg?w=2000&t=st=1660331259~exp=1660331859~hmac=4a6b4885e8141e344e237674190db60aa4431782337bc5df8a22e9d895ebdd6f"
                            alt="JT Devs"
                            lazyload="true"
                            className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4">
                        <h3 className="font-semibold text-xl text-indigo-500 group-hover:text-white transition-all">
                            Jorge Luis Trejo
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-300">
                            Director de diseño
                        </p>
                   
                    </div>
                </div>
                <div className="bg-gray-900 hover:bbg-gray-900g-indigo-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer">
                    <div className="flex justify-center py-8">
                        <img
                            src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=1380&t=st=1660703188~exp=1660703788~hmac=27d047a887e146bd9657d48286e020a4a4b666a042f8e0efd55ad0c448e00106"
                            alt="JT Devs"
                            lazyload="true"
                            className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4">
                        <h3 className="font-semibold text-xl text-indigo-500 group-hover:text-white transition-all">
                            Luisa Yared Jacquez
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-300">
                            Diseñadora UX / UI
                        </p>
                     
                    </div>
                </div>
                <div className="bg-gray-900 hover:bg-indigo-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer">
                    <div className="flex justify-center py-8">
                        <img
                            src="https://img.freepik.com/foto-gratis/retrato-mujer-joven-ramo-girasoles_169016-21587.jpg?w=1380&t=st=1660708365~exp=1660708965~hmac=2ec6707470a72fc810a232735a56f2c1f43daa46ac4393956857f3008b2d28dd"
                            alt="JT Devs"
                            lazyload="true"
                            className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4">
                        <h3 className="font-semibold text-xl text-indigo-500 group-hover:text-white transition-all">
                            Pamela Anderson
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-300">
                            Desarrolladora Frontend
                        </p>
                     
                    </div>
                </div>
                <div className="bg-gray-900 hover:bg-indigo-600 group rounded-lg shadow hover:shadow-lg hover:shadow-cyan-700 transition-all hover:cursor-pointer">
                    <div className="flex justify-center py-8">
                        <img
                            src="https://img.freepik.com/foto-gratis/feliz-chico-amable-gafas-saludando-hola_74855-3484.jpg?w=1380&t=st=1660708424~exp=1660709024~hmac=74ca1cab6ce765dfa11c1901e1214ed5e55f614d4c5f14f8477ed54c8d4f7d57"
                            alt="JT Devs"
                            lazyload="true"
                            className="rounded-full w-32 h-32 object-cover ring-4 ring-gray-300"
                        />
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4">
                        <h3 className="font-semibold text-xl text-indigo-500 group-hover:text-white transition-all">
                            Will Smith
                        </h3>
                        <p className="text-gray-600 group-hover:text-gray-300">
                            Desarrollador Backend
                        </p>
                        
                    </div>
                </div>
            </div>
        </>
    );

}
export default Card;