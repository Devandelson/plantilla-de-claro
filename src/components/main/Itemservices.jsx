// imgs
import defaultServices from '../../assets/defaultService.jpg';

export let dataServices = [
    {
        title: 'Móviles',
        img: defaultServices
    },
    {
        title: 'Internet',
        img: defaultServices
    },
    {
        title: 'Televisión',
        img: defaultServices
    },
    {
        title: 'Claro Cloud',
        img: defaultServices
    },
    {
        title: 'Multiplan',
        img: defaultServices
    },
    {
        title: 'Voz',
        img: defaultServices
    }
];

export function ItemServices({ title = dataServices[0].title, img = defaultServices }) {
    return (
        <article className="Itemservices">
            <span className="containerImg">
                <img src={img} alt="imagen del servicio" />
            </span>
            <h3>{title}</h3>

            <button className='btn1 btn_service'>
                <a href="#">Conoce más</a>
            </button>
        </article>
    )
}