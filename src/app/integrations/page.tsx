'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
    Zap, ShoppingCart, TrendingUp, Server, Code, Globe, 
    MessageSquare, Database, Cloud, Shield, Layers, 
    BarChart3, Mail, Calendar, FileText, Users,
    ArrowRight, ExternalLink, Star
} from 'lucide-react';

interface Integration {
    id: string;
    name: string;
    description: string;
    category: string;
    icon: any;
    image: string;
    rating: number;
    workflows: string;
    popular?: boolean;
}

export default function Integrations() {
    const { t } = useLanguage();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const integrations: Integration[] = [
        {
            id: '1',
            name: 'Odoo ERP',
            description: 'Complete ERP integration for inventory, sales, and accounting automation',
            category: 'erp',
            icon: Layers,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            rating: 4.9,
            workflows: '245+',
            popular: true,
        },
        {
            id: '2',
            name: 'Chatwoot',
            description: 'Customer engagement platform with live chat and omnichannel support',
            category: 'support',
            icon: MessageSquare,
            image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&q=80',
            rating: 4.8,
            workflows: '180+',
            popular: true,
        },
        {
            id: '3',
            name: 'Meta Ads',
            description: 'Automate Facebook and Instagram ad campaigns with AI-powered optimization',
            category: 'marketing',
            icon: TrendingUp,
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
            rating: 4.9,
            workflows: '320+',
            popular: true,
        },
        {
            id: '4',
            name: 'VPS Hosting',
            description: 'Deploy and manage virtual private servers with automated provisioning',
            category: 'infrastructure',
            icon: Server,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            rating: 4.7,
            workflows: '156+',
        },
        {
            id: '5',
            name: 'E-commerce',
            description: 'Connect your online store with automated order processing and inventory',
            category: 'ecommerce',
            icon: ShoppingCart,
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
            rating: 4.8,
            workflows: '289+',
            popular: true,
        },
        {
            id: '6',
            name: 'Domain Management',
            description: 'Automate domain registration, DNS configuration, and SSL certificates',
            category: 'domains',
            icon: Globe,
            image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&q=80',
            rating: 4.6,
            workflows: '98+',
        },
        {
            id: '7',
            name: 'Custom API',
            description: 'Build custom integrations with any REST or GraphQL API',
            category: 'development',
            icon: Code,
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            rating: 4.7,
            workflows: '412+',
        },
        {
            id: '8',
            name: 'Database Sync',
            description: 'Synchronize data across multiple databases in real-time',
            category: 'database',
            icon: Database,
            image: 'https://images.unsplash.com/photo-1544383835-b513e6c987c1?w=800&q=80',
            rating: 4.5,
            workflows: '134+',
        },
        {
            id: '9',
            name: 'Cloud Storage',
            description: 'Automate file uploads and backups to cloud storage providers',
            category: 'infrastructure',
            icon: Cloud,
            image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80',
            rating: 4.6,
            workflows: '167+',
        },
        {
            id: '10',
            name: 'Security & Compliance',
            description: 'Automate security monitoring and compliance reporting',
            category: 'security',
            icon: Shield,
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
            rating: 4.8,
            workflows: '89+',
        },
        {
            id: '11',
            name: 'Analytics Dashboard',
            description: 'Create real-time analytics dashboards with automated reporting',
            category: 'analytics',
            icon: BarChart3,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            rating: 4.7,
            workflows: '201+',
        },
        {
            id: '12',
            name: 'Email Automation',
            description: 'Build sophisticated email marketing and notification workflows',
            category: 'marketing',
            icon: Mail,
            image: 'https://images.unsplash.com/photo-1563986768494-4dee27a60415?w=800&q=80',
            rating: 4.6,
            workflows: '178+',
        },
        {
            id: '13',
            name: 'Calendar Sync',
            description: 'Automate scheduling and calendar management across platforms',
            category: 'productivity',
            icon: Calendar,
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa6c8e?w=800&q=80',
            rating: 4.5,
            workflows: '112+',
        },
        {
            id: '14',
            name: 'Document Processing',
            description: 'Automate document generation, parsing, and workflow approval',
            category: 'productivity',
            icon: FileText,
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
            rating: 4.4,
            workflows: '145+',
        },
        {
            id: '15',
            name: 'Team Collaboration',
            description: 'Streamline team communication and project management workflows',
            category: 'productivity',
            icon: Users,
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            rating: 4.7,
            workflows: '223+',
        },
        {
            id: '16',
            name: 'n8n Workflows',
            description: 'Native n8n integration for advanced workflow automation',
            category: 'development',
            icon: Zap,
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            rating: 4.9,
            workflows: '567+',
            popular: true,
        },
    ];

    const categories = [
        { id: 'all', name: 'All Integrations', count: integrations.length },
        { id: 'erp', name: 'ERP', count: 1 },
        { id: 'support', name: 'Support', count: 1 },
        { id: 'marketing', name: 'Marketing', count: 2 },
        { id: 'infrastructure', name: 'Infrastructure', count: 2 },
        { id: 'ecommerce', name: 'E-commerce', count: 1 },
        { id: 'domains', name: 'Domains', count: 1 },
        { id: 'development', name: 'Development', count: 2 },
        { id: 'database', name: 'Database', count: 1 },
        { id: 'security', name: 'Security', count: 1 },
        { id: 'analytics', name: 'Analytics', count: 1 },
        { id: 'productivity', name: 'Productivity', count: 3 },
    ];

    const filteredIntegrations = selectedCategory === 'all' 
        ? integrations 
        : integrations.filter(i => i.category === selectedCategory);

    const popularIntegrations = integrations.filter(i => i.popular);

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <Zap size={14} className="me-1" />
                        {t('home.integrations.title')} {t('home.integrations.titleAccent')}
                    </div>
                    <h1 className="display-4 fw-bold mb-4">
                        {t('home.integrations.title')} & {t('home.integrations.titleAccent')}
                    </h1>
                    <p className="lead text-secondary mb-4 max-w-3xl mx-auto">
                        {t('home.integrations.description')} Connect Claw OS with 365+ tools and services to automate your entire business workflow.
                    </p>
                </div>

                {/* Stats */}
                <div className="row g-4 mb-12">
                    {[
                        { value: '365+', label: 'Integrations', icon: Layers },
                        { value: '4,343+', label: 'Workflows', icon: Zap },
                        { value: '10,000+', label: 'Active Users', icon: Users },
                        { value: '99.9%', label: 'Uptime', icon: Shield },
                    ].map((stat, index) => (
                        <div key={index} className="col-6 col-md-3">
                            <div className="card card-custom glass p-4 text-center h-100">
                                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                                <div className="text-gradient fw-bold display-6">{stat.value}</div>
                                <div className="text-secondary small">{stat.label}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Popular Integrations */}
                <div className="mb-12">
                    <h2 className="h3 fw-bold mb-4">Popular Integrations</h2>
                    <div className="row g-4">
                        {popularIntegrations.map((integration) => (
                            <div key={integration.id} className="col-md-6 col-lg-3">
                                <div className="card card-custom glass h-100 p-0 overflow-hidden">
                                    <div className="position-relative" style={{ height: '180px' }}>
                                        <Image
                                            src={integration.image}
                                            alt={integration.name}
                                            fill
                                            className="img-cover"
                                        />
                                        <div className="position-absolute top-0 end-0 m-3">
                                            <span className="badge bg-warning text-dark">
                                                <Star size={12} className="me-1" fill="currentColor" />
                                                {integration.rating}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="d-flex align-items-center gap-2 mb-2">
                                            <integration.icon className="w-5 h-5 text-primary" />
                                            <h3 className="h5 fw-bold mb-0">{integration.name}</h3>
                                        </div>
                                        <p className="text-secondary small mb-3">{integration.description}</p>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span className="badge bg-bg-tertiary text-secondary">
                                                <Zap size={12} className="me-1" />
                                                {integration.workflows} workflows
                                            </span>
                                            <Link href="/claw-os" className="btn btn-sm btn-primary">
                                                Connect
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <div className="d-flex gap-2 flex-wrap justify-content-center">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`btn btn-sm ${
                                    selectedCategory === category.id 
                                        ? 'btn-primary' 
                                        : 'btn-outline-secondary'
                                }`}
                                onClick={() => setSelectedCategory(category.id)}
                            >
                                {category.name}
                                <span className="ms-2 opacity-75">({category.count})</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* All Integrations Grid */}
                <div className="row g-4">
                    {filteredIntegrations.map((integration) => (
                        <div key={integration.id} className="col-md-6 col-lg-4">
                            <div className="card card-custom glass h-100 p-0 overflow-hidden">
                                <div className="position-relative" style={{ height: '200px' }}>
                                    <Image
                                        src={integration.image}
                                        alt={integration.name}
                                        fill
                                        className="img-cover"
                                    />
                                    <div className="position-absolute bottom-0 start-0 w-100 p-3" 
                                        style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-white d-flex align-items-center justify-content-center">
                                                <integration.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <h3 className="h6 fw-bold mb-0 text-white">{integration.name}</h3>
                                        </div>
                                    </div>
                                    {integration.popular && (
                                        <div className="position-absolute top-0 end-0 m-3">
                                            <span className="badge bg-warning text-dark">
                                                <Star size={12} className="me-1" fill="currentColor" />
                                                Popular
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="card-body p-4">
                                    <p className="text-secondary small mb-3">{integration.description}</p>
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <div className="d-flex align-items-center gap-2 text-secondary small">
                                            <Zap size={14} />
                                            <span>{integration.workflows} workflows</span>
                                        </div>
                                        <div className="d-flex align-items-center gap-1 text-warning">
                                            <Star size={14} fill="currentColor" />
                                            <span className="small fw-bold">{integration.rating}</span>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2">
                                        <Link href="/claw-os" className="btn btn-primary btn-sm">
                                            Connect Integration
                                        </Link>
                                        <button className="btn btn-outline-secondary btn-sm">
                                            <ExternalLink size={14} className="me-2" />
                                            View Documentation
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="text-center mt-12">
                    <div className="card card-custom glass p-6 max-w-3xl mx-auto">
                        <h2 className="h3 fw-bold mb-3">Need a Custom Integration?</h2>
                        <p className="text-secondary mb-4">
                            Can't find the integration you need? Our team can build custom connectors for your specific business requirements.
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Link href="/contact" className="btn btn-primary">
                                Request Integration
                                <ArrowRight className="w-5 h-5 ms-2" />
                            </Link>
                            <Link href="/docs" className="btn btn-outline-secondary">
                                API Documentation
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Integration Partners */}
                <div className="mt-12">
                    <h2 className="h4 fw-bold text-center mb-6">Trusted by Industry Leaders</h2>
                    <div className="row g-4">
                        {[
                            { name: 'Odoo', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
                            { name: 'Meta', image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=80' },
                            { name: 'n8n', image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=80' },
                            { name: 'Chatwoot', image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=400&q=80' },
                            { name: 'AWS', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&q=80' },
                            { name: 'Google', image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80' },
                        ].map((partner, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-2">
                                <div className="card card-custom glass p-4 text-center h-100">
                                    <div className="position-relative" style={{ height: '80px' }}>
                                        <Image
                                            src={partner.image}
                                            alt={partner.name}
                                            fill
                                            className="img-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
