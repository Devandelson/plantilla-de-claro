import '../../css/main.css';
import '../../css/homepage.css';
import '../../css/help.css';
import '../../css/services.css';

import {HomePage, dataHome2} from './homepage.jsx';
import { AnimatePresence } from 'framer-motion';
import { ItemHelp, infoHelp } from './itemHelp.jsx';
import {ItemServices, dataServices} from './Itemservices.jsx';
import Support from './support.jsx';

function Container1({ 
    title = 'Titulo del elemento', 
    data, Component= () => <p>Aquí pasas un componente</p>, 
    children = <p>Contenido</p>,
    ...atributes }) {
    return (
        <section {...atributes}>
            <h2>{title}</h2>

            <div className="containerSlider">
                {
                    data.map((info, index) => (
                        <Component {...info} key={index} />
                    ))
                }
            </div>
        </section>
    );
}

export default function Main() {
    return (
        <main>
            <AnimatePresence>
                <HomePage />
            </AnimatePresence>

            <Container1 title='¿En qué podemos apoyarte hoy?' className='help' data={infoHelp}
            Component={ItemHelp}>
            </Container1>

            <Container1 title='Tenemos los mejores servicios para tu Negocio' className='services' data={dataServices} Component={ItemServices}>    
            </Container1>

            <section className="defaultContainer1 colordefault1">
                <h2>Soluciones para hacer crecer tu negocio</h2>

                <AnimatePresence>
                     <HomePage propData={dataHome2} />
                </AnimatePresence>
            </section>

            <Support />
        </main>
    );
}