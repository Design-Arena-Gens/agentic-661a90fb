# Nifty 50 AI S/R Agent

This project deploys a simple website that provides a TradingView Pine Script indicator for the Nifty 50. The indicator:

- Computes the high (A) and low (B) of the first 5-minute candle each trading day (IST)
- Builds four resistance (A1..A4) and four support (B1..B4) levels from those values
- Detects reactions (rejections, retests, breakouts, consolidations)
- Learns which levels produce stronger moves via rolling statistics
- Emits buy/sell signals with alert conditions

## Use in TradingView

1. Open TradingView → any Nifty 50 symbol → timeframe 5m or any
2. Pine Editor → New → paste the code from the homepage or download `public/ai_nifty_levels.pine`
3. Click Add to chart
4. Configure inputs if desired (tolerance, learning window, etc.)

## Local development

```bash
npm install
npm run build
npm start
```

## Deploy

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-661a90fb
```
