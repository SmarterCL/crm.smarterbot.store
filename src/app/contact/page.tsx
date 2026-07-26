'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Linkedin, Github } from 'lucide-react';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState<null | boolean>(null);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setOk(null);
        setError(null);

        const form = e.currentTarget;

        try {
            // TODO: Implement actual form submission
            await new Promise(resolve => setTimeout(resolve, 1000));
            setOk(true);
            form.reset();
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <Mail size={14} className="me-1" />
                        Envíanos un Mensaje
                    </div>
                    <h1 className="display-4 fw-bold mb-4">Contáctanos</h1>
                    <p className="lead text-secondary mb-4 max-w-2xl mx-auto">
                        ¿Tienes preguntas? Nos encantaría saber de ti. Envíanos un mensaje y te responderemos lo antes posible.
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-lg-8">
                        <div className="card card-custom glass p-6">
                            <h2 className="h3 fw-bold mb-4">Send us a Message</h2>
                            <form onSubmit={onSubmit}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label text-secondary">Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control bg-bg-tertiary border-border text-primary"
                                            required
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label text-secondary">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control bg-bg-tertiary border-border text-primary"
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label text-secondary">Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            className="form-control bg-bg-tertiary border-border text-primary"
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label text-secondary">Message</label>
                                        <textarea
                                            name="message"
                                            rows={5}
                                            className="form-control bg-bg-tertiary border-border text-primary"
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn btn-primary w-100"
                                            disabled={loading}
                                        >
                                            {loading ? 'Sending...' : (
                                                <>
                                                    <Send size={18} className="me-2" />
                                                    Send Message
                                                </>
                                            )}
                                        </button>
                                        {ok && <div className="alert alert-success mt-3">Message sent successfully!</div>}
                                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="card card-custom glass p-6 mb-4">
                            <h3 className="h5 fw-bold mb-4">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="d-flex align-items-start gap-3">
                                    <Mail className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <div className="fw-semibold">Email</div>
                                        <div className="text-secondary">contacto@wacrm.cl</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start gap-3">
                                    <Phone className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <div className="fw-semibold">Phone</div>
                                        <div className="text-secondary">+56 9 1234 5678</div>
                                    </div>
                                </div>
                                <div className="d-flex align-items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary mt-1" />
                                    <div>
                                        <div className="fw-semibold">Location</div>
                                        <div className="text-secondary">Santiago, Chile</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card card-custom glass p-6">
                            <h3 className="h5 fw-bold mb-4">Follow Us</h3>
                            <div className="d-flex gap-3">
                                <a href="https://github.com/SmarterCL" target="_blank" rel="noopener noreferrer" className="btn btn-outline-secondary">
                                    <Github size={20} />
                                </a>
                                <a href="#" className="btn btn-outline-secondary">
                                    <Twitter size={20} />
                                </a>
                                <a href="#" className="btn btn-outline-secondary">
                                    <Linkedin size={20} />
                                </a>
                                <a href="mailto:contacto@wacrm.cl" className="btn btn-outline-secondary">
                                    <MessageSquare size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
