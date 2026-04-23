"use client";
import { useEffect, useState } from 'react';

export default function StatusBadge() {
  const [status, setStatus] = useState({ status: 'operational' });

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const res = await fetch('/api/status');
        const data = await res.json();
        setStatus(data);
      } catch (e) {}
    };
    fetchStatus();
    const interval = setInterval(fetchStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  const getColor = (s) => {
    if (s === 'operational') return '#22c55e';
    if (s === 'degraded') return '#f59e0b';
    if (s === 'down') return '#ef4444';
    return '#6b7280';
  };

  const getText = (s) => {
    if (s === 'operational') return 'Operational';
    if (s === 'degraded') return 'Degraded';
    if (s === 'down') return 'Down';
    return 'Unknown';
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '10px 20px',
      background: '#fff',
      borderRadius: 8,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      fontFamily: 'system-ui',
      width: 'fit-content'
    }}>
      <span style={{ 
        width: 12, 
        height: 12, 
        borderRadius: '50%', 
        background: getColor(status.status),
        marginRight: 10,
        display: 'inline-block'
      }} />
      <span style={{ fontSize: 14, fontWeight: 600, color: '#333' }}>
        SmarterBOT: {getText(status.status)}
      </span>
    </div>
  );
}
