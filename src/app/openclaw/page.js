"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function OpenClawDashboard() {
  const [logs, setLogs] = useState([]);
  const [status, setStatus] = useState({ agents: {}, errors: [], throughput: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [logsRes, statusRes] = await Promise.all([
          fetch('/api/openclaw/logs'),
          fetch('/api/openclaw/status')
        ]);
        
        const logsData = await logsRes.json();
        const statusData = await statusRes.json();
        
        setLogs(logsData);
        setStatus(statusData);
        setLoading(false);
      } catch (e) {
        console.error('Error fetching data:', e);
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 5000); // Refresh every 5s
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status) => {
    if (status === 'success' || status === 'ok') return '✅';
    if (status === 'error') return '❌';
    if (status === 'warning') return '⚠️';
    return '⏳';
  };

  if (loading) {
    return (
      <div style={{ padding: 40, textAlign: 'center', fontFamily: 'system-ui' }}>
        <h1>🦞 OpenClaw Dashboard</h1>
        <p>Cargando...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>OpenClaw Dashboard - WACRM</title>
      </Head>
      
      <div style={{ padding: 20, maxWidth: 1200, margin: '0 auto', fontFamily: 'system-ui' }}>
        <h1 style={{ fontSize: 32, marginBottom: 30 }}>🦞 OpenClaw Live Dashboard</h1>
        
        {/* Status Overview */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 30 }}>
          <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8 }}>
            <h3 style={{ margin: '0 0 10px 0' }}>📊 Total Tasks</h3>
            <p style={{ fontSize: 36, margin: 0, fontWeight: 'bold' }}>{status.totalTasks}</p>
          </div>
          
          <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8 }}>
            <h3 style={{ margin: '0 0 10px 0' }}>⚡ Throughput</h3>
            <p style={{ fontSize: 36, margin: 0, fontWeight: 'bold' }}>{status.throughput}/min</p>
          </div>
          
          <div style={{ padding: 20, background: '#f0f0f0', borderRadius: 8 }}>
            <h3 style={{ margin: '0 0 10px 0' }}>🤖 Active Agents</h3>
            <p style={{ fontSize: 36, margin: 0, fontWeight: 'bold' }}>{Object.keys(status.agents).length}</p>
          </div>
          
          <div style={{ padding: 20, background: status.errors.length > 0 ? '#ffe0e0' : '#e0ffe0', borderRadius: 8 }}>
            <h3 style={{ margin: '0 0 10px 0' }}>🚨 Errores</h3>
            <p style={{ fontSize: 36, margin: 0, fontWeight: 'bold', color: status.errors.length > 0 ? '#c00' : '#0a0' }}>
              {status.errors.length}
            </p>
          </div>
        </div>
        
        {/* Agent Status */}
        <div style={{ marginBottom: 30 }}>
          <h2 style={{ fontSize: 24, marginBottom: 15 }}>Agent Status</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 15 }}>
            {Object.entries(status.agents).map(([agent, data]) => (
              <div key={agent} style={{ padding: 15, background: '#fff', border: '1px solid #ddd', borderRadius: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h3 style={{ margin: 0, fontSize: 18 }}>{agent}</h3>
                  <span style={{ fontSize: 24 }}>{getStatusIcon(data.status)}</span>
                </div>
                <p style={{ margin: '10px 0 0 0', fontSize: 14, color: '#666' }}>{data.objective}</p>
                <p style={{ margin: '5px 0 0 0', fontSize: 12, color: '#999' }}>
                  {new Date(data.timestamp).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Errors */}
        {status.errors.length > 0 && (
          <div style={{ marginBottom: 30 }}>
            <h2 style={{ fontSize: 24, marginBottom: 15, color: '#c00' }}>🚨 Errores Recientes</h2>
            {status.errors.slice(-5).map((error, i) => (
              <div key={i} style={{ padding: 15, background: '#ffe0e0', borderRadius: 8, marginBottom: 10 }}>
                <strong>{error.agent}</strong> - {error.objective}
                <br />
                <small style={{ color: '#666' }}>{new Date(error.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        )}
        
        {/* Live Activity Feed */}
        <div>
          <h2 style={{ fontSize: 24, marginBottom: 15 }}>📜 Live Activity Feed</h2>
          <div style={{ background: '#f8f8f8', borderRadius: 8, padding: 15, maxHeight: 400, overflowY: 'auto' }}>
            {logs.slice(0, 20).map((log, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < logs.length - 1 ? '1px solid #eee' : 'none' }}>
                <span style={{ fontSize: 20, marginRight: 10 }}>{getStatusIcon(log.status)}</span>
                <strong>{log.agent}</strong>
                <span style={{ margin: '0 10px', padding: '2px 8px', background: log.status === 'success' ? '#e0ffe0' : log.status === 'error' ? '#ffe0e0' : '#f0f0f0', borderRadius: 4 }}>
                  {log.status}
                </span>
                <span style={{ color: '#666' }}>{log.objective}</span>
                <br />
                <small style={{ color: '#999', marginLeft: 30 }}>{new Date(log.timestamp).toLocaleString()}</small>
              </div>
            ))}
          </div>
        </div>
        
        {/* Auto-refresh indicator */}
        <div style={{ textAlign: 'center', marginTop: 20, color: '#999', fontSize: 12 }}>
          🔄 Auto-refreshing every 5 seconds
        </div>
      </div>
    </>
  );
}
