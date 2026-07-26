'use client';

import { Server, Globe, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            icon: Server,
            title: 'Hosting VPS',
            description: 'Servidores privados virtuales de nivel empresarial basados en infraestructura Hostinger',
            features: [
                'Almacenamiento SSD hasta 1TB',
                'Hasta 32GB de RAM',
                'Acceso root completo',
                'Garantía de 99.9% de disponibilidad',
                'Protección anti-DDoS',
                'Backups automatizados',
            ],
            startingPrice: '9.990 CLP/mes',
            gradient: 'from-blue-500 to-cyan-500',
            popular: false,
        },
        {
            icon: Globe,
            title: 'Registro de Dominios',
            description: 'Asegura tu marca con dominios premium y gestión DNS completa',
            features: [
                'Más de 500 TLDs disponibles',
                'Privacidad WHOIS gratuita',
                'Gestión DNS',
                'Redirección de email',
                'Renovación automática',
                'Bloqueo de dominio',
            ],
            startingPrice: '990 CLP/año',
            gradient: 'from-purple-500 to-pink-500',
            popular: true,
        },
        {
            icon: Code,
            title: 'Automatización Personalizada',
            description: 'Flujos n8n e integraciones a medida para las necesidades de tu negocio',
            features: [
                'Desarrollo de flujos personalizados',
                'Integraciones API',
                'Automatización de procesos empresariales',
                'Capacitación y soporte',
                'Documentación incluida',
                'Mantenimiento continuo',
            ],
            startingPrice: 'Cotización Personalizada',
            gradient: 'from-orange-500 to-red-500',
            popular: false,
        },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <Rocket size={14} className="me-1" />
                        Our Services
                    </div>
                    <h1 className="display-4 fw-bold mb-4">
                        Soluciones para tu Negocio
                    </h1>
                    <p className="lead text-secondary mb-4 max-w-2xl mx-auto">
                        Desde hosting hasta automatización personalizada, te ofrecemos todo lo que necesitas para escalar
                    </p>
                </div>

                <div className="row g-4 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4">
                            <div className={`card card-custom glass h-100 p-4 ${service.popular ? 'border-primary border-2' : ''}`}>
                                {service.popular && (
                                    <div className="badge bg-primary text-white mb-3">Más Popular</div>
                                )}
                                <div className="text-center mb-4">
                                    <div className={`w-16 h-16 rounded-lg bg-gradient-${service.gradient} d-flex align-items-center justify-content-center mx-auto mb-3`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="h4 fw-bold mb-2">{service.title}</h3>
                                    <p className="text-secondary">{service.description}</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="d-flex align-items-center gap-2 mb-2 text-secondary">
                                            <CheckCircle size={16} className="text-success flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center mb-4">
                                    <div className="h3 fw-bold text-gradient">{service.startingPrice}</div>
                                </div>
                                <Link href="/contact" className="btn btn-primary w-100">
                                    Comenzar
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="card card-custom glass p-6 max-w-2xl mx-auto">
                        <h2 className="h3 fw-bold mb-3">¿Necesitas una Solución Personalizada?</h2>
                        <p className="text-secondary mb-4">
                            Contáctanos para recibir una cotización a medida según tus necesidades
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <Link href="/contact" className="btn btn-primary">
                                Contactar Ventas
                                <ArrowRight className="w-5 h-5 ms-2" />
                            </Link>
                            <Link href="/pricing" className="btn btn-secondary">
                                Ver Precios
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
