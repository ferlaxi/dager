import {
  faDiscord,
  faGithub,
  faInstagram,
  faTwitch,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dager from "./assets/channels4_profile.jpg";
import cat from "./assets/cat.jpg";
import si from "./assets/si.jpg";
import { motion } from "framer-motion";
import "moment/locale/es";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import axe from "./assets/axe.svg";
import home from "./assets/home.svg";
import cucumber from "./assets/cucumber.png";
import audio from "./assets/audio2.mp3"

const Search = () => {
  const [data, setData] = useState([]);
  const [randomAdvice, setRandomAdvice] = useState(null);
  const [lastElement, setLastElement] = useState(null);
  const [isTransformed, setIsTransformed] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [idioma, setIdioma] = useState(false);
  const [audioContext, setAudioContext] = useState(null);

  const audioRef = useRef(null);

  useEffect(() => {
    // Limpiar el AudioContext cuando el componente se desmonte
    return () => {
      if (audioContext) {
        audioContext.close(); // Cerrar el contexto cuando el componente se desmonte
      }
    };
  }, [audioContext]);

  const handleUserGesture = () => {
    if (!audioContext) {
      const newAudioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      setAudioContext(newAudioContext);
    } else {
      // Si el AudioContext ya existe, simplemente lo reanudamos
      audioContext.resume().catch((error) => {
        console.error("Error al reanudar el AudioContext", error);
      });
    }
  };

  const playAudioWithDelayAndFadeIn = () => {
    const audio = audioRef.current;

    if (audio) {
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play();
        }
      }, 1000);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let url = "";
      if (idioma == false) {
        url = "/advices.json";
      } else {
        url = "/advices2.json";
      }
      try {
        const response = await axios(url);
        setData(response.data);
      } catch (error) {
        console.error("Hubo un error al obtener los datos:", error);
      }
    };

    fetchData();
  }, [idioma]);

  const getRandomAdvice = () => {
    let randomIndex;
    let newElement;

    do {
      randomIndex = Math.floor(Math.random() * data.length);
      newElement = data[randomIndex];
    } while (newElement === lastElement);

    setRandomAdvice(newElement);
    setLastElement(newElement);
  };

  return (
    <div className="w-[65%] h-[65%]">
      {/* head */}
      <div className="flex">
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "tween", duration: "1" }}
          className={`font-bold text-white ${
            isTransformed ? "hidden" : "flex"
          }`}
        >
          <div className="glitch-wrapper">
            <div
              className="glitch text-l-dev-semiwhite"
              data-glitch="Dot Dager"
            >
              Dot Dager
            </div>
          </div>
        </motion.div>
      </div>

      {/* main-section */}
      <motion.div
        animate={{
          scale: isTransformed ? 1.3 : 1, // Escala
          y: isTransformed ? -50 : 0,
          width: isTransformed ? "40%" : "100%",
          translateX: isTransformed ? "70%" : "0",
        }}
        transition={{
          duration: 1.5, // Duración total de la animación en segundos
          ease: "easeInOut", // Suavidad (puedes probar "linear", "easeIn", etc.)
        }}
        className={`flex-col md:w-full md:h-full h-auto bg-l-dev-dark1 mt-3 rounded-2xl shadow-lg  scotch-container relative ${
          isTransformed ? "" : ""
        }`}
      >
        {isTransformed ? (
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            className="flex justify-center items-center w-16 h-16 bg-l-dev-semiblue rounded-r-xl absolute -right-[64px] top-5 cursor-pointer shadow-xl group border-2 border-l-transparent border-white/50 hover:bg-l-dev-gray transition-all duration-500"
          >
            <img
              src={home}
              alt="home"
              className="h-10 w-10 group-hover:scale-125 transition-all duration-500"
            />
          </button>
        ) : (
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            className="flex justify-center items-center w-16 h-16 bg-l-dev-semiblue rounded-r-xl absolute -right-[64px] top-5 cursor-pointer shadow-xl group border-2 border-l-transparent border-white/50 hover:bg-l-dev-gray transition-all duration-500"
          >
            <img
              src={axe}
              alt="axe"
              className="h-10 w-10 group-hover:scale-125 transition-all duration-500"
            />
          </button>
        )}

        {isTransformed ? (
          <button
            onClick={() => setIsTransformed(!isTransformed)}
            className="justify-center items-center w-16 h-16 bg-l-dev-semiblue rounded-r-xl absolute -right-[64px] top-24 cursor-pointer shadow-xl group border-2 border-l-transparent border-white/50 hidden "
          >
            <img
              src={home}
              alt="home"
              className="h-10 w-10 group-hover:scale-125 transition-all duration-500"
            />
          </button>
        ) : (
          <button
            onClick={() => setIdioma(!idioma)}
            className="flex justify-center items-center w-16 h-16 bg-l-dev-semiblue rounded-r-xl absolute -right-[64px] top-24 cursor-pointer shadow-xl group border-2 border-l-transparent border-white/50 group hover:bg-l-dev-gray transition-all duration-500"
          >
            <div className="font-bold ">
              {idioma == false ? (
                <>
                  <span className="text-white">ES</span>/<span>EN</span>
                </>
              ) : (
                <>
                  <span>ES</span>/<span className="text-white">EN</span>
                </>
              )}
            </div>
          </button>
        )}

        <motion.iframe
          initial={{ opacity: 0, y: 20 }} // Estado inicial
          animate={{ opacity: 1, y: 0 }} // Estado final
          transition={{ duration: 1, delay: 3 }} // Duración y retraso de 2 segundos
          title="Lumber Jack Game"
          src="https://tbot.xyz/lumber/"
          className={`w-full h-full rounded-xl ${
            isTransformed ? "flex" : "hidden"
          }`}
        ></motion.iframe>
        <div
          className={`pt-10 md:px-12 md:gap-x-14 md:w-full md:flex-row flex-col px-5 md:h-fit items-center gap-2 ${
            isTransformed ? "hidden" : "flex"
          }`}
        >
          <img
            className="border-[5px] border-white rounded-full md:w-36 md:h-36 h-20 w-20"
            src={dager}
            alt="profile_pic"
          ></img>

          <div className="md:flex md:flex-col gap-y-3">
            <div className="font-bold md:text-[26px] text-l-dev-semiwhite text-[20px]">
              Mariano Villa
            </div>
            {idioma == false ? (
              <div className="text-l-dev-semiwhite">
                Desarrollador Senior Full-stack dotado con grandes atributos y
                capacidad de gestionar todo con ese GRAN y GRUESO talento, ah y
                también buen desarrollador. Creador de contenido, le fascina la
                filosofía, los michis, un buen pepino embadurnado y las
                empanadas de doña leticia.
              </div>
            ) : (
              <div className="text-l-dev-semiwhite">
                Senior Full-Stack Developer gifted with remarkable attributes
                and the ability to handle everything with that BIG and THICK
                talent—oh, and also a skilled developer. Content creator,
                passionate about philosophy, cats, a good cucumber slathered in
                something delicious, and Doña Leticia’s empanadas.
              </div>
            )}
          </div>
        </div>

        <div className={`${isTransformed ? "hidden" : "flex"}`}>
          <div className="w-[22%] h-full md:flex md:flex-col pt-5 items-center gap-y-4">
            <div className="gap-y-6 flex flex-col">
              <a
                href="http://instagram.com/dager.32"
                target="_blank"
                className="flex items-center gap-2 group w-fit"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="w-5 h-5 group-hover:text-red-300 transition-all duration-300 text-white"
                />
                <div className="text-blue-500 group-hover:text-red-300 transition-all duration-300 underline">
                  @dager.32
                </div>
              </a>

              <a
                href="https://youtube.com/@DotDager"
                target="_blank"
                className="flex items-center gap-2 group w-fit"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="w-5 h-5 group-hover:text-red-500 transition-all duration-300 text-white"
                />
                <div className="text-blue-500 group-hover:text-red-500 transition-all duration-300 underline">
                  @DotDager
                </div>
              </a>

              <a
                href="http://github.com/MarianoVilla"
                target="_blank"
                className="flex items-center gap-2 gap group w-fit"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="w-5 h-5 group-hover:text-gray-500 transition-all duration-300 text-white"
                />
                <div className="text-blue-500 group-hover:text-gray-500 transition-all duration-300 underline">
                  @MarianoVilla
                </div>
              </a>

              <a
                href="http://twitch.tv/dagerxiv"
                target="_blank"
                className="flex items-center gap-2 group w-fit"
              >
                <FontAwesomeIcon
                  icon={faTwitch}
                  className="w-5 h-5 group-hover:text-violet-500 transition-all duration-300 text-white"
                />
                <div className="text-blue-500 group-hover:text-violet-500 transition-all duration-300 underline">
                  @dagerxiv
                </div>
              </a>
            </div>

            <div
              onClick={() => {
                setShowImage(true),
                  playAudioWithDelayAndFadeIn(),
                  handleUserGesture();
              }}
              className="w-44 h-44 bg-l-dev-dark rounded-xl mt-4 relative"
            >
              {/* Elemento de audio oculto */}
              <audio ref={audioRef}>
                <source src={audio} type="audio/mp3" />
              </audio>

              {showImage ? (
                <motion.p
                  initial={{ opacity: 0, scale: 0.8 }} // Estado inicial
                  animate={{ opacity: 1 }} // Estado final
                  transition={{
                    duration: 4, // Duración de la animación
                    ease: "easeInOut", // Suavidad
                    delay: 0.5, // Retraso antes de iniciar la animación
                  }}
                  className="absolute text-l-dev-semiwhite w-full text-center text-[15px] top-2"
                >
                  {idioma == false ? (
                    <p className="absolute text-l-dev-semiwhite w-full text-center text-[17px] top-2">
                      Que haces?
                    </p>
                  ) : (
                    <p className="absolute text-l-dev-semiwhite w-full text-center text-[17px] top-2">
                      WYD?
                    </p>
                  )}
                </motion.p>
              ) : (
                <>
                  {idioma == false ? (
                    <p className="absolute text-l-dev-semiwhite w-full text-center text-[14px] top-2">
                      Abajo no hay nada para hacer click.
                    </p>
                  ) : (
                    <p className="absolute text-l-dev-semiwhite w-full text-center text-[14px] top-2">
                      There's nothing to click on below.
                    </p>
                  )}
                </>
              )}

              {showImage && (
                <motion.img
                  src={cucumber}
                  alt="cucumber"
                  initial={{ opacity: 0, scale: 0.8 }} // Estado inicial
                  animate={{ opacity: 1 }} // Estado final
                  transition={{
                    duration: 4, // Duración de la animación
                    ease: "easeInOut", // Suavidad
                    delay: 0.5, // Retraso antes de iniciar la animación
                  }}
                  className="mt-4"
                />
              )}
            </div>
          </div>

          <div className="flex justify-between flex-col w-full px-7">
            <div className="flex justify-between w-full gap-x-7">
              <div className="flex p-5 gap-x-4 items-center md:w-[50%] md:h-48 h-auto md:flex flex-col bg-l-dev-dark rounded-xl mt-4 dark:bg-l-dev-dark">
                <img
                  src={cat}
                  alt="cat"
                  className="w-[35%] rounded-lg border-2"
                />
                <div className="text-white">
                  <p className="font-bold text-[18px]">Pussy Lover</p>
                  {idioma == false ? (
                    <p className="text-l-dev-gray text-[14px]">
                      Nada más gratificante que el amor de un amigo peludo.
                      Elogiado por mi gato con ratas en mi cama como gesto de
                      tal amor hacia mi persona.
                    </p>
                  ) : (
                    <p className="text-l-dev-gray text-[14px]">
                      Nothing is more gratifying than the love of a furry
                      friend. My cat shows their affection by leaving me gifts
                      of rats on my bed—a true gesture of love toward me.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex p-5 gap-x-4 items-center md:w-[50%] md:h-48 h-auto md:flex flex-col bg-l-dev-dark rounded-xl mt-4 dark:bg-l-dev-dark">
                <img
                  src={si}
                  alt="si"
                  className="w-[35%] rounded-lg border-2"
                />
                <div className="text-white">
                  {idioma == false ? (
                    <>
                      <p className="font-bold text-[18px]">
                        Campeón de Lumberjack
                      </p>
                      <p className="text-l-dev-gray text-[14px]">
                        Campeón del torneo mundial N°69 de Lumberjack en Oregon,
                        destacado de manera sobresaliente en el agarrado de tal
                        hacha firme y gruesa en mis manos.
                      </p>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-[18px]">
                        Lumberjack Champion
                      </p>
                      <p className="text-l-dev-gray text-[14px]">
                        Champion of the 69th Lumberjack World Tournament in
                        Oregon, standing out remarkably for my skill in gripping
                        that firm and thick axe in my hands.
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="md:flex flex-col w-full md:h-44 h-auto bg-l-dev-dark rounded-xl mt-4 dark:bg-l-dev-dark relative">
              <div className="flex flex-col justify-center gap-y-2 w-[44%] h-full px-5">
                {idioma == false ? (
                  <>
                    <p className="font-bold text-[18px] text-white">
                      Espacio de sabiduría
                    </p>
                    <p className="text-l-dev-gray text-[14px]">
                      Como gran entusiasta de la filosofía y de la analogía, en
                      el apartado derecho derramo mis conociminetos cual linyera
                      meando via pública.
                    </p>
                  </>
                ) : (
                  <>
                    <p className="font-bold text-[18px] text-white">
                      Space of Wisdom
                    </p>
                    <p className="text-l-dev-gray text-[14px]">
                      As a great enthusiast of philosophy and analogy, in the
                      right section, I spill my knowledge like a wanderer peeing
                      on the public road.
                    </p>
                  </>
                )}
              </div>

              <div className="flex items-center justify-between w-[55%] h-full pl-5 py-5">
                <div className="flex flex-col items-center justify-center px-5 gap-y-2 bg-l-dev-dark1 rounded-xl w-[85%] h-full">
                  {randomAdvice == null ? (
                    <>
                      {idioma == false ? (
                        <>
                          <p className="text-white font-bold text-[17px]">
                            Consejo #0
                          </p>
                          <p className="italic text-l-dev-semiwhite text-[15px] h-[20%] transition-all duration-500">
                            "Hay mas consejos"
                          </p>
                        </>
                      ) : (
                        <>
                          <p className="text-white font-bold text-[17px]">
                            Advice #0
                          </p>
                          <p className="italic text-l-dev-semiwhite text-[15px] h-[20%] transition-all duration-500">
                            "There is more advice"
                          </p>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      {idioma == false ? (
                        <p className="text-white font-bold text-[17px]">
                          Consejo #{randomAdvice.numero_consejo}
                        </p>
                      ) : (
                        <p className="text-white font-bold text-[17px]">
                          Advice #{randomAdvice.numero_consejo}
                        </p>
                      )}
                      <p className="italic text-l-dev-semiwhite text-[15px] h-[20%] transition-all duration-500">
                        "{randomAdvice.consejo}"
                      </p>
                    </>
                  )}
                </div>
                <div
                  onClick={getRandomAdvice}
                  className="w-14 h-14 flex justify-center items-center animate-spin rounded-full bg-AGA-green cursor-pointer btn_hover"
                >
                  <svg width="24" height="24" className="fill-gray-700">
                    <path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Search;
