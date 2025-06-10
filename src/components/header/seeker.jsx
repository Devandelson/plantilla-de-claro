import { motion } from 'framer-motion';

const floatWindowvariants = {
    hidden: {
        opacity: 0,
        y: -20, // Comienza un poco más arriba
        height: 0
    },
    visible: {
        opacity: 1,
        y: 0,
        height: 'auto',
        transition: {
            duration: 0.3,
        },
    },
    exit: {
        height: 0,
        opacity: 0
    },
};

// seeker (Buscador)
// -- elemets more wanted
let moreWanted = ['Planes Flota', 'Administración de flotas', 'Cobertura y tarifas Roaming',
    'Internet Fijo Negocios', 'Mi claro Empresas', 'Solicitar Servicios'
];

export default function FloatWindowHeader({functionFloatwindow}) {
    return (
        <motion.section className='floatWindowHeader'
            initial={{ height: 0, opacity: 0, y:-20 }}
            animate={{ height: 'auto', opacity: 1, y:0 }}
            exit={{  height: 0, opacity: 0 }}
        >
            <span className="btn_close">
                <i className="fa-solid fa-xmark ani1-icon" onClick={functionFloatwindow}></i>
            </span>

            <div className="subcontainerWindowHeader">
                <h3>Hola, busca aquí lo que necesitas</h3>
                <div className="seekerContainer">
                    <div className="seeker">
                        <input type="text" placeholder="Buscar" />
                        <i class="fa-solid fa-microphone"></i>
                    </div>
                    <button className="btn1 btn_search">Buscar</button>
                </div>

                <div className="containerMoreSearch">
                    <p>Contenidos más buscados:</p>
                    <ul className="more_search">
                        {moreWanted.map((value, index) => (
                            <li key={index}> {value} </li>
                        ))}
                    </ul>
                </div>
            </div>

            <span className="layer"></span>
        </motion.section>
    );
}