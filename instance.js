const c = (module.exports = {});

c.symbols = [
  {
    symbol: 'SANDUSDT',
    exchange: 'binance_futures',
    periods: ['5m', '15m', '1h'],
    trade: {
      currency_capital: 400,
      strategies: [
        {
          strategy: 'dip_catcher',
          interval: '15m',
          options: {
            period: '15m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'AXSUSDT',
    exchange: 'binance_futures',
    periods: ['5m', '15m', '1h'],
    trade: {
      capital: 2,
      strategies: [
        {
          strategy: 'dip_catcher',
          interval: '15m',
          options: {
            period: '15m'
          }
        }
      ]
    },
    watchdogs: [
      {
        name: 'risk_reward_ratio',
        target_percent: 2.5,
        stop_percent: 10.0
      }
    ]
  }
];
