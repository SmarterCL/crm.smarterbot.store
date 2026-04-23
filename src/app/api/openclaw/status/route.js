import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const logFile = path.join(process.cwd(), 'logs/openclaw-events.jsonl');

  try {
    const data = fs.readFileSync(logFile, 'utf-8');
    const lines = data.trim().split('\n').filter(l => l).map(JSON.parse);

    // Calculate status by agent
    const agentStatus = {};
    const errors = [];
    let totalTasks = 0;

    lines.forEach(log => {
      if (!agentStatus[log.agent]) {
        agentStatus[log.agent] = { status: log.status, timestamp: log.timestamp, objective: log.objective };
      }
      if (log.status === 'error') {
        errors.push(log);
      }
      totalTasks++;
    });

    // Calculate throughput (tasks per minute - estimate)
    const now = new Date();
    const oneMinAgo = new Date(now.getTime() - 60000);
    const recentTasks = lines.filter(l => new Date(l.timestamp) > oneMinAgo).length;

    return NextResponse.json({
      agents: agentStatus,
      errors: errors.slice(-10),
      totalTasks,
      throughput: recentTasks,
      timestamp: now.toISOString()
    });
  } catch (e) {
    return NextResponse.json({ agents: {}, errors: [], totalTasks: 0, throughput: 0 });
  }
}
