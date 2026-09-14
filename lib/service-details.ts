import {
  BriefcaseBusiness,
  CandlestickChart,
  Compass,
  GraduationCap,
  Landmark,
  ShieldCheck,
  Target,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';

export type ServiceDetail = {
  number: string;
  slug: string;
  title: string;
  eyebrow: string;
  heroTitle: string;
  heroEmphasis: string;
  description: string;
  focus: string;
  approach: string;
  useCase: string;
  overviewTitle: string;
  overviewEmphasis: string;
  overview: string[];
  benefits: string[];
  icon: LucideIcon;
};

export const serviceDetails: ServiceDetail[] = [
  {
    number: '02',
    slug: 'intraday-btst-calls',
    title: 'Intraday & BTST Calls',
    eyebrow: 'Research service 02',
    heroTitle: 'Trade ideas,',
    heroEmphasis: 'with defined levels.',
    description: 'Structured intraday and buy-today-sell-tomorrow research calls with clear trade parameters and market context.',
    focus: 'Time-bound market opportunities',
    approach: 'Defined entry, target and risk levels',
    useCase: 'Active participants seeking a structured research view',
    overviewTitle: 'A more disciplined',
    overviewEmphasis: 'trading process.',
    overview: [
      'Short-term market participation benefits from clear levels, a defined horizon and a view of the prevailing market context.',
      'The research is an input for your own decision-making. Consider suitability, risk tolerance and capital allocation before acting.',
    ],
    benefits: ['Review defined entry, target and stop-loss levels.', 'Place each idea within the day’s market context.', 'Use a stated time horizon to support planning.', 'Apply your own risk limits before taking a position.'],
    icon: CandlestickChart,
  },
  {
    number: '03',
    slug: 'options-trading-advisory',
    title: 'Options Trading Advisory',
    eyebrow: 'Research service 03',
    heroTitle: 'Options research,',
    heroEmphasis: 'with risk in view.',
    description: 'Options research for index and stock participants, with clarity on strike selection, expiry and risk considerations.',
    focus: 'Index and stock option structures',
    approach: 'Strike, expiry and strategy observations',
    useCase: 'Participants evaluating options with a defined process',
    overviewTitle: 'Structure before',
    overviewEmphasis: 'speculation.',
    overview: [
      'Options require attention to time, volatility and the relationship between risk and reward. The service frames these elements in a structured research view.',
      'It does not replace your assessment of suitability or provide assured outcomes. Use the material alongside your own risk controls.',
    ],
    benefits: ['Understand the research rationale behind a strike selection.', 'Review expiry and volatility considerations.', 'Differentiate a research view from an assured-return claim.', 'Set position sizing and loss limits that suit you.'],
    icon: Target,
  },
  {
    number: '04',
    slug: 'index-trading',
    title: 'Index Trading',
    eyebrow: 'Research service 04',
    heroTitle: 'Read the index,',
    heroEmphasis: 'with perspective.',
    description: 'Research-led Nifty and Bank Nifty ideas designed around defined risk, market structure and changing conditions.',
    focus: 'Nifty and Bank Nifty market structure',
    approach: 'Price action, levels and participation',
    useCase: 'Participants seeking a focused index research view',
    overviewTitle: 'Index context',
    overviewEmphasis: 'made clearer.',
    overview: [
      'Index movement reflects a changing mix of breadth, sector leadership and participant behaviour. This service brings those observations together in one focused view.',
      'Research is provided to support considered decisions; it should be evaluated against your objectives and risk capacity.',
    ],
    benefits: ['Track key index levels and market structure.', 'Review sector and participation context.', 'Use a defined research framework for preparation.', 'Keep your own risk limits central to every decision.'],
    icon: TrendingUp,
  },
  {
    number: '05',
    slug: 'delivery-swing-trading',
    title: 'Delivery & Swing Trading',
    eyebrow: 'Research service 05',
    heroTitle: 'Ideas with time',
    heroEmphasis: 'to develop.',
    description: 'Curated delivery and swing trade research for investors seeking quality opportunities with a clearer holding perspective.',
    focus: 'Delivery and swing trade opportunities',
    approach: 'Technical structure and business context',
    useCase: 'Participants with a multi-day or longer horizon',
    overviewTitle: 'Patience, backed by',
    overviewEmphasis: 'a process.',
    overview: [
      'Delivery and swing decisions need more than a single price point. The research considers the broader structure, relevant context and a realistic holding horizon.',
      'You should independently evaluate every idea for suitability, especially where capital, timeframe and risk tolerance differ.',
    ],
    benefits: ['Review ideas through a defined holding horizon.', 'Balance technical observations with broader context.', 'Plan entries and risk limits in advance.', 'Keep allocation aligned with your own objectives.'],
    icon: Compass,
  },
  {
    number: '06',
    slug: 'commodity-advisory-mcx',
    title: 'Commodity Advisory (MCX)',
    eyebrow: 'Research service 06',
    heroTitle: 'Commodities,',
    heroEmphasis: 'in global context.',
    description: 'Macro-aware commodity research across Gold, Silver, Crude Oil and Natural Gas, presented with structured market context.',
    focus: 'MCX commodities and global drivers',
    approach: 'Macro context, price action and key levels',
    useCase: 'Participants reviewing commodity market opportunities',
    overviewTitle: 'See the forces',
    overviewEmphasis: 'behind the move.',
    overview: [
      'Commodity prices can respond quickly to global data, currencies, supply conditions and geopolitical developments. This service places the day’s price action in that broader setting.',
      'Every participant should consider leverage, volatility and suitability before acting on any research view.',
    ],
    benefits: ['Connect local MCX prices with relevant global context.', 'Review technical levels alongside macro developments.', 'Recognise the impact of volatility and leverage.', 'Use independent risk controls for every position.'],
    icon: Landmark,
  },
  {
    number: '07',
    slug: 'risk-management-training',
    title: 'Risk Management Training',
    eyebrow: 'Research service 07',
    heroTitle: 'Protect the process',
    heroEmphasis: 'before the position.',
    description: 'Practical risk-management training built around capital protection, position sizing and a more resilient market process.',
    focus: 'Position sizing and capital protection',
    approach: 'Practical risk frameworks and exercises',
    useCase: 'Participants building durable market habits',
    overviewTitle: 'Risk management',
    overviewEmphasis: 'is a skill.',
    overview: [
      'A consistent market process starts with deciding what you can lose before focusing on what you may gain. This training makes those choices more explicit and repeatable.',
      'The material is educational in nature and should be adapted to your own financial situation and objectives.',
    ],
    benefits: ['Build a practical position-sizing framework.', 'Define loss limits before entering a trade.', 'Understand concentration and correlation risks.', 'Create routines that support disciplined review.'],
    icon: ShieldCheck,
  },
  {
    number: '08',
    slug: 'learning-programmes-courses',
    title: 'Learning Programmes & Courses',
    eyebrow: 'Research service 08',
    heroTitle: 'Learn the market,',
    heroEmphasis: 'build your process.',
    description: 'Structured learning tracks that take market participants from core concepts to applied analysis and practical routines.',
    focus: 'Foundational to applied market learning',
    approach: 'Structured modules and practical examples',
    useCase: 'Learners building market knowledge step by step',
    overviewTitle: 'Learning that',
    overviewEmphasis: 'stays practical.',
    overview: [
      'The programmes are designed to make market concepts easier to understand, question and apply. Each track builds from fundamentals toward a clearer analytical process.',
      'Learning is not a substitute for evaluating financial suitability. Apply every concept carefully and in line with your own circumstances.',
    ],
    benefits: ['Learn in a clear sequence, from basics onward.', 'Connect concepts to practical market examples.', 'Build a repeatable research routine.', 'Continue at a pace that supports understanding.'],
    icon: GraduationCap,
  },
  {
    number: '09',
    slug: 'market-mentorship-workshops',
    title: 'Market Mentorship & Workshops',
    eyebrow: 'Research service 09',
    heroTitle: 'Practice with',
    heroEmphasis: 'more clarity.',
    description: 'Live, practical sessions that help you build research habits, sharpen decision-making and learn from real market scenarios.',
    focus: 'Live market learning and practical review',
    approach: 'Interactive sessions, examples and discussion',
    useCase: 'Participants looking to improve their market process',
    overviewTitle: 'Turn insight into',
    overviewEmphasis: 'a working habit.',
    overview: [
      'Workshops and mentorship sessions create room to ask better questions, observe a structured process and reflect on how decisions are made.',
      'The sessions are educational and do not remove the need for your own independent judgement and risk assessment.',
    ],
    benefits: ['Learn through practical market scenarios.', 'Develop a more consistent review routine.', 'Ask questions in a structured learning setting.', 'Use lessons to strengthen your own decision process.'],
    icon: BriefcaseBusiness,
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
