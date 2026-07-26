"use client";
import Head from 'next/head';

export default function PricingPage() {
  const plans = [
    {
      name: 'BASIC',
      price: '$19.990',
      period: 'CLP / mes',
      features: [
        'Dashboard OpenClaw',
        '3 agentes activos',
        '1.000 tasks/mes',
        'Alertas Telegram',
        'Logs 7 días'
      ],
      cta: 'Comenzar',
      popular: false
    },
    {
      name: 'PRO',
      price: '$49.990',
      period: 'CLP / mes',
      features: [
        '10 agentes',
        '10.000 tasks/mes',
        'Auto-actions',
        'n8n integrado',
        'Logs 30 días',
        'Soporte prioritario'
      ],
      cta: 'Comenzar',
      popular: true
    },
    {
      name: 'BUSINESS',
      price: '$149.990',
      period: 'CLP / mes',
      features: [
        'Agentes ilimitados',
        'Tasks ilimitadas',
        'Workflows custom',
        'Integración ERP/CRM',
        'Soporte 24/7',
        'SLA garantizado'
      ],
      cta: 'Contactar',
      popular: false
    }
  ];

  return (
    <>
      <Head>
        <title>Precios - WACRM</title>
      </Head>
      
      <div style={{ padding: 40, maxWidth: 1200, margin: '0 auto', fontFamily: 'system-ui' }}>
        <h1 style={{ fontSize: 42, textAlign: 'center', marginBottom: 20 }}>
          Planes y Precios
        </h1>
        <p style={{ fontSize: 18, textAlign: 'center', color: '#666', marginBottom: 50 }}>
          Automatiza y monitorea tu negocio en tiempo real con agentes inteligentes.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              padding: 30,
              background: plan.popular ? '#f0f0ff' : '#fff',
              border: plan.popular ? '2px solid #6366f1' : '1px solid #ddd',
              borderRadius: 12,
              position: 'relative'
            }}>
              {plan.popular && (
                <span style={{
                  position: 'absolute',
                  top: -12,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#6366f1',
                  color: '#fff',
                  padding: '4px 16px',
                  borderRadius: 12,
                  fontSize: 12,
                  fontWeight: 600
                }}>
                  MÁS POPULAR
                </span>
              )}
              
              <h2 style={{ fontSize: 28, margin: '0 0 10px 0' }}>{plan.name}</h2>
              <div style={{ marginBottom: 30 }}>
                <span style={{ fontSize: 36, fontWeight: 'bold' }}>{plan.price}</span>
                <span style={{ color: '#666', marginLeft: 10 }}>{plan.period}</span>
              </div>
              
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: 30 }}>
                {plan.features.map((feature, j) => (
                  <li key={j} style={{ 
                    padding: '8px 0',
                    borderBottom: j < plan.features.length - 1 ? '1px solid #eee' : 'none'
                  }}>
                    ✅ {feature}
                  </li>
                ))}
              </ul>
              
              <button style={{
                width: '100%',
                padding: 15,
                background: plan.popular ? '#6366f1' : '#333',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                fontSize: 16,
                fontWeight: 600,
                cursor: 'pointer'
              }}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        {/* Use Cases */}
        <div style={{ marginTop: 60 }}>
          <h2 style={{ fontSize: 32, textAlign: 'center', marginBottom: 40 }}>
            Casos de Uso
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20 }}>
            <div style={{ padding: 20, background: '#f8f8f8', borderRadius: 8 }}>
              <h3 style={{ fontSize: 20, marginBottom: 10 }}>🛒 E-commerce</h3>
              <p style={{ color: '#666' }}>
                "Si falla un pago → alerta inmediata"
                <br />
                "Si stock llega a 0 → aviso"
              </p>
            </div>
            <div style={{ padding: 20, background: '#f8f8f8', borderRadius: 8 }}>
              <h3 style={{ fontSize: 20, marginBottom: 10 }}>🖥️ Operación Interna</h3>
              <p style={{ color: '#666' }}>
                "Si servidor cae → restart automático"
              </p>
            </div>
            <div style={{ padding: 20, background: '#f8f8f8', borderRadius: 8 }}>
              <h3 style={{ fontSize: 20, marginBottom: 10 }}>📈 Ventas</h3>
              <p style={{ color: '#666' }}>
                "Lead entra → notificación + registro"
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div style={{ marginTop: 60, textAlign: 'center', padding: 40, background: '#f0f0ff', borderRadius: 12 }}>
          <h2 style={{ fontSize: 32, marginBottom: 20 }}>
            ¿Listo para automatizar?
          </h2>
          <p style={{ fontSize: 18, color: '#666', marginBottom: 30 }}>
            Comienza hoy mismo y transforma tu operación.
          </p>
          <button style={{
            padding: '15px 40px',
            background: '#6366f1',
            color: '#fff',
            border: 'none',
            borderRadius: 8,
            fontSize: 18,
            fontWeight: 600,
            cursor: 'pointer'
          }}>
            Ver Estado en Vivo
          </button>
        </div>
      </div>
    </>
  );
}
