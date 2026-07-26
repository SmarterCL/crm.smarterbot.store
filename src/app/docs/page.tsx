'use client';

import { Book, Code, Terminal, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Docs() {
    const sections = [
        {
            icon: Book,
            title: 'Comenzando',
            description: 'Aprende lo básico de Claw OS, instalación y configuración inicial.',
            link: '#'
        },
        {
            icon: Code,
            title: 'Referencia de API',
            description: 'Documentación detallada de la API para desarrolladores e integradores.',
            link: '#'
        },
        {
            icon: Terminal,
            title: 'Guía de Flujos',
            description: 'Cómo crear, importar y gestionar flujos de trabajo de n8n.',
            link: '#'
        },
        {
            icon: Globe,
            title: 'Hosting y Despliegue',
            description: 'Guías para desplegar en VPS, Docker y gestión de dominios.',
            link: '#'
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <Book size={14} className="me-1" />
                        Documentation
                    </div>
                    <h1 className="display-4 fw-bold mb-4">Documentación</h1>
                    <p className="lead text-secondary mb-4 max-w-2xl mx-auto">
                        Todo lo que necesitas saber sobre la plataforma Claw OS
                    </p>
                </div>

                <div className="row g-4">
                    {sections.map((section, index) => (
                        <div key={index} className="col-md-6">
                            <Link
                                href={section.link}
                                className="card card-custom glass p-6 hover-border-primary/50 transition-all group text-decoration-none d-block h-100"
                            >
                                <div className="d-flex align-items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-bg-tertiary d-flex align-items-center justify-content-center group-hover-bg-primary/20 transition-colors flex-shrink-0">
                                        <section.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="h4 fw-bold mb-2 group-hover-text-primary transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-secondary mb-0">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="card card-custom glass p-6 max-w-2xl mx-auto">
                        <h2 className="h3 fw-bold mb-3">Can't find what you're looking for?</h2>
                        <p className="text-secondary mb-4">
                            Contact our support team for help
                        </p>
                        <Link href="/support" className="btn btn-primary">
                            Contact Support
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
