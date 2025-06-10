import { countrys, moreClaro } from './dataListHeader'; // -- data
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Variantes tal como las definiste
const listContainerVariants = {
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
            // when: "beforeChildren",   // Primero aparece el contenedor, luego los ítems
            staggerChildren: 0.1,     // Pequeño retraso entre cada <li>
            duration: 0.3,
        },
    },
    exit: {
        height: 0,
        opacity: 0,
        transition: {
            // when: "afterChildren",    // Espera a que terminen las animaciones de los hijos
            staggerChildren: 0.05,    // Retraso entre la salida de cada ítem
            staggerDirection: -1,     // Los <li> salen en orden inverso
            duration: 0.3,
        },
    },
};

const listItemVariants = {
    hidden: {
        opacity: 0,
        y: -10, // Cada ítem comienza ligeramente por encima
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 300, // Rigidez del muelle
            damping: 20,    // Controla cuánto rebota
            bounce: 0.4,    // Intensidad del rebote
            duration: 0.2,  // Duración base (el spring se encargará del resto)
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        height: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 25,
            bounce: 0,     // Sin rebote en la salida
        },
    },
};

function ListContainer({ children }) {
    return (
        <motion.ul className={`info_container`}
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            {children}
        </motion.ul>
    )
}

export function ListHeader({ titulo = '', children }) {
    const [listActive, setListActive] = useState(false);

    function changeListActive() {
        setListActive((prev) => !prev);
    }

    // type of title
    return (

        <div className="list_item_header">
            <ul className="title">

                <li>
                    {titulo}
                    <i className="fa-solid fa-caret-down ani1-icon" onClick={changeListActive}></i>

                    <AnimatePresence>
                        {listActive &&
                            (
                                <ListContainer>
                                    {children}
                                </ListContainer>
                            )
                        }
                    </AnimatePresence>
                </li>

            </ul>
        </div>

    )
}

export default function TopHeader() {
    return (
        <div className="containerTop">
            <section className="top">
                <div className="left">
                    <p>Personas</p>
                    <p className='active'>Negocios</p>
                    <p>Empresas</p>
                </div>
                <div className="right">
                    <ListHeader titulo={<p>Más de claro</p>}>
                        {moreClaro.map((value, index) => (
                            <motion.li className="itemMoreOption" key={index}
                                variants={listItemVariants}
                            >
                                {value.icon}
                                {value.text}
                            </motion.li>
                        ))}
                    </ListHeader>

                    <ListHeader titulo={<span className="fi fi-do"></span>}>
                        {countrys.map((value, index) => (
                            <motion.li className="itemCountry" key={index}
                                variants={listItemVariants}>
                                {value.icon}
                                {value.text}
                            </motion.li>
                        ))}
                    </ListHeader>
                </div>
            </section>
        </div>
    )
}