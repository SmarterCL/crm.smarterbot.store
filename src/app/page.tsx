
import { 
  Bot, 
  MessageSquare, 
  Database, 
  BrainCircuit, 
  Check, 
  X, 
  ArrowRight, 
  Zap, 
  TrendingUp, 
  Clock 
} from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="landing-wrapper premium-dark-theme">
      {/* 2. HERO */}
      <section className="hero-section min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5">
        <div className="hero-background-glow"></div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center">
            <div className="col-lg-10">
              <div className="badge rounded-pill bg-primary bg-opacity-10 text-primary border border-primary border-opacity-25 mb-4 px-4 py-2 fs-6 fw-medium hero-badge-anim">
                Sistema operativo para escalar negocios
              </div>
              <h1 className="display-2 fw-bold text-white mb-4 hero-title tracking-tight">
                Automatiza tu negocio <br/>
                <span className="text-gradient-primary">en minutos</span>
              </h1>
              <p className="lead text-secondary mb-5 fs-3 mx-auto" style={{ maxWidth: '800px' }}>
                CRM, bots, workflows y ERP funcionando juntos — sin configuración técnica.
              </p>
              
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-4 mb-5">
                <div className="d-flex align-items-center text-start gap-2 text-white-50">
                  <Check className="text-primary" size={20} />
                  <span>Setup automático</span>
                </div>
                <div className="d-flex align-items-center text-start gap-2 text-white-50">
                  <Check className="text-primary" size={20} />
                  <span>IA + Automatización</span>
                </div>
                <div className="d-flex align-items-center text-start gap-2 text-white-50">
                  <Check className="text-primary" size={20} />
                  <span>Todo conectado</span>
                </div>
              </div>

              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <Link href="/register" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold d-flex align-items-center justify-content-center gap-2 cta-glow hover-scale">
                  Crear cuenta <ArrowRight size={20} />
                </Link>
                <Link href="#demo" className="btn btn-outline-light btn-lg rounded-pill px-5 py-3 fw-medium hover-scale">
                  Ver demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA */}
      <section className="problem-section py-6 position-relative">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-3">Estás perdiendo tiempo y clientes</h2>
            <p className="text-secondary fs-5">El caos operativo frena tu crecimiento.</p>
          </div>
          <div className="row g-4">
            {[
              { title: 'Demasiadas herramientas', desc: 'Silos de información que no se hablan entre sí.', icon: <X className="text-danger mb-3" size={40} /> },
              { title: 'Procesos manuales lentos', desc: 'Horas perdidas copiando y pegando datos.', icon: <X className="text-danger mb-3" size={40} /> },
              { title: 'Leads sin respuesta', desc: 'Oportunidades de venta que se enfrían y mueren.', icon: <X className="text-danger mb-3" size={40} /> }
            ].map((item, i) => (
              <div key={i} className="col-md-4">
                <div className="problem-card p-4 rounded-4 h-100 border border-danger border-opacity-25 bg-dark bg-opacity-50 hover-lift">
                  {item.icon}
                  <h4 className="text-white fw-bold mb-2">{item.title}</h4>
                  <p className="text-secondary mb-0">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SOLUCIÓN */}
      <section className="solution-section py-6 bg-darker position-relative overflow-hidden">
        <div className="solution-glow"></div>
        <div className="container position-relative z-1">
          <div className="row justify-content-center text-center mb-5">
            <div className="col-lg-8">
              <h2 className="display-4 fw-bold text-white mb-4">SmarterBOT lo hace <span className="text-gradient-primary">todo por ti</span></h2>
              <p className="lead text-secondary">Un solo sistema que conecta ventas, atención y operaciones en tiempo real.</p>
            </div>
          </div>
          
          <div className="diagram-container p-5 rounded-5 glass-panel border border-primary border-opacity-25 text-center my-5">
            <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-4 text-white fw-bold fs-4">
              <div className="diagram-node">Chatwoot</div>
              <ArrowRight className="text-primary d-none d-md-block" size={32} />
              <div className="diagram-node">n8n</div>
              <ArrowRight className="text-primary d-none d-md-block" size={32} />
              <div className="diagram-node">Odoo</div>
              <ArrowRight className="text-primary d-none d-md-block" size={32} />
              <div className="diagram-node gradient-node">IA Agents</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTO (MÓDULOS) */}
      <section id="producto" className="modules-section py-6">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="display-5 fw-bold text-white mb-3">Todo lo que necesitas, listo para usar</h2>
            <p className="text-secondary fs-5">Módulos integrados de nivel empresarial.</p>
          </div>
          <div className="row g-4">
            {[
              { icon: <Bot size={32} />, title: 'Automatización', desc: 'Workflows listos y pre-configurados con n8n.', color: 'text-info' },
              { icon: <MessageSquare size={32} />, title: 'Atención al Cliente', desc: 'Bandeja omnicanal unificada con Chatwoot.', color: 'text-success' },
              { icon: <Database size={32} />, title: 'Gestión Empresarial', desc: 'CRM + ERP potenciado por Odoo v19.', color: 'text-warning' },
              { icon: <BrainCircuit size={32} />, title: 'Inteligencia', desc: 'Agentes IA y MCP para decisiones autónomas.', color: 'text-primary' }
            ].map((mod, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="module-card p-4 rounded-4 h-100 glass-card hover-lift">
                  <div className={`icon-box mb-4 ${mod.color}`}>{mod.icon}</div>
                  <h4 className="text-white fw-bold mb-3">{mod.title}</h4>
                  <p className="text-secondary mb-0">{mod.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CÓMO FUNCIONA */}
      <section id="como-funciona" className="how-it-works-section py-6 bg-darker">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="display-5 fw-bold text-white mb-3">Empieza en 3 pasos</h2>
            <p className="text-primary fs-5 fw-medium">Infraestructura lista en segundos.</p>
          </div>
          <div className="row g-4 position-relative">
            <div className="col-md-4 text-center">
              <div className="step-number display-1 fw-bold text-white-50 opacity-25 mb-3">01</div>
              <h4 className="text-white fw-bold mb-2">Creas tu cuenta</h4>
              <p className="text-secondary">Registro simple en 1 click.</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="step-number display-1 fw-bold text-white-50 opacity-25 mb-3">02</div>
              <h4 className="text-white fw-bold mb-2">Setup automático</h4>
              <p className="text-secondary">El sistema aprovisiona tu tenant, bases de datos y workflows al instante.</p>
            </div>
            <div className="col-md-4 text-center">
              <div className="step-number display-1 fw-bold text-white-50 opacity-25 mb-3">03</div>
              <h4 className="text-white fw-bold mb-2">Empiezas a operar</h4>
              <p className="text-secondary">Vende y atiende desde el primer minuto.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. RESULTADOS */}
      <section className="results-section py-6">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-3">Resultados reales</h2>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-4">
              <div className="result-card text-center p-5 rounded-4 glass-card border-primary border-opacity-25">
                <TrendingUp className="text-primary mb-3 mx-auto" size={48} />
                <h2 className="display-4 fw-bold text-white mb-2">+40%</h2>
                <p className="text-secondary fs-5 mb-0">Conversión de ventas</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="result-card text-center p-5 rounded-4 glass-card border-primary border-opacity-25">
                <Clock className="text-primary mb-3 mx-auto" size={48} />
                <h2 className="display-4 fw-bold text-white mb-2">-60%</h2>
                <p className="text-secondary fs-5 mb-0">Tiempo operativo</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="result-card text-center p-5 rounded-4 glass-card border-primary border-opacity-25">
                <Zap className="text-primary mb-3 mx-auto" size={48} />
                <h2 className="display-4 fw-bold text-white mb-2">100%</h2>
                <p className="text-secondary fs-5 mb-0">Automatizable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PRICING */}
      <section id="precios" className="pricing-section py-6 bg-darker position-relative">
        <div className="container">
          <div className="text-center mb-6">
            <h2 className="display-5 fw-bold text-white mb-3">Planes simples</h2>
            <p className="text-secondary fs-5">Escala a tu propio ritmo.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {[
              { name: 'Startup', ideal: 'Para empezar', price: '9.900', features: ['1 Tenant', 'Workflows básicos', 'Soporte email'] },
              { name: 'Comercio', ideal: 'Para escalar', price: '19.900', featured: true, features: ['Workflows ilimitados', 'Integración Odoo', 'Soporte prioritario'] },
              { name: 'Empresa', ideal: 'Operación total', price: '49.900', features: ['Infra dedicada', 'Agentes IA Custom', 'Account Manager'] }
            ].map((plan, i) => (
              <div key={i} className="col-md-4">
                <div className={`pricing-card p-5 rounded-4 h-100 ${plan.featured ? 'bg-primary text-dark scale-up shadow-primary' : 'glass-card border border-secondary border-opacity-25'}`}>
                  <p className={`fw-bold mb-2 ${plan.featured ? 'text-dark opacity-75' : 'text-primary'}`}>{plan.ideal}</p>
                  <h3 className={`fw-bold mb-4 ${plan.featured ? 'text-dark' : 'text-white'}`}>{plan.name}</h3>
                  <div className="mb-4">
                    <span className="fs-1 fw-bold">${plan.price}</span>
                    <span className={plan.featured ? 'text-dark opacity-75' : 'text-secondary'}>/mes</span>
                  </div>
                  <ul className="list-unstyled mb-5">
                    {plan.features.map((f, j) => (
                      <li key={j} className="d-flex align-items-center gap-2 mb-3">
                        <Check size={18} className={plan.featured ? 'text-dark' : 'text-primary'} />
                        <span className={plan.featured ? 'text-dark fw-medium' : 'text-secondary'}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/register" className={`btn w-100 py-3 fw-bold rounded-pill ${plan.featured ? 'btn-dark text-white' : 'btn-outline-primary'}`}>
                    Crear cuenta
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA */}
      <section className="final-cta-section py-7 text-center position-relative overflow-hidden">
        <div className="cta-glow"></div>
        <div className="container position-relative z-1 py-5">
          <h2 className="display-4 fw-bold text-white mb-4">Crea tu sistema y empieza hoy</h2>
          <p className="lead text-secondary mb-5">La infraestructura automática para tu negocio te está esperando.</p>
          <Link href="/register" className="btn btn-primary btn-lg rounded-pill px-5 py-4 fw-bold fs-5 shadow-primary hover-scale d-inline-flex align-items-center gap-2">
            Crea tu sistema en 1 click <ArrowRight />
          </Link>
        </div>
      </section>
    </div>
  );
}
