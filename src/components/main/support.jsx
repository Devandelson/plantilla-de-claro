import tipa from '../../assets/tipa.png';
import '../../css/support.css';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Support() {
    return (
        <section className="defaultContainer1 support">
            <h2>Centros de Atención</h2>

            <div className="sliderContaianers">
                <Contact />
                <Attendance />
                <FrequentAnswers />
            </div>

            <a href="#" className='btn1 btnSupport'>
                <i className="fa-solid fa-arrow-right"></i>
                <p>Ir a la sección de Soporte</p>
            </a>
        </section>
    )
}

function Contact() {
    return (
        <div className="classRegularItems contact">
            <h3>Contacto Telefónico</h3>
            <i className="fa-solid fa-headset"></i>
            <p>Llámanos para requerimientos misceláneos y reportes de incidentes en tus servicios Móviles, Fijos y Datos.
            </p>

            <a href='#' className='btn1 btnContact'>809-220-1212</a>
        </div>
    );
}

function Attendance() {
    return (
        <div className="classRegularItems Attendance">
            <div className="info">
                <h3>Centros de Atención a Clientes</h3>
                <p>Para asistencia presencial, encuentra tu Centro más cercano y conoce los horarios de atención que tenemos disponibles para ti.
                </p>
                <a href='#' className='btn1 btnAttendance'>
                    Ir a Centros Claro
                </a>
            </div>
            <div className="img">
                <img src={tipa} alt="imagen de asistencia" />
            </div>
        </div>
    );
}

// data of frequent Answers
let dataAnswers = [
    {
        answer: '¿Cómo solicitar un duplicado de SIM Card?',
        response: (
            <>
                <p>Para solicitar un duplicado de SIM Card, la firma responsable debe enviarnos una copia de su cédula de identidad, una carta timbrada, sellada y firmada.</p>
                <p>La carta debe indicar el(los) número(s) para el(los) cual(es) solicita(n) el(los) duplicado(s) de SIM card, el nombre y número de cédula de la persona autorizada a recibirlo(s), en caso de que la firma responsable no se encuentre en la oficina cuando el mensajero vaya a hacer la entrega.</p>
            </>
        )
    },
    {
        answer: '¿Cómo consultar y descargar sus facturas en Mi Claro Empresas?',
        response: (
            <>
                <p>Paso 1. En el cintillo negro superior, posicionarse sobre Facturación y luego dar clic en Histórico de Factura.</p>
                <p>Paso 2. En la sección Descargar factura en Histórico de Factura, seleccionar el código de cliente asociado a la(s) cuenta(s) de la factura a descargar.</p>
                <p>Paso 3. Puede realizar la búsqueda de la factura a descargar por:</p>
                <p>Paso 3.1. Cuenta:</p>
                <p>Paso 3.1.1. Ingresar los primeros cuatro dígitos de la cuenta asociada al Código de Cliente seleccionado para realizar la búsqueda.</p>
                <p>Paso 3.1.2. Agregar la(s) cuenta(s) deseada(s) y dar clic en Consultar.</p>
                <p>Paso 3.1.3. En caso de haber ingresado una cuenta, se mostrarán las últimas 12 facturas disponibles.</p>
                <p>Si, por el contrario, se agregaron dos o más cuentas para fines de consulta, se mostrará la última factura disponible de cada cuenta.</p>
                <p>Paso 3.2. Mes y Ciclo de facturación:</p>
                <p>Paso 3.2.1. Seleccionar el mes o ciclo de facturación y dar clic en Consultar.</p>
                <p>Podrá realizar la combinación de seleccionar varios meses y un ciclo de facturación.</p>
                <p>Como también, seleccionar varios ciclos de facturación y un mes.</p>
                <p>Paso 3.2.2. Se mostrarán los resultados según el criterio de búsqueda ingresado.</p>
                <p>Paso 4. Dar clic en el icono de PDF del archivo que desee descargar.</p>
                <p>Paso 5. Se mostrará notificación de que se ha iniciado la descarga del documento.</p>
            </>
        )
    },
    {
        answer: '¿Cómo puedo reportar una avería?',
        response: (
            <>
                <p>Puedes reportar la avería de tu servicio contactando nuestro Centro de Atención Telefónica de Negocios al (809) 220–1212 opción 1.</p>
                <p>Nuestro horario de atención es de lunes a viernes de 8:00 a. m. a 6:00 p. m. y sábados de 8:00 a. m. a 12:00 p. m.</p>
            </>
        )
    },
    {
        answer: '¿Qué hacer para reactivar un servicio temporalmente suspendido?',
        response: (
            <>
                <p>Para desactivar la suspensión temporal antes del tiempo programado, la firma responsable debe solicitar la reactivación de su servicio a través de uno de nuestros Centros de Atención al Cliente.</p>
                <p>Para saber cuál de nuestros Centros de Atención al Cliente está más cerca de usted, haga clic <a href="https://www.claro.com.do/personas/cacs/" target="_blank" rel="noopener noreferrer">aquí</a>.</p>
            </>
        )
    },
    {
        answer: '¿Cuáles son los requisitos para solicitar un Cambio de Nombre?',
        response: (
            <>
                <p>Para solicitar cambio de nombre, la firma responsable del negocio debe enviarnos una carta timbrada, sellada y firmada con una copia de su cédula de identidad anexa así como el documento que avala dicho cambio, ya sea un acto de venta o el registro mercantil vigente.</p>
                <p><strong>Importante:</strong></p>
                <p>El servicio al que va a cambiar de nombre debe tener el balance en cero antes de hacer la solicitud y en la carta se debe indicar el número y nuevo nombre del negocio.</p>
                <p>Los negocios sin RNC pueden solicitar el cambio adjuntando a la carta los comprobantes de pago de las últimas tres facturas.</p>
                <p>Si la firma responsable ya no es parte de la empresa o falleció, el negocio debe enviar la carta firmada por el presidente que figura en el Registro Mercantil vigente.</p>
                <p>Puede remitir la carta mediante el formulario de Escríbenos haciendo clic <a href="/negocios/forms/tus-servicios-en-linea/" target="_blank" rel="noopener noreferrer">aquí</a> o al correo electrónico <a href="mailto:serviciospymes@claro.com.do">serviciospymes@claro.com.do</a>.</p>
            </>
        )
    },
    {
        answer: '¿Cómo solicitar un traslado exterior o local?',
        response: (
            <>
                <p>Para solicitar un traslado exterior o local los requisitos son los siguientes:</p>
                <p>- Carta de solicitud timbrada, sellada y firmada por la persona responsable.</p>
                <p>- Copia de la cédula de identidad a color de ambos lados de la persona responsable.</p>
                <p>- Indicar en la carta número de teléfono a trasladar, nueva dirección de servicio y un número Claro cercano.</p>
                <p>Puede solicitar este servicio registrándose en Mi Claro Empresa, haga clic <a href="https://www.claro.com.do/empresas/forms/registro-mi-claro/" target="_blank" rel="noopener noreferrer">aquí</a> para acceder.</p>
                <p>También llamando al <a href="tel:8092201212">809-220-1212</a> o visitando cualquiera de nuestros Centros de Atención al Cliente. Para ver su Centro más cercano, haga clic <a href="https://www.claro.com.do/personas/cacs/" target="_blank" rel="noopener noreferrer">aquí</a>.</p>
            </>
        )
    }
];


function FrequentAnswers() {
    return (
        <div className="classRegularItems frequentAnswers">
            <h3>Preguntas frecuentes</h3>
            <motion.div className="answerContainer">
                {dataAnswers.map((value, index) => (
                    <ItemAnswer title={value.answer} response={value.response} key={index} />
                ))}
            </motion.div>
        </div>
    )
}

function ItemAnswer({ title, response }) {
    let [conditionInfo, setConditionInfo] = useState(false);

    function viewInfo() {
        setConditionInfo((prev) => !prev);
    }

    /// Variantes para cada ítem de la lista
    const itemVariants = {
        hidden: { opacity: 0, y: 20, height: 0 }, // estado inicial: oculto y desplazado hacia abajo
        show: {
            opacity: 1,
            y: 0,
            height: 'auto',
            transition: {
                type: 'tween',      // transición suave sin rebote
                duration: 0.3,
                ease: 'easeOut'     // hace la entrada natural
            }
        },
        exit: {
            opacity: 0,
            y: -20,
            height: 0,
            transition: {
                type: 'tween',
                duration: 0.2,
                ease: 'easeIn'      // hace la salida suave
            }
        }
    };

    return (
        <div className="itemAnswer">
            <div className="titleAnswer">
                <p>{title}</p>
                <i className="fa-solid fa-angle-down ani1-icon" onClick={viewInfo}></i>
            </div>

            <AnimatePresence>
                {conditionInfo && (
                    <motion.div className="response"
                        variants={itemVariants}
                        initial='hidden'
                        animate='show'
                        exit='exit'
                    >
                        <hr />
                        {response}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}