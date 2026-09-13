export type Course = {
  slug: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  duration: string;
  learners: string;
  rating: string;
  title: string;
  description: string;
  video: string;
  outcome: string;
  modules: { title: string; lessons: string[] }[];
};

export const courses: Course[] = [
  {
    slug: 'stock-market-foundation',
    level: 'Beginner',
    duration: '40 Hours',
    learners: '2,400+',
    rating: '4.9',
    title: 'Stock Market Foundation Course',
    description: 'A practical starting point for understanding the market, reading company information and building an investment process.',
    video: '/course-stock-market-foundation.mp4',
    outcome: 'Build the vocabulary, checklist and confidence to begin evaluating investments responsibly.',
    modules: [
      { title: 'Market essentials', lessons: ['How Indian markets, exchanges and depositories work', 'Demat accounts, order types and settlement', 'Reading price, volume and corporate-action information'] },
      { title: 'Business and financial basics', lessons: ['Business models and sectors', 'Profit & loss, balance sheet and cash flow', 'Simple valuation concepts and ratios'] },
      { title: 'Investment process', lessons: ['Creating a research checklist', 'Diversification, allocation and review', 'Common behavioural mistakes to avoid'] },
      { title: 'Applied practice', lessons: ['Company-study walkthroughs', 'Building a watchlist', 'Capstone: write an investment thesis'] },
    ],
  },
  {
    slug: 'technical-analysis-masterclass',
    level: 'Intermediate',
    duration: '60 Hours',
    learners: '1,800+',
    rating: '4.8',
    title: 'Technical Analysis Masterclass',
    description: 'Learn to turn chart observation into a repeatable analysis routine built around price, context and risk.',
    video: '/course-technical-analysis.mp4',
    outcome: 'Develop a documented chart-reading process instead of relying on isolated signals.',
    modules: [
      { title: 'Price structure', lessons: ['Candles, swings, trends and ranges', 'Support, resistance and market structure', 'Multi-timeframe analysis'] },
      { title: 'Tools with context', lessons: ['Volume and market participation', 'Moving averages, RSI and momentum', 'Patterns: confirmation, invalidation and limits'] },
      { title: 'Trade planning', lessons: ['Defining entries, exits and invalidation', 'Reward-to-risk and position sizing', 'Using a trading journal'] },
      { title: 'Chart lab', lessons: ['Daily chart-marking drills', 'Reviewing live-market case studies', 'Capstone: create a complete trade plan'] },
    ],
  },
  {
    slug: 'pro-trader-complete-program',
    level: 'Advanced',
    duration: '90 Hours',
    learners: '940+',
    rating: '5.0',
    title: 'Pro Trader Complete Program',
    description: 'An advanced programme for building a measurable, risk-aware trading practice across cash and derivatives markets.',
    video: '/course-pro-trader.mp4',
    outcome: 'Leave with a clear playbook, a review framework and performance measures for your own trading process.',
    modules: [
      { title: 'Professional preparation', lessons: ['Market regimes and opportunity selection', 'Building playbooks for different conditions', 'Pre-market and post-market routines'] },
      { title: 'Derivatives and execution', lessons: ['Futures, options and hedging mechanics', 'Execution quality, liquidity and slippage', 'Managing open positions'] },
      { title: 'Portfolio and risk', lessons: ['Portfolio heat and correlation', 'Drawdown controls and risk limits', 'Expectancy and performance metrics'] },
      { title: 'Trading desk practicum', lessons: ['Scenario-based decision drills', 'Journal and data review', 'Capstone: present a complete trading plan'] },
    ],
  },
  {
    slug: 'options-strategy-lab',
    level: 'Advanced',
    duration: '32 Hours',
    learners: '760+',
    rating: '4.9',
    title: 'Options Strategy Lab',
    description: 'A hands-on course for constructing, comparing and managing option strategies with defined risk.',
    video: '/course-options-strategy.mp4',
    outcome: 'Know how to map a market view to an option structure and evaluate its payoff, risk and adjustments.',
    modules: [
      { title: 'Options foundation', lessons: ['Calls, puts, strike and expiry', 'Intrinsic value, time value and implied volatility', 'Greeks as decision-support tools'] },
      { title: 'Strategy construction', lessons: ['Defined-risk directional strategies', 'Spreads, condors and neutral structures', 'Payoff mapping and break-even analysis'] },
      { title: 'Position management', lessons: ['Sizing option positions', 'Adjustment versus exit decisions', 'Event risk and expiry management'] },
      { title: 'Strategy lab', lessons: ['Build strategies from market scenarios', 'Paper-trade review exercises', 'Capstone: create a strategy playbook'] },
    ],
  },
  {
    slug: 'risk-management-trading-psychology',
    level: 'Intermediate',
    duration: '36 Hours',
    learners: '1,120+',
    rating: '4.9',
    title: 'Risk Management & Trading Psychology',
    description: 'Create the operating rules that protect capital, reduce impulsive decisions and make your market process sustainable.',
    video: '/service-risk-management.mp4',
    outcome: 'Build a personal risk framework and a review routine that keeps behaviour aligned with your plan.',
    modules: [
      { title: 'Risk foundations', lessons: ['Risk of ruin and drawdown awareness', 'Position sizing and exposure limits', 'Stop-loss design and trade invalidation'] },
      { title: 'Portfolio controls', lessons: ['Correlation and concentration', 'Risk budgeting across positions', 'Planning for volatile conditions'] },
      { title: 'Decision psychology', lessons: ['Biases that affect market decisions', 'Managing fear, greed and overtrading', 'Rules for losses, wins and missed trades'] },
      { title: 'Personal operating system', lessons: ['Writing your risk policy', 'Creating pre-trade and post-trade checklists', 'Capstone: complete your trading operating manual'] },
    ],
  },
];

export function getCourse(slug: string) {
  return courses.find((course) => course.slug === slug);
}
