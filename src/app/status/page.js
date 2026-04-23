"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function StatusPage() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        setStatus(data);
        setLoading(false);
      } catch (e) {
        console.error('Error:', e);
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (s) => {
    if (s === 'operational') return '#22c55e';
    if (s === 'degraded') return '#f59e0b';
    if (s === 'down') return '#ef4444';
    return '#6b7280';
  };

  const getStatusText = (s) => {
    if (s === 'operational') return '🟢 Operational';
    if (s === 'degraded') return '🟡 Degraded Performance';
    if (s === 'down') return '🔴 System Down';
    return '⚪ Unknown';
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}>
        <h1>System Status</h1>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>System Status - SmarterBOT</title>
      </Head>
      
      <div style={{ padding: 20, maxWidth: 800, margin: '0 auto', fontFamily: 'system-ui' }}>
        <h1 style={{ fontSize: 32, marginBottom: 30 }}>System Status</h1>
        
        {/* Status Badge */}
        <div style={{ 
          padding: 30, 
          background: getStatusColor(status?.status) + '20',
          border: `2px solid ${getStatusColor(status?.status)}`,
          borderRadius: 12,
          marginBottom: 30,
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: 48, margin: '0 0 10px 0' }}>
            {getStatusText(status?.status)}
          </h2>
          <p style={{ fontSize: 18, margin: 0, color: '#666' }}>
            {status?.message}
          </p>
          <p style={{ fontSize: 14, margin: '20px 0 0 0', color: '#999' }}>
            Last updated: {new Date(status?.lastUpdate).toLocaleString()}
          </p>
        </div>
        
        {/* Metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 30 }}>
          <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8 }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Uptime</h3>
            <p style={{ fontSize: 36, margin: 0, fontWeight: 'bold' }}>{status?.uptime || 0}%</p>
          </div>
          
          <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8 }}>
            <h3 style={{ margin: '0 0 10px 0' }}>Active Agents</h3>
            <p style={{ fontSize: 36, margin: 0, fontWeight: 'bold' }}>
              {status?.activeAgents || 0} / {status?.totalAgents || 0}
            </p>
          </div>
        </div>
        
        {/* Embed Code */}
        <div style={{ padding: 20, background: '#f8f8f8', borderRadius: 8 }}>
          <h3 style={{ margin: '0 0 10px 0' }}>Embed Status Badge</h3>
          <p style={{ fontSize: 14, color: '#666', marginBottom: 10 }}>
            Add this to your website:
          </p>
          <code style={{ display: 'block', padding: 15, background: '#fff', borderRadius: 4, fontSize: 12 }}>
            {'<iframe src="https://smarterbot.store/status-badge" style="border:none;width:300px;height:60px"></iframe>'}
          </code>
        </div>
        
        {/* Auto-refresh */}
        <div style={{ textAlign: 'center', marginTop: 20, color: '#999', fontSize: 12 }}>
          🔄 Auto-refreshing every 10 seconds
        </div>
      </div>
    </>
  );
}
