import { useState } from "react";
import { motion } from 'framer-motion';
import ImgHomePage1 from '../../assets/homepage1.jpg';
import ImgHomePage2 from '../../assets/laptop dashboard.jpg';
import ImgHomePage3 from '../../assets/phone.jpg';
import ImgHomePage4 from '../../assets/sala reunion.jpg';
import ImgHomePage5 from '../../assets/negocia gastronomia.jpg';
import ImgHomePage6 from '../../assets/arquitecta.jpg';

let dataHome = [ // data
    {
        title: <motion.h2>Facturación Electronica Claro Cloud</motion.h2>,
        text: <motion.p>Recibe y registra automáticamente los comprobantes electrónicos que generen otros emisores.</motion.p>,
        img: <motion.img src={ImgHomePage1} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    },
    {
        title: <motion.h2>SASE (Secure Access Service Edge)</motion.h2>,
        text: <motion.p>Seguridad basada en la nube que protege usuarios, aplicaciones y datos.</motion.p>,
        img: <motion.img src={ImgHomePage2} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    },
    {
        title: <motion.h2>Servicios Móviles</motion.h2>,
        text: <motion.p>Comunicación constante en todo momento y lugar.</motion.p>,
        img: <motion.img src={ImgHomePage3} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    },
    {
        title: <motion.h2>Gestión Negocios</motion.h2>,
        text: <motion.p>Maximiza tus operaciones diarias y optimiza tus procesos.</motion.p>,
        img: <motion.img src={ImgHomePage4} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    },
    {
        title: <motion.h2>Internet Fijo Negocios</motion.h2>,
        text: <motion.p>Vive la mejor experiencia de conectividad con nuestra Fibra Óptica.</motion.p>,
        img: <motion.img src={ImgHomePage3} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    },
    {
        title: <motion.h2>Claro cloud | Videovigilancia</motion.h2>,
        text: <motion.p>Seguridad avanzada que ofrece reconocimiento de placas y análisis de contenido de imágenes.</motion.p>,
        img: <motion.img src={ImgHomePage1} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />
    }
];

export let dataHome2 = [ // data
    {
        title: <motion.h2>Profesionales independientes</motion.h2>,
        text: <motion.p>Lleva tu negocio a otro nivel.</motion.p>,
        img: <motion.img src={ImgHomePage1} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />,
        buttonText: 'Ver soluciones'
    },
    {
        title: <motion.h2>Constructoras</motion.h2>,
        text: <motion.p>Ofrecemos asesoría para la instalación del cableado, garantizando mayor rentabilidad en sus proyectos inmobiliarios.</motion.p>,
        img: <motion.img src={ImgHomePage6} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />,
        buttonText: 'Ver más'
    },
    {
        title: <motion.h2>Restaurantes y Bares</motion.h2>,
        text: <motion.p>Brinda a tus clientes el mejor ambiente.</motion.p>,
        img: <motion.img src={ImgHomePage5} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />,
        buttonText: 'Ver soluciones'
    },
    {
        title: <motion.h2>Centros educativos</motion.h2>,
        text: <motion.p>Colaborando con la transformación educativa</motion.p>,
        img: <motion.img src={ImgHomePage1} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />,
        buttonText: 'Ver soluciones'
    },
    {
        title: <motion.h2>Comercio al detalle</motion.h2>,
        text: <motion.p>Soluciones a la medida para tu negocio</motion.p>,
        img: <motion.img src={ImgHomePage5} alt="fondo del servicio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        />,
        buttonText: 'Ver soluciones'
    }
];

let Elementsvariants = {
    hidden: {
        x: -80,
        filter: 'blur(10px)'
    },
    visible: {
        x: 0,
        filter: 'blur(0px)'
    },
    exit: {
        x: -80,
        filter: 'blur(10px)'
    }
};

function ButtonSlider({ classActive, moveData }) {
    return (
        <span className={classActive} onClick={moveData}></span>
    )
}

export function HomePage({propData = dataHome}) {
    const [indexData, setIndexData] = useState(0);
    const data = propData[indexData]; // No necesitas useState para esto


    function moveNextData() {
        setIndexData((prev) => {
            let numMaxElementsDataHome = propData.length - 1;
            return prev < numMaxElementsDataHome ? prev + 1 : prev;
        })
    }

    function moveBackData() {
        setIndexData((prev) => {
            return prev > 0 ? prev - 1 : prev;
        })
    }

    // Accurate (preciso)
    function moveDataIndexAccurate(index) {
        setIndexData(index);
    }

    return (
        <section className="homePage" key={indexData}>
            {data.img}

            <div className="containerArrows">
                <span className="arrowLeft" onClick={moveBackData}>
                    <i className="fa-solid fa-chevron-left"></i>
                </span>

                <span className="arrowRight" onClick={moveNextData}>
                    <i className="fa-solid fa-chevron-right"></i>
                </span>
            </div>

            <motion.div className="info"
                variants={Elementsvariants}
                initial='hidden'
                animate='visible'
                exit='exit'
            >
                {data.title}
                {data.text}

                <motion.button className="btn1 link">
                    <i className="fa-solid fa-arrow-pointer"></i>
                    {propData.buttonText ? propData.buttonText : 'Ver más'}
                </motion.button>
            </motion.div>

            <div className="containerButtonsSlider">
                {propData.map((value, index) => (
                    <ButtonSlider key={index}
                        classActive={index == indexData ? 'btn_active' : null}
                        moveData={() => { moveDataIndexAccurate(index) }} />
                ))}
            </div>
        </section>
    );
}