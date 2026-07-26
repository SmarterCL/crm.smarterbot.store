import Link from 'next/link';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-darker py-5 border-top border-secondary border-opacity-25">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <span className="fw-bold tracking-tight text-white fs-4">
              Smarter<span className="text-primary">BOT</span>
            </span>
            <p className="text-secondary mt-2 mb-0 small">
              Sistema operativo para escalar negocios.
            </p>
          </div>
          
          <div className="col-md-4 text-center">
            <ul className="list-inline mb-0">
              <li className="list-inline-item mx-3">
                <Link href="#producto" className="text-secondary text-decoration-none hover-text-white transition-all">Producto</Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link href="#precios" className="text-secondary text-decoration-none hover-text-white transition-all">Precios</Link>
              </li>
              <li className="list-inline-item mx-3">
                <Link href="/docs" className="text-secondary text-decoration-none hover-text-white transition-all">Docs</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-md-4 text-center text-md-end">
            <a href="mailto:contacto@wacrm.cl" className="text-secondary text-decoration-none hover-text-white transition-all d-inline-flex align-items-center gap-2">
              <Mail size={18} /> contacto@wacrm.cl
            </a>
            <p className="text-secondary opacity-50 mt-2 mb-0 small">
              &copy; {new Date().getFullYear()} WACRM. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
