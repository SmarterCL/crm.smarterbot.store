'use client';

import Image from 'next/image';
import {
    Cloud,
    Zap,
    Shield,
    ArrowRight,
    CheckCircle2,
    Terminal,
    Bot,
    MessageSquare,
    Code,
    Search,
    Share2,
    Users,
    ChevronDown,
    Layers,
    CreditCard
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

// Simplified pricing in CLP (Approx 12.990 CLP for the promo, 32.990 for standard)
const PRICING = {
    promo: "12.990",
    standard: "32.990",
    discountPercent: "60%",
    renewal: "14.990",
    period: "24 meses"
};

export default function ClawOSPage() {
    const containerRef = useRef(null);

    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    return (
        <div ref={containerRef} className="claw-theme-wrapper min-h-screen bg-[#020202] text-white overflow-hidden selection:bg-yellow-500/30">
            {/* Dynamic Fluid Mesh Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#1a1a1a_0%,_#020202_70%)] opacity-100"></div>
                <motion.div 
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                        rotate: [0, 45, 0]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_20%_30%,_#fbbf2433_0%,_transparent_50%)] blur-[100px]"
                ></motion.div>
                <motion.div 
                    animate={{ 
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.15, 0.05],
                        rotate: [0, -45, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-20%] right-[-10%] w-[120%] h-[120%] bg-[radial-gradient(circle_at_80%_70%,_#3b82f622_0%,_transparent_50%)] blur-[100px]"
                ></motion.div>
                <div className="absolute inset-0 bg-[#020202]/40 backdrop-blur-[2px]"></div>
            </div>

            {/* Navbar Placeholder for Consistency */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-[#020202]/80 backdrop-blur-xl border-b border-white/5 py-4">
                <div className="container px-6 flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg overflow-hidden bg-yellow-500 flex items-center justify-center border border-yellow-400/20">
                            <Image src="/assets/images/claw-os/logo.png" alt="Claw OS" width={32} height={32} />
                        </div>
                        <span className="font-black text-xl tracking-tighter uppercase">Claw <span className="text-yellow-500">OS</span></span>
                    </div>
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/70">
                        <a href="#features" className="hover:text-white transition-colors">Características</a>
                        <a href="#pricing" className="hover:text-white transition-colors">Precios</a>
                        <a href="#use-cases" className="hover:text-white transition-colors">Casos de Uso</a>
                        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all text-xs uppercase tracking-wider shadow-lg shadow-yellow-500/20">Iniciar OpenClaw</button>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-48 pb-32 overflow-hidden z-10">
                <div className="container px-6">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7 text-center text-lg-start">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className="inline-flex align-items-center gap-2 px-4 py-2 mb-8 text-[10px] font-black tracking-[0.2em] uppercase text-yellow-500 border border-yellow-500/20 rounded-full bg-yellow-500/5 backdrop-blur-md">
                                    <Zap size={10} fill="currentColor" /> Smarter Claw OS 2026
                                </div>
                                <h1 className="display-2 fw-black mb-6 tracking-tighter leading-[0.9]">
                                    OpenClaw: tu agente de <span className="text-yellow-500">IA privado</span>, listo con un solo clic
                                </h1>
                                <p className="lead text-white/50 mb-10 max-w-xl mx-auto mx-lg-0 text-lg">
                                    Automatiza las tareas diarias con OpenClaw, tu asistente personal de IA. No necesitas un Mac Mini ni ningún hardware especial.
                                </p>
                                
                                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-start gap-4 mb-8">
                                    <a href="#pricing" className="btn btn-warning px-8 py-4 rounded-2xl fw-black d-flex align-items-center justify-center gap-3 text-lg hover:scale-105 transition-transform shadow-2xl shadow-yellow-500/30">
                                        Ejecutar OpenClaw <ArrowRight size={20} />
                                    </a>
                                </div>
                                <div className="flex items-center justify-center justify-lg-start gap-3 text-sm text-white/40 font-medium">
                                    <CheckCircle2 size={16} className="text-yellow-500" />
                                    Garantía de reembolso de 30 días
                                </div>
                            </motion.div>
                        </div>
                        <div className="col-lg-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1.2, ease: "circOut" }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-yellow-500/20 blur-[100px] rounded-full group-hover:bg-yellow-500/30 transition-all duration-700"></div>
                                <div className="relative bg-gradient-to-br from-white/10 to-transparent p-1 rounded-[40px] backdrop-blur-2xl border border-white/10 shadow-2xl">
                                    <div className="bg-[#0a0a0a] rounded-[39px] overflow-hidden aspect-square flex items-center justify-center">
                                        <div className="relative w-48 h-48 group-hover:scale-110 transition-transform duration-700">
                                            <Image src="/assets/images/claw-os/logo.png" alt="Claw OS Logo" fill className="object-contain" />
                                        </div>
                                    </div>
                                    
                                    {/* App Grid Overlays */}
                                    <div className="absolute -top-10 -right-10 w-24 h-24 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-4 flex items-center justify-center rotate-6 hover:rotate-0 transition-transform cursor-pointer shadow-xl">
                                        <div className="text-center">
                                            <div className="text-[10px] font-black uppercase text-yellow-500 mb-1">Odoo</div>
                                            <Layers size={24} className="mx-auto" />
                                        </div>
                                    </div>
                                    <div className="absolute top-1/2 -left-12 w-20 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-3 flex items-center justify-center -rotate-12 hover:rotate-0 transition-transform cursor-pointer shadow-xl">
                                        <div className="text-center">
                                            <div className="text-[10px] font-black uppercase text-blue-400 mb-1">Chat</div>
                                            <MessageSquare size={20} className="mx-auto" />
                                        </div>
                                    </div>
                                    <div className="absolute -bottom-6 right-1/4 w-28 h-20 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-3 flex items-center justify-center rotate-2 hover:rotate-0 transition-transform cursor-pointer shadow-xl">
                                        <div className="text-center">
                                            <div className="text-[10px] font-black uppercase text-green-400 mb-1">FastAPI</div>
                                            <Terminal size={22} className="mx-auto" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Stats / Features */}
            <section id="features" className="py-24 relative z-10 bg-white/[0.02] border-y border-white/5">
                <div className="container px-6">
                    <div className="row g-5">
                        {[
                            { title: "IA lista para usar", desc: "OpenClaw se implementa automáticamente con su VPS. No se requieren claves API.", icon: Bot },
                            { title: "Créditos preinstalados", desc: "Utiliza OpenAI, Anthropic y Google listos al instante vía Nexos.ai.", icon: CreditCard },
                            { title: "Seguro y Privado", desc: "Tus datos y registros de chat están bajo su control total en un VPS dedicado.", icon: Shield },
                            { title: "Sin hardware especial", desc: "No necesitas un Mac Mini. Accede desde cualquier lugar, 24/7.", icon: Cloud }
                        ].map((item, i) => (
                            <div key={i} className="col-md-6 col-lg-3">
                                <div className="h-full p-8 rounded-[32px] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all hover:-translate-y-2">
                                    <div className="w-12 h-12 rounded-2xl bg-yellow-500/10 flex items-center justify-center mb-6 border border-yellow-500/20 text-yellow-500">
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="h5 fw-black mb-3">{item.title}</h4>
                                    <p className="text-white/40 text-sm mb-0 leading-relaxed font-medium">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section - Hostinger Style */}
            <section id="pricing" className="py-32 relative z-10">
                <div className="container px-6">
                    <div className="text-center mb-20">
                        <h2 className="display-4 fw-black mb-4 tracking-tighter">Todo lo que necesitas en un <span className="text-yellow-500">solo plan</span></h2>
                        <p className="text-white/40 max-w-2xl mx-auto text-lg">
                            Empieza hoy y obtén 24 meses de potencia de IA privada.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <motion.div 
                            className="bg-[#0a0a0a] rounded-[48px] border-2 border-yellow-500/30 overflow-hidden shadow-[0_0_100px_-20px_rgba(251,191,36,0.2)]"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="bg-yellow-500 text-black text-center py-3 font-black text-xs uppercase tracking-[0.3em]">
                                Oferta de Lanzamiento: {PRICING.discountPercent} Descuento
                            </div>
                            <div className="p-8 md:p-14">
                                <div className="row g-5 align-items-center">
                                    <div className="col-md-5 text-center text-md-start border-md-end border-white/5">
                                        <h3 className="h4 font-black mb-8 opacity-60">CLAW VPS PRO</h3>
                                        <div className="mb-2">
                                            <span className="text-2xl text-white/30 line-through font-bold">${PRICING.standard}</span>
                                            <span className="ms-3 bg-yellow-500/10 text-yellow-500 px-3 py-1 rounded-full text-xs font-black">AHORRA 25% + IVA</span>
                                        </div>
                                        <div className="flex items-baseline justify-center justify-md-start gap-1 mb-8">
                                            <span className="text-6xl font-black tracking-tighter">${PRICING.promo}</span>
                                            <span className="text-xl text-white/40 font-bold">/mes*</span>
                                        </div>
                                        <div className="text-sm text-white/40 font-medium mb-10">
                                            Se factura por adelantado. Se renueva a ${PRICING.renewal}/mes.
                                        </div>
                                        <button className="btn btn-warning w-full py-4 rounded-2xl fw-black shadow-xl shadow-yellow-500/20 hover:scale-[1.02] transition-transform text-lg">
                                            Comprar Ahora
                                        </button>
                                    </div>
                                    <div className="col-md-7 ps-md-5">
                                        <ul className="list-unstyled mb-0 space-y-4">
                                            {[
                                                { text: "OpenClaw instalado automáticamente", bold: true },
                                                { text: "Interfaz visual para gestión de flujos", bold: true },
                                                { text: "Créditos de IA incluidos (Nexos.ai)", bold: true },
                                                { text: "Asistente de IA impulsado por MCP", bold: true },
                                                { text: "2 núcleos de CPU / 8 GB de RAM", bold: false },
                                                { text: "100 GB NVMe / 8 TB Ancho de banda", bold: false },
                                                { text: "Backups diarios automáticos incluidos", bold: false },
                                                { text: "Control 100% privado y seguro", bold: false }
                                            ].map((feature, i) => (
                                                <li key={i} className={`flex items-center gap-3 text-sm font-medium ${feature.bold ? 'text-white' : 'text-white/60'}`}>
                                                    <CheckCircle2 size={18} className="text-yellow-500 flex-shrink-0" />
                                                    {feature.text}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="text-center mt-8 text-white/30 text-xs font-medium">
                            * Precios reflejados representan el costo mensual prorrateado del plan de 24 meses.
                        </div>
                    </div>
                </div>
            </section>

            {/* Stepper Section */}
            <section className="py-24 relative z-10 bg-white/[0.01]">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="h1 fw-black tracking-tighter">Despliega OpenClaw en 3 sencillos pasos</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { title: "Elige tu plan", desc: "Nos encargaremos de la configuración automática en tu VPS. Sin experiencia técnica.", num: "01" },
                            { title: "Créditos listos", desc: "Tus créditos de IA se instalan al instante. Sin cuentas externas ni claves API.", num: "02" },
                            { title: "¡Ya está en línea!", desc: "Tu asistente de IA OpenClaw estará activo y listo para comenzar a trabajar.", num: "03" }
                        ].map((step, i) => (
                            <div key={i} className="col-md-4">
                                <div className="p-8 rounded-[40px] bg-[#080808] border border-white/5 h-full relative overflow-hidden group">
                                    <div className="absolute top-[-20%] right-[-10%] text-9xl font-black text-white/[0.02] group-hover:text-yellow-500/[0.05] transition-all duration-500">{step.num}</div>
                                    <div className="w-10 h-10 rounded-full bg-yellow-500 text-black flex items-center justify-center font-black mb-6 relative z-10">{i+1}</div>
                                    <h4 className="h5 fw-black mb-4 relative z-10">{step.title}</h4>
                                    <p className="text-white/40 text-sm font-medium mb-0 relative z-10">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Use Cases - App Grid Feel */}
            <section id="use-cases" className="py-24 relative z-10">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="h1 fw-black tracking-tighter">¿Qué puedes crear con <span className="text-yellow-500">Claw OS</span>?</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { icon: MessageSquare, title: "Asistente de Ventas", color: "text-blue-400", desc: "Automatiza consultas, filtra oportunidades y gestiona contactos." },
                            { icon: Code, title: "Dev Assistant", color: "text-green-400", desc: "Escribe y depura código con IA directamente en tu servidor." },
                            { icon: Search, title: "Investigador", color: "text-purple-400", desc: "Recopila información y resume contenido automáticamente." },
                            { icon: Share2, title: "Social Planner", color: "text-red-400", desc: "Genera ideas y planifica calendarios de publicaciones." },
                            { icon: Users, title: "Soporte 24/7", color: "text-yellow-400", desc: "Responde preguntas frecuentes sin intervención humana." },
                            { icon: Layers, title: "Smarter OS Apps", color: "text-cyan-400", desc: "Integra Odoo, Chatwoot y FastAPI en un solo lugar." }
                        ].map((item, i) => (
                            <div key={i} className="col-md-6 col-lg-4">
                                <div className="p-8 rounded-[36px] bg-white/[0.02] border border-white/5 h-full hover:bg-white/[0.04] transition-all cursor-crosshair">
                                    <item.icon className={`${item.color} mb-5`} size={32} />
                                    <h5 className="fw-black mb-3">{item.title}</h5>
                                    <p className="text-white/40 text-sm font-medium mb-0 leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="py-32 bg-white/[0.02] border-y border-white/5">
                <div className="container px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="h1 fw-black tracking-tighter">¿Por qué <span className="text-yellow-500">Smarter Claw</span>?</h2>
                            <p className="text-white/40 font-medium">Comparamos nuestra solución con la competencia.</p>
                        </div>
                        <div className="bg-[#050505] rounded-[40px] border border-white/5 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-white/5">
                                        <th className="p-8 text-xs uppercase tracking-widest font-black text-white/40">Característica</th>
                                        <th className="p-8 text-sm font-black text-yellow-500 text-center bg-yellow-500/5">Smarter Claw</th>
                                        <th className="p-8 text-sm font-black text-white/30 text-center">Competidor General</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm font-medium">
                                    {[
                                        { label: "Velocidad de despliegue", sm: "Instante (1 clic)", other: "Horas de config" },
                                        { label: "Complejidad técnica", sm: "Cero", other: "Alta (Requiere API keys)" },
                                        { label: "Créditos de IA", sm: "Preinstalados", other: "Externos" },
                                        { label: "Privacidad", sm: "VPS Privado dedicado", other: "Cloud compartida" },
                                        { label: "Soporte de IA", sm: "Kodee Integrado", other: "No disponible" }
                                    ].map((row, i) => (
                                        <tr key={i} className="border-b border-white/5 group hover:bg-white/[0.01] transition-colors">
                                            <td className="p-8 text-white/50">{row.label}</td>
                                            <td className="p-8 text-center bg-yellow-500/5 font-bold">{row.sm}</td>
                                            <td className="p-8 text-center text-white/20">{row.other}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-32 relative z-10">
                <div className="container px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="h1 fw-black tracking-tighter">Preguntas frecuentes</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "¿Qué es OpenClaw y Smarter bot store?", a: "Es una solución de hosting VPS optimizada para IA que pre-instala OpenClaw, permitiéndote tener tu propio agente de IA privado sin configuraciones complejas." },
                                { q: "¿Por qué debería usar un VPS en lugar de mi PC?", a: "Un VPS ofrece disponibilidad 24/7, escalabilidad, y te permite liberar los recursos de tu hardware local para otras tareas intensivas." },
                                { q: "¿Qué nivel de control tengo sobre el servidor?", a: "Control total (Acceso Root). Aunque entregamos todo listo, puedes personalizar cualquier aspecto de tu stack tecnológico." },
                                { q: "¿Los créditos de IA caducan?", a: "Los créditos incluidos en tu suscripción se renuevan mensualmente y te permiten acceder a los mejores modelos (GPT-4, Claude 3.5, etc.) sin pagos adicionales." }
                            ].map((faq, i) => (
                                <div key={i} className="bg-white/[0.02] border border-white/5 rounded-3xl overflow-hidden hover:border-white/10 transition-all">
                                    <button 
                                        onClick={() => toggleFaq(i)}
                                        className="w-full text-left p-8 flex justify-between items-center transition-all bg-transparent border-none focus:outline-none"
                                    >
                                        <span className="font-black tracking-tight">{faq.q}</span>
                                        <ChevronDown size={20} className={`text-yellow-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                                    </button>
                                    <motion.div 
                                        initial={false}
                                        animate={{ height: activeFaq === i ? 'auto' : 0, opacity: activeFaq === i ? 1 : 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="p-8 pt-0 text-white/40 text-sm font-medium leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-32 relative z-10">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="p-16 rounded-[64px] bg-gradient-to-br from-yellow-500 to-yellow-600 border border-yellow-400 relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,_#ffffff22_0%,_transparent_50%)]"></div>
                        <h2 className="display-4 fw-black text-black mb-6 tracking-tighter">Configura tu <span className="opacity-90">OpenClaw</span> hoy</h2>
                        <p className="text-black/70 mb-10 max-w-xl mx-auto font-bold text-lg">
                            Pruébalo sin riesgos con nuestra garantía de reembolso de 30 días. Tu asistente de IA está a un clic de distancia.
                        </p>
                        <button className="bg-black text-white px-12 py-5 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-2xl">
                            Empezar ya
                        </button>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 relative z-10 text-center">
                <div className="container px-6">
                    <div className="flex flex-col items-center gap-6 mb-12">
                         <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg overflow-hidden bg-yellow-500 flex items-center justify-center">
                                <Image src="/assets/images/claw-os/logo.png" alt="Claw OS" width={24} height={24} />
                            </div>
                            <span className="font-black text-lg tracking-tighter uppercase">Claw <span className="text-yellow-500">OS</span></span>
                        </div>
                        <p className="text-white/30 text-sm font-medium tracking-tight">Smarter Technology SpA. © 2026. Made with ❤️ for sovereign intelligence.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-white/20">
                        <a href="#" className="hover:text-yellow-500 transition-colors">Política de privacidad</a>
                        <a href="#" className="hover:text-yellow-500 transition-colors">Términos de servicio</a>
                        <p>CLP 🇨🇱 Chile Edition</p>
                    </div>
                </div>
            </footer>

            <style jsx>{`
                .claw-theme-wrapper {
                    position: relative;
                    z-index: 1;
                }
                .selection\\:bg-yellow-500\\/30 ::selection {
                    background: rgba(234, 179, 8, 0.3);
                }
                @media (min-width: 768px) {
                    .border-md-end {
                        border-right: 1px solid rgba(255, 255, 255, 0.05);
                    }
                }
            `}</style>
        </div>
    );
}
