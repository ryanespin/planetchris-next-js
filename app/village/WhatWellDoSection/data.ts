import { faHandsHoldingChild, faHeadSideCircuit, faMessageHeart, faPersonArmsRaised, faUserQuestion } from '@fortawesome/duotone-light-svg-icons'

import { CircleItemProps } from './CircleItem'

const items: CircleItemProps[] = [
  {
    icon: faMessageHeart,
    subtitle: 'What kind of world are we parenting in — and how do we keep our footing inside it?',
    text: 'We establish shared language, long-view thinking, and clear agreements for reflective conversation.',
    title: 'Circle 1: Orientation',
  },
  {
    icon: faHeadSideCircuit,
    subtitle: 'When do I step in, step back, or pause?',
    text: 'We examine guidance vs control, fear vs values, technology and social media, identity development, and the discipline of slowing down before reacting.',
    title: 'Circle 2: Discernment',
  },
  {
    icon: faHandsHoldingChild,
    subtitle: 'How do I stay connected as my child becomes more themselves?',
    text: 'We explore distance, repair, adolescence, emerging adulthood, and parenting toward long-term relationship rather than short-term compliance.',
    title: 'Circle 3: Relationship',
  },
  {
    icon: faUserQuestion,
    subtitle: 'How do I live my values without turning urgency into anxiety?',
    text: 'We look at activism, comparison, burnout, and how our convictions shape the climate of our homes.',
    title: 'Circle 4: Alignment',
  },
  {
    icon: faPersonArmsRaised,
    subtitle: 'What posture do I want to carry forward?',
    text: 'We integrate what we’ve practiced and clarify the kind of parent we are choosing to become.',
    title: 'Circle 5: Continuity',
  },
]

export default items
