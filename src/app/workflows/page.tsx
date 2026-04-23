'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Filter, Download, Star, GitBranch, ExternalLink, Zap, ShoppingCart, TrendingUp, Server, Code, Globe, MessageSquare, Cloud, Database, Shield, BarChart3, Mail, Calendar, FileText, Users, Layers, Phone } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface Workflow {
    id: string;
    name: string;
    description: string;
    category: string;
    nodes: number;
    downloads: string;
    rating: number;
    icon: any;
    image: string;
    price?: string;
}

export default function Workflows() {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const workflows: Workflow[] = [
        {
            id: '1',
            name: 'E-commerce Order Processing',
            description: 'Automatically process orders from your online store and sync with Odoo ERP',
            category: 'ecommerce',
            nodes: 12,
            downloads: '2.4k',
            rating: 4.9,
            icon: ShoppingCart,
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
            price: '$49',
        },
        {
            id: '2',
            name: 'Meta Ads Lead Capture',
            description: 'Capture leads from Meta Ads and automatically add to your CRM',
            category: 'marketing',
            nodes: 8,
            downloads: '1.8k',
            rating: 4.8,
            icon: TrendingUp,
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
            price: '$39',
        },
        {
            id: '3',
            name: 'Server Monitoring Alerts',
            description: 'Monitor server health and send alerts via multiple channels',
            category: 'infrastructure',
            nodes: 15,
            downloads: '1.2k',
            rating: 4.7,
            icon: Server,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            price: '$59',
        },
        {
            id: '4',
            name: 'Custom API Integration',
            description: 'Connect any API with your existing tools and automate data flow',
            category: 'development',
            nodes: 10,
            downloads: '950',
            rating: 4.6,
            icon: Code,
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            price: '$79',
        },
        {
            id: '5',
            name: 'Domain Registration Automation',
            description: 'Automate domain registration and DNS configuration',
            category: 'domains',
            nodes: 7,
            downloads: '800',
            rating: 4.5,
            icon: Globe,
            image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&q=80',
            price: '$29',
        },
        {
            id: '6',
            name: 'Customer Support Ticket Router',
            description: 'Automatically route support tickets to the right team',
            category: 'support',
            nodes: 9,
            downloads: '1.5k',
            rating: 4.8,
            icon: MessageSquare,
            image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&q=80',
            price: '$45',
        },
        {
            id: '7',
            name: 'Cloud Backup Automation',
            description: 'Automated backups to multiple cloud providers with encryption',
            category: 'infrastructure',
            nodes: 11,
            downloads: '1.1k',
            rating: 4.7,
            icon: Cloud,
            image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800&q=80',
            price: '$55',
        },
        {
            id: '8',
            name: 'Database Sync Pipeline',
            description: 'Real-time database synchronization across multiple sources',
            category: 'database',
            nodes: 14,
            downloads: '890',
            rating: 4.6,
            icon: Database,
            image: 'https://images.unsplash.com/photo-1544383835-b513e6c987c1?w=800&q=80',
            price: '$69',
        },
        {
            id: '9',
            name: 'Security Compliance Monitor',
            description: 'Automated security monitoring and compliance reporting',
            category: 'security',
            nodes: 16,
            downloads: '750',
            rating: 4.8,
            icon: Shield,
            image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
            price: '$89',
        },
        {
            id: '10',
            name: 'Analytics Dashboard Builder',
            description: 'Create real-time analytics dashboards with automated reporting',
            category: 'analytics',
            nodes: 13,
            downloads: '1.3k',
            rating: 4.7,
            icon: BarChart3,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
            price: '$65',
        },
        {
            id: '11',
            name: 'Email Marketing Automation',
            description: 'Build sophisticated email marketing and notification workflows',
            category: 'marketing',
            nodes: 10,
            downloads: '1.6k',
            rating: 4.6,
            icon: Mail,
            image: 'https://images.unsplash.com/photo-1563986768494-4dee27a60415?w=800&q=80',
            price: '$42',
        },
        {
            id: '12',
            name: 'Calendar Sync Manager',
            description: 'Automate scheduling and calendar management across platforms',
            category: 'productivity',
            nodes: 8,
            downloads: '920',
            rating: 4.5,
            icon: Calendar,
            image: 'https://images.unsplash.com/photo-1506784983877-45594efa6c8e?w=800&q=80',
            price: '$35',
        },
        {
            id: '13',
            name: 'Document Processing Pipeline',
            description: 'Automate document generation, parsing, and workflow approval',
            category: 'productivity',
            nodes: 12,
            downloads: '880',
            rating: 4.4,
            icon: FileText,
            image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
            price: '$52',
        },
        {
            id: '14',
            name: 'Team Collaboration Hub',
            description: 'Streamline team communication and project management workflows',
            category: 'productivity',
            nodes: 11,
            downloads: '1.4k',
            rating: 4.7,
            icon: Users,
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80',
            price: '$48',
        },
        {
            id: '15',
            name: 'Odoo ERP Connector',
            description: 'Full Odoo integration for inventory, sales, and accounting',
            category: 'erp',
            nodes: 18,
            downloads: '2.1k',
            rating: 4.9,
            icon: Layers,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            price: '$99',
        },
        {
            id: '16',
            name: 'WhatsApp Business Bot',
            description: 'Automated WhatsApp responses with CRM integration',
            category: 'support',
            nodes: 9,
            downloads: '1.9k',
            rating: 4.8,
            icon: Phone,
            image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&q=80',
            price: '$56',
        },
    ];

    const categories = [
        { id: 'all', name: 'All', icon: Filter, count: workflows.length },
        { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart, count: 1 },
        { id: 'marketing', name: 'Marketing', icon: TrendingUp, count: 2 },
        { id: 'infrastructure', name: 'Infrastructure', icon: Server, count: 2 },
        { id: 'development', name: 'Development', icon: Code, count: 1 },
        { id: 'domains', name: 'Domains', icon: Globe, count: 1 },
        { id: 'support', name: 'Support', icon: MessageSquare, count: 2 },
        { id: 'database', name: 'Database', icon: Database, count: 1 },
        { id: 'security', name: 'Security', icon: Shield, count: 1 },
        { id: 'analytics', name: 'Analytics', icon: BarChart3, count: 1 },
        { id: 'productivity', name: 'Productivity', icon: Users, count: 3 },
        { id: 'erp', name: 'ERP', icon: Layers, count: 1 },
    ];

    const filteredWorkflows = workflows.filter(workflow => {
        const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            workflow.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || workflow.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <GitBranch size={14} className="me-1" />
                        {t('home.stats.workflows')}
                    </div>
                    <h1 className="display-4 fw-bold mb-4">
                        Browse {t('home.stats.workflows')}
                    </h1>
                    <p className="lead text-secondary mb-4 max-w-2xl mx-auto">
                        4,343+ production-ready automation workflows ready to deploy
                    </p>
                </div>

                {/* Stats */}
                <div className="row g-4 mb-8">
                    {[
                        { value: '4,343+', label: 'Total Workflows', icon: GitBranch },
                        { value: '365+', label: 'Categories', icon: Filter },
                        { value: '10,000+', label: 'Downloads', icon: Download },
                        { value: '4.8/5', label: 'Avg Rating', icon: Star },
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

                {/* Search and Filter */}
                <div className="row g-4 mb-8">
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text bg-bg-tertiary border-border">
                                <Search size={18} className="text-secondary" />
                            </span>
                            <input
                                type="text"
                                className="form-control bg-bg-tertiary border-border text-primary"
                                placeholder="Search workflows..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex gap-2 flex-wrap">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`btn btn-sm ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    <category.icon size={14} className="me-1" />
                                    {category.name}
                                    <span className="ms-1 opacity-75">({category.count})</span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Workflows Grid */}
                <div className="row g-4">
                    {filteredWorkflows.map((workflow) => (
                        <div key={workflow.id} className="col-md-6 col-lg-4">
                            <div className="card card-custom glass h-100 p-0 overflow-hidden">
                                <div className="position-relative" style={{ height: '180px' }}>
                                    <Image
                                        src={workflow.image}
                                        alt={workflow.name}
                                        fill
                                        className="img-cover"
                                    />
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <span className="badge bg-warning text-dark">
                                            <Star size={12} className="me-1" fill="currentColor" />
                                            {workflow.rating}
                                        </span>
                                    </div>
                                </div>
                                <div className="card-body p-4">
                                    <div className="d-flex align-items-start gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center flex-shrink-0">
                                            <workflow.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div className="flex-grow-1">
                                            <h3 className="h6 fw-bold mb-1">{workflow.name}</h3>
                                            <p className="text-secondary small mb-0">{workflow.description}</p>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center pt-3 border-top border-border">
                                        <div className="d-flex gap-3 text-secondary small">
                                            <span className="d-flex align-items-center gap-1">
                                                <Zap size={14} />
                                                {workflow.nodes} nodes
                                            </span>
                                            <span className="d-flex align-items-center gap-1">
                                                <Download size={14} />
                                                {workflow.downloads}
                                            </span>
                                        </div>
                                        <div className="text-end">
                                            <div className="fw-bold text-warning">{workflow.price}</div>
                                        </div>
                                    </div>
                                    <div className="d-grid gap-2 mt-3">
                                        <button className="btn btn-primary btn-sm">
                                            <ExternalLink size={14} className="me-2" />
                                            View Details
                                        </button>
                                        <button className="btn btn-outline-secondary btn-sm">
                                            <Download size={14} className="me-2" />
                                            Download
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <div className="card card-custom glass p-6 max-w-2xl mx-auto">
                        <h2 className="h3 fw-bold mb-3">Want More Workflows?</h2>
                        <p className="text-secondary mb-4">
                            Get access to all 4,343+ production-ready workflows with our premium plan
                        </p>
                        <div className="d-flex gap-3 justify-content-center flex-wrap">
                            <Link href="/pricing" className="btn btn-warning text-dark">
                                View Pricing
                            </Link>
                            <Link href="/contact" className="btn btn-outline-secondary">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
