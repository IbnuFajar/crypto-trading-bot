const c = (module.exports = {});

c.symbols = [
  {
    symbol: 'MANAUSDT',
    exchange: 'binance_futures',
    periods: ['3m', '15m', '1h'],
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
        target_percent: 3.0,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'GALAUSDT',
    exchange: 'binance_futures',
    periods: ['3m','15m', '1h'],
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
        target_percent: 3.0,
        stop_percent: 10.0
      }
    ]
  },
  {
    symbol: 'MATICUSDT',
    exchange: 'binance_futures',
    periods: ['3m', '15m', '1h'],
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
        target_percent: 3.0,
        stop_percent: 10.0
      }
    ]
  }
];
