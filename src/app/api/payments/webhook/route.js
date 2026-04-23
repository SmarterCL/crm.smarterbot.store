import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const body = await req.json();
    const { status, email, plan, subscription_id, id } = body;
    
    // Log payment event
    const logFile = path.join(process.cwd(), '../../logs/payments.jsonl');
    const event = {
      type: 'payment',
      status,
      email,
      plan,
      subscription_id,
      payment_id: id,
      timestamp: new Date().toISOString()
    };
    
    try {
      if (!fs.existsSync(path.dirname(logFile))) {
        fs.mkdirSync(path.dirname(logFile), { recursive: true });
      }
      fs.appendFileSync(logFile, JSON.stringify(event) + '\n');
    } catch (logError) {
      console.warn('Could not write to log file', logError);
    }
    
    if (status === 'paid' || status === 'accepted') {
      // Trigger n8n onboarding workflow
      try {
        await fetch('http://localhost:5679/webhook/new-client', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, plan, subscription_id })
        });
        console.log('✅ Onboarding triggered for:', email);
      } catch (e) {
        console.log('⚠️ n8n unavailable, logging only:', e.message);
      }
      
      return NextResponse.json({ ok: true, message: 'Payment processed' }, { status: 200 });
    } else {
      return NextResponse.json({ ok: true, message: 'Payment pending' }, { status: 200 });
    }
  } catch (e) {
    console.error('Payment webhook error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}
