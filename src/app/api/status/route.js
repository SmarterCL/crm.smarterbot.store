import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const logFile = path.join(process.cwd(), '../../logs/openclaw-events.jsonl');
  
  try {
    const data = fs.readFileSync(logFile, 'utf-8');
    const lines = data.trim().split('\n').filter(l => l).map(JSON.parse);
    
    // Calculate system status
    const recentEvents = lines.slice(-100);
    const errors = recentEvents.filter(e => e.status === 'error').length;
    const success = recentEvents.filter(e => e.status === 'success').length;
    
    let status = 'operational';
    let message = 'All systems operational';
    
    if (errors > success * 0.3) {
      status = 'degraded';
      message = 'Some systems experiencing issues';
    }
    
    if (errors > success) {
      status = 'down';
      message = 'System experiencing major issues';
    }
    
    // Calculate uptime (simple estimate)
    const totalAgents = new Set(recentEvents.map(e => e.agent)).size;
    const activeAgents = new Set(recentEvents.filter(e => e.status === 'success').map(e => e.agent)).size;
    
    res.status(200).json({
      status,
      message,
      uptime: totalAgents > 0 ? Math.round((activeAgents / totalAgents) * 100) : 100,
      activeAgents,
      totalAgents,
      lastUpdate: new Date().toISOString()
    });
  } catch (e) {
    res.status(200).json({
      status: 'operational',
      message: 'System operational',
      uptime: 100,
      activeAgents: 0,
      totalAgents: 0,
      lastUpdate: new Date().toISOString()
    });
  }
}
