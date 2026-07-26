'use client';

import { Mail, MessageCircle, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Support() {
    const { t } = useLanguage();

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <HelpCircle size={14} className="me-1" />
                        {t('support.title')}
                    </div>
                    <h1 className="display-4 fw-bold mb-4">{t('support.title')}</h1>
                    <p className="lead text-secondary mb-4 max-w-2xl mx-auto">
                        {t('support.description')}
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card card-custom glass p-6 text-center h-100">
                            <div className="w-16 h-16 rounded-lg bg-bg-tertiary d-flex align-items-center justify-content-center mx-auto mb-4">
                                <Mail className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="h4 fw-bold mb-3">{t('support.emailTitle')}</h3>
                            <p className="text-secondary mb-4">{t('support.emailDesc')}</p>
                            <a href="mailto:contacto@wacrm.cl" className="btn btn-primary">
                                Enviar Email
                            </a>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-custom glass p-6 text-center h-100">
                            <div className="w-16 h-16 rounded-lg bg-bg-tertiary d-flex align-items-center justify-content-center mx-auto mb-4">
                                <MessageCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="h4 fw-bold mb-3">{t('support.docsTitle')}</h3>
                            <p className="text-secondary mb-4">{t('support.docsDesc')}</p>
                            <Link href="/docs" className="btn btn-primary">
                                {t('support.docsButton')}
                            </Link>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card card-custom glass p-6 text-center h-100">
                            <div className="w-16 h-16 rounded-lg bg-bg-tertiary d-flex align-items-center justify-content-center mx-auto mb-4">
                                <HelpCircle className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="h4 fw-bold mb-3">{t('support.communityTitle')}</h3>
                            <p className="text-secondary mb-4">{t('support.communityDesc')}</p>
                            <a href="https://github.com/SmarterCL" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                                {t('support.communityButton')}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
