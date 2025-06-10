import logoClaro from '../../assets/logo-claro-blanco.svg';
import logoAmericaMovil from '../../assets/Americanmovile.png';
import '../../css/footer.css';

// data of subpages
let dataSubpages = [
  {
    title: 'Servicios',
    subpages: [
      <li key="servicios-0">Móviles</li>,
      <li key="servicios-1">Internet</li>,
      <li key="servicios-2">Televisión</li>,
      <li key="servicios-3">Voz</li>,
      <li key="servicios-4">Multiplan Negocios</li>,
      <li key="servicios-5">Mapa de cobertura</li>,
      <li key="servicios-6">Fibra Óptica</li>,
      <li key="servicios-7">Ofertas y Promociones</li>
    ]
  },
  {
    title: 'Institucional',
    subpages: [
      <li key="institucional-0">Información Corporativa</li>,
      <li key="institucional-1">Sala de Prensa</li>,
      <li key="institucional-2">Distribuidor Claro</li>,
      <li key="institucional-3">Voces Clara</li>
    ]
  },
  {
    title: 'Sectores',
    subpages: [
      <li key="sectores-0">Restaurantes y Bares</li>,
      <li key="sectores-1">Profesionales Independientes</li>,
      <li key="sectores-2">Centros educativos</li>,
      <li key="sectores-3">Comercio al detalle</li>
    ]
  },
  {
    title: 'Soporte',
    subpages: [
      <li key="soporte-0">Móvil</li>,
      <li key="soporte-1">Datos</li>,
      <li key="soporte-2">Voz</li>,
      <li key="soporte-3">Cloud</li>,
      <li key="soporte-4">Servicio al Cliente</li>,
      <li key="soporte-5">Mi Claro Empresas</li>
    ]
  }
];


export default function Footer() {
    let fechaActual = new Date();

    return (
        <footer>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1F1D1D" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,240C384,256,480,256,576,250.7C672,245,768,235,864,234.7C960,235,1056,245,1152,234.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <section className="top">
                {dataSubpages.map((value, index) => (
                    <div className="itemSubpages" key={index}>
                        <h4>{value.title}</h4>
                        <ul>
                            {value.subpages}
                        </ul>
                    </div>
                ))}
            </section>
            <section className="logo">
                <div className="left">
                    <img src={logoClaro} alt="" />
                    <span></span>
                    <img src={logoAmericaMovil} alt="" />
                </div>
                <div className="right">
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-brands fa-x-twitter"></i></span>
                    <span><i className="fa-brands fa-instagram"></i></span>
                    <span><i className="fa-brands fa-youtube"></i></span>
                </div>
            </section>
            <section className="Entitlement">
                <p>Todos los derechos reservados, Claro {fechaActual.getFullYear()} </p>

                <div className="moreLinks">
                    <a href="#">Mapa de sitio</a>
                    <span></span>
                    <a href="#">Portal de denuncias</a>
                    <span></span>
                    <a href="#">Privacidad</a>
                    <span></span>
                    <a href="#">Legal y Regulatorio</a>
                </div>
            </section>
        </footer>
    );
}