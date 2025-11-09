import fs from 'node:fs';
import path from 'node:path';
import CopyButton from '../components/CopyButton';

function getPineScript(): string {
  const file = path.join(process.cwd(), 'public', 'ai_nifty_levels.pine');
  try {
    return fs.readFileSync(file, 'utf8');
  } catch {
    return '// Pine Script will appear here after build.';
  }
}

export default function Page() {
  const pine = getPineScript();
  return (
    <main style={{
      maxWidth: 960,
      margin: '0 auto',
      padding: '2rem',
      fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial'
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 700 }}>Nifty 50 AI Support/Resistance Agent</h1>
      <p style={{ marginTop: '0.5rem', color: '#444' }}>
        Copy the Pine Script below into TradingView (Pine Editor ? New ? Paste ? Add to chart).
      </p>

      <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.75rem' }}>
        <a href="/ai_nifty_levels.pine" download className="button">Download .pine</a>
        <CopyButton text={pine} />
      </div>

      <pre style={{
        marginTop: '1rem',
        background: '#0b1021',
        color: '#e3e9ff',
        padding: '1rem',
        borderRadius: 8,
        overflowX: 'auto',
        whiteSpace: 'pre'
      }}><code>{pine}</code></pre>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>How it works</h2>
        <ul style={{ marginTop: '0.5rem', lineHeight: 1.7 }}>
          <li>Detects the first 5-minute candle of each trading day (IST).</li>
          <li>Computes four resistance levels from the high (A1..A4) and four support levels from the low (B1..B4).</li>
          <li>Analyzes reactions: rejections, retests, breakouts, consolidations.</li>
          <li>Tracks which levels produce the strongest moves and shows running stats.</li>
          <li>Generates buy/sell signals and alert conditions with clear messages.</li>
        </ul>
      </section>

      
    </main>
  );
}
