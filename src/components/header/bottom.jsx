import logoClaro from '../../assets/logo-claro-blanco.png';
import FloatWindowHeader from './seeker.jsx';
import { act, use, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BottomHeader({closeMenuCondition}) {
    const [conditionFloatWindow, setConditionFloatWindow] = useState(false);

    function activateConditionFloatWindow() {
        setConditionFloatWindow((prev) => !prev);
    }

    return (
        <div className="containerBottom">
            <section className="bottom">
                <div className="left">
                    <span className='img'>
                        <i className="fa-solid fa-bars ani1-icon" onClick={closeMenuCondition}></i>
                        <img src={logoClaro} alt="" />
                    </span>
                    <ul>
                        <li>Servicios <i className="fa-solid fa-caret-down"></i></li>
                        <li>Sectores <i className="fa-solid fa-caret-down"></i></li>
                        <li>Claro Cloud<i className="fa-solid fa-caret-down"></i></li>
                        <li>Soporte</li>
                    </ul>
                </div>

                <div className="right">
                    <span className='magnifying-glass' onClick={activateConditionFloatWindow}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>

                    <button className='btn1'>
                        <i className="fa-solid fa-child-reaching"></i>
                        <p>Mi claro</p>
                    </button>
                </div>

                <AnimatePresence>
                    {conditionFloatWindow && (
                        <FloatWindowHeader functionFloatwindow={activateConditionFloatWindow} ></FloatWindowHeader>
                    )}
                </AnimatePresence>
            </section>
        </div>
    )
}