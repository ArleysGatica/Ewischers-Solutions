import Card from "./Card_T";
import HomeTree from "../assets/HomeTree.png";

const Home = () => {
    return (
        <>
            {/* Frase */}
            <main className="bg-gray-800 ">

                <div className="justify-center text-center">
                    <h1 className="text-3xl font-bold text-white">
                        Ewischers Solutions
                    </h1>
                    <p className="text-gray-500 ">
                        Donde los líderes empresariales encuentran software
                    </p>
                </div>
            </main>
            <section className="bg-gray-800">
                <div className="flex flex-col items-center justify-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                        <h1 className="text-3xl lg:text-6xl xl:text-6xl font-bold text-white ml-2 ">
                            Creamos el futuro de tu empresa
                            <br />
                            <strong className="text-indigo-500">Digital con talentos y ideas</strong>
                            <br />
                            Extraordinarios para que puedas crecer !! </h1>
                        <img className="w-[80%] h-[90%] ml-4" src={HomeTree} alt=""/>
                    </div>
                </div>
            </section>

            {/* Eslogan */}
            <div className="bg-white max-w-4xl mx-auto py-4 px-6 rounded-lg shadow-xl">
                <div className="flex flex-col gap-2 mb-4">
                    <p className="text-gray-600 lg:text-2xl xl:text-2xl font-bold">
                        En el área de Tecnologia, Ewischers es una de las mayores empresas LatinoAmericanas en desarrollo y de mayor en competitividad. Actualmente cuenta con un equipo multidisciplinar de más de 200 personas desarrollando proyectos innovadores. Trabaja con las empresas más importantes.
                    </p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://img.freepik.com/foto-gratis/retrato-hermoso-mujer-joven-posicion-pared-gris_231208-10760.jpg?w=2000&t=st=1660333883~exp=1660334483~hmac=70d21d08617e34074243187ec59df8fd4b564c084f33609c6db242de4e40fc01"
                            className="rounded-full w-[40px] h-[40px] object-cover"
                            alt="Yared Jacquez Trillo"
                        />
                        <div>
                            <span>Yared Jacquez Trillo</span>
                        </div>
                    </div>
                </div>
            </div>
            < Card /> 
            {/* opinando */}
            <div className="bg-gray-900 ">
                <div className="relative flex mt-2">
                    <div className="hidden w-3/6 min-h-screen bg-gray-800 lg:block"></div>
                    <div className="container flex flex-col justify-center w-auto min-h-screen px-4 md:px-14 mx-auto lg:absolute lg:inset-x-8">
                        <h1 className="text-3xl font-semibold capitalize lg:text-4xl xl:text-5xl text-white">
                            Lo que los <span className="text-indigo-500">clientes</span>{" "}
                            <br />
                            estan opinando
                        </h1>
                        <div className="my-10 lg:mt-20 lg:flex lg:items-center">
                            <img
                                className="object-cover object-center w-full lg:w-[32rem] rounded-xl h-96 drop-shadow-2xl"
                                src="https://img.freepik.com/foto-gratis/toma-interior-hombre-feliz-estudiante-cabello-rizado-vestido-casualmente-sentado-cafeteria-trabajando-tecnologias-modernas-mientras-estudia-mirando-sonrisa-cuaderno-recibiendo-mensaje-amigo_273609-7468.jpg"
                            />
                            <div className="mt-8 lg:px-10 lg:mt-0">
                                <h1 className="text-2xl font-semibold text-white lg:w-72">
                                    Lorem ipsum dolor sit amet
                                </h1>
                                <p className="max-w-lg mt-6 text-gray-400">
                                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Tempore quibusdam ducimus libero ad tempora doloribus
                                    expedita laborum saepe voluptas perferendis delectus
                                    assumenda rerum, culpa aperiam dolorum, obcaecati corrupti
                                    aspernatur..."
                                </p>
                                <h3 className="mt-6 text-lg font-medium text-indigo-500">
                                    Jorge Luis Trejo
                                </h3>
                                <p className="text-gray-300">
                                    <span className="uppercase font-bold">Seo</span> en{" "}
                                    <span className="uppercase font-bold">Grupo Start</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Home;