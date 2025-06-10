export let infoHelp = [
    {
        title: 'Administración de Flota',
        text: 'Gestiona todas las unidades de tu flota desde la web.',
        icon: <i className="fas fa-truck-moving"></i>,
        buttonText: 'Administrar'
    },
    {
        title: 'Mi Claro Empresas',
        text: 'Gestiona tus servicios con Claro de manera fácil y rápida.',
        icon: <i className="fas fa-chart-line"></i>,
        buttonText: 'Registrarme'
    },
    {
        title: 'Comprobante Fiscal',
        text: 'Consulta y descarga tu Comprobante Fiscal Electrónico online 24/7.',
        icon: <i className="fas fa-file-invoice-dollar"></i>,
        buttonText: 'Consultar'
    },
    {
        title: 'Servicios en línea',
        text: 'Envía tus solicitudes de servicio y consultas desde donde estés.',
        icon: <i className="fas fa-hand-pointer"></i>,
        buttonText: 'Ir al Formulario'
    }
];


export function ItemHelp({
    title = infoHelp[0].title,
    text = infoHelp[0].text,
    icon = infoHelp[0].icon,
    buttonText = infoHelp[0].buttonText }) {
    return (
        <div className="itemHelp">
            <div className="containerIcon">
                {icon}
            </div>
            <div className="info">
                <h3>{title}</h3>
                <p> {text} </p>
                <a href="#"> {buttonText} <i className="fa-solid fa-angle-right"></i> </a>
            </div>
        </div>
    );
}