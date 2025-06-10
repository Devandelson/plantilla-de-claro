import '../../css/responsiveMenu.css';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';

// data of diferents infos
const dataInfos = [
    {
        title: "Servicios",
        subOptionsTitles: [
            "Móviles",
            "Internet",
            "Televisión",
            "Voz",
            "Cobertura",
            "Multiplan",
            "Ofertas y Promociones"
        ],
        subOptionServices: [
            [
                "Planes Flota",
                "Planes Smart Premium",
                "Planes Smart Especial",
                "Roaming",
                "Plan Protección Móvil",
                "Norton Seguridad Digital",
                "Apps Móviles",
                "Canjea tu Móvil",
                "Mobile Marketing"
            ],
            [
                "Internet Fijo Negocios",
                "Internet Móvil Negocios",
                "Conectividad M2M"
            ],
            [
                "Claro tv Negocios",
                "Claro tv Bancas"
            ],
            [
                "PBX Hosteada",
                "Central Virtual",
                "Troncal Virtual",
                "Mi Negocio Total",
                "Telefonía Fija",
                "Larga Distancia"
            ],
            [
                "Red 5G",
                "Mapa de cobertura",
                "Fibra Óptica"
            ],
            [
                "Cotizador Multiplan"
            ],
            [
                "Ofertas y Promociones"
            ]
        ]
    },
    {
        title: "Sectores",
        subOptionsTitles: [
            "Restaurantes y Bares",
            "Profesionales Independientes",
            "Centros educativos",
            "Comercio al detalle"
        ],
        subOptionServices: [
            [
                "Punto de Venta",
                "Internet Fijo Negocios",
                "Claro tv Negocios",
                "Presencia Web",
                "Multiplan Negocios"
            ],
            [
                "Soluciones móviles",
                "Internet Móvil Negocios",
                "Internet Fijo Negocios",
                "Claro Backup",
                "Microsoft 365"
            ],
            [
                "Microsoft 365",
                "Central Virtual",
                "Internet Fijo Negocios",
                "Videovigilancia",
                "Claro Backup"
            ],
            [
                "Gestión Negocios ERP",
                "Gestión Negocios CRM",
                "Presencia Web",
                "Multiplan Negocios",
                "Internet Fijo Negocios"
            ]
        ]
    },
    {
        title: "Claro Cloud",
        subOptionsTitles: [
            "Infraestructura",
            "Presencia Web",
            "Colaboración",
            "Seguridad",
            "Servicios Administrados"
        ],
        subOptionServices: [
            [
                "Claro Cloud Empresarial",
                "Microsoft Azure",
                "Backup Empresarial",
                "Almacenamiento como Servicio",
                "Collocation",
                "Servicios Profesionales IaaS"
            ],
            [
                "Página Web",
                "Diseño Página Web"
            ],
            [
                "Claro drive Negocio",
                "Microsoft 365",
                "Google Workspace"
            ],
            [
                "Videovigilancia",
                "Claro Backup",
                "Seguridad Negocios",
                "DDoS Protector",
                "SIEM como Servicio",
                "Seguridad Perimetral Administrada‑SD‑WAN",
                "SASE"
            ],
            [
                "Gestión Negocios CRM",
                "Gestión Negocios ERP",
                "Gestión Negocios Premium",
                "Facturación Electrónica Claro Cloud",
                "Wi‑Fi Administrado",
                "Punto de Venta",
                "Gestión de Salud",
                "Gestión Imágenes Médicas",
                "PBX Hosteada",
                "Contact Center",
                "Microsoft Teams",
                "Tarificador de Llamadas Hosteado",
                "Comunicación Unificada",
                "Bots como Servicio"
            ]
        ]
    },
    {
        title: "Soporte",
        subOptionsTitles: [
            "Soporte"
        ],
        subOptionServices: [
            [
                "Móvil",
                "Datos",
                "Voz",
                "Cloud",
                "Servicio al Cliente",
                "Mi Claro Empresas"
            ]
        ]
    }
];


export default function ResponsiveMenu({ closeMenuFunction }) {
    const [conditionMoreInfo, setConditionMoreInfo] = useState(false);
    const [indexInfo, setIndexInfo] = useState(0);
    let dataSelect = dataInfos[indexInfo];
    const isMobile = useMediaQuery({ maxWidth: 757 });

    function moreInfo(index) {
        setIndexInfo(index);
        setConditionMoreInfo((prev) => !prev);
    }

    function closeInfo() {
        setConditionMoreInfo((prev) => !prev);
    }

    const direction = conditionMoreInfo ? 1 : 0;

    return (
        <>
            {
                isMobile
                    ? (
                        <motion.section className="responsiveMenu"
                            initial={{ x: '-100%', filter: 'blur(10px)' }}
                            animate={{
                                x: '0%', filter: 'blur(0px)',
                                transition: { duration: 0.4, ease: [.71, -0.04, .4, 1.05] }
                            }}
                            exit={{ x: '-100%', filter: 'blur(10px)' }}
                        >
                            <div className="top">
                                <p>Menu</p>
                                <i className="fa-solid fa-xmark ani1-icon" onClick={closeMenuFunction}></i>
                            </div>

                            <div className="header">
                                <a href="#">Personas</a>
                                <a href="#" className="active">Negocios</a>
                                <a href="#">Empresas</a>
                            </div>

                            <div className="SliderContainerOptions">
                                <motion.div className="itemSlider primaryOptionContainer"
                                    initial={{
                                        x: 0,
                                        transition: {
                                            ease: [.71, -0.04, .4, 1.05] // similar a ease-in (cubic-bezier)
                                        }
                                    }}

                                    animate={{
                                        marginLeft: direction == 1 ? '-100%' : '0%',
                                        transition: {
                                            duration: 0.5,
                                            ease: [.71, -0.04, .4, 1.05] // similar a ease-in (cubic-bezier)
                                        }
                                    }}
                                >
                                    {dataInfos.map((value, index) => (
                                        <ItemOption title={value.title} key={index}
                                            onClick={() => { moreInfo(index) }} />
                                    ))}
                                </motion.div>

                                <MoreInfo title={dataSelect.title} data={dataSelect}
                                    closeFunction={closeInfo}
                                    propDirection={direction}
                                />
                            </div>
                        </motion.section>
                    )
                    : null
            }
        </>
    );
}

function ItemOption({ title, ...events }) {
    return (
        <div className="itemOption">
            <p>{title}</p>

            <i className="fa-solid fa-angle-right ani1-icon" {...events}></i>
        </div>
    )
}

// -- More info elements
function MoreInfo({ title, data, closeFunction, propDirection }) {
    let dataIterable = data.subOptionsTitles;

    return (
        <motion.div className="itemSlider secondayOptionContainer">
            <div className="header">
                <p>{title}</p>
                <span onClick={closeFunction} className='ani1-icon'>
                    <i className="fa-solid fa-arrow-left"></i>
                    Regresar
                </span>
            </div>

            <div className="subOptions">
                <AnimatePresence>
                    {dataIterable.map((value, index) => (
                        <ItemOption2
                            key={index}
                            title={value} // titulo
                            options={data.subOptionServices[index]}
                            conditionDirection={propDirection}
                        /> // conjunto de string con optiones
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

function ItemOption2({ title, options, conditionDirection }) {
    const [conditionServices, setConditionService] = useState(false);

    useEffect(() => {
        setConditionService(false);
    }, [conditionDirection])

    function changeConditionServices() {
        setConditionService((prev) => !prev);
    }

    return (
        <div className="itemOption">
            <div className="top">
                <a href='#'>{title}</a>
                <i className="fa-solid fa-angle-down" onClick={changeConditionServices}></i>
            </div>
            <AnimatePresence>
                {conditionServices && (
                    <motion.ul className="bottom"
                        initial={{ height: 0, opacity: 0, y: -10 }}
                        animate={{
                            height: conditionServices ? 'auto' : 0,  // usa un valor suficientemente alto
                            opacity: conditionServices ? 1 : 0,
                            y: 0
                        }}
                        exit={{ height: 0, opacity: 0, y: 0 }}
                    >
                        {options.map((value, index) => (
                            <li key={index}><a href="#">{value}</a></li>
                        ))}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    )
}