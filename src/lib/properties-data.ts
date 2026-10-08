export interface Agent {
  name: string;
  avatar: string;
  avatarAlt: string;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  area: string;
  price: string;
  priceValue: number;
  beds: number;
  baths: number;
  sqft: string;
  image: string;
  imageAlt: string;
  tag: 'For Sale' | 'To Let';
  type: 'House' | 'Flat' | 'Penthouse' | 'Townhouse';
  daysOnMarket: number;
  agent: Agent;
}

export const allProperties: Property[] = [
{
  id: 1,
  title: 'Notting Hill Garden House',
  location: 'Notting Hill, W11',
  area: 'West London',
  price: '£3.2M',
  priceValue: 3200000,
  beds: 4,
  baths: 3,
  sqft: '2,100',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1fecb3640-1768171241701.png',
  imageAlt: 'Elegant white Victorian townhouse exterior with black iron railings, bay windows, and lush garden in bright midday sunlight',
  tag: 'For Sale',
  type: 'House',
  daysOnMarket: 12,
  agent: { name: 'James Hartley', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_117063bc9-1772200771519.png", avatarAlt: 'Agent James Hartley' }
},
{
  id: 2,
  title: 'Chelsea Riverside Flat',
  location: 'Chelsea, SW3',
  area: 'South West London',
  price: '£6,500/mo',
  priceValue: 6500,
  beds: 2,
  baths: 2,
  sqft: '980',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_1960e50a4-1772279841732.png',
  imageAlt: 'Contemporary open-plan apartment interior with high ceilings, exposed brick, designer furniture, and floor-to-ceiling city view windows',
  tag: 'To Let',
  type: 'Flat',
  daysOnMarket: 5,
  agent: { name: 'Sophia Clarke', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11b3df0b3-1772952555612.png", avatarAlt: 'Agent Sophia Clarke' }
},
{
  id: 3,
  title: 'Mayfair Penthouse Suite',
  location: 'Mayfair, W1K',
  area: 'Central London',
  price: '£8.75M',
  priceValue: 8750000,
  beds: 5,
  baths: 4,
  sqft: '3,400',
  image: 'https://img.rocket.new/generatedImages/rocket_gen_img_18dd73af8-1773061239918.png',
  imageAlt: 'Luxury penthouse rooftop terrace with panoramic London skyline views, designer outdoor furniture, and warm evening lighting',
  tag: 'For Sale',
  type: 'Penthouse',
  daysOnMarket: 3,
  agent: { name: 'Oliver Bennett', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_117063bc9-1772200771519.png", avatarAlt: 'Agent Oliver Bennett' }
},
{
  id: 4,
  title: 'Kensington Period Townhouse',
  location: 'Kensington, W8',
  area: 'West London',
  price: '£5.1M',
  priceValue: 5100000,
  beds: 5,
  baths: 4,
  sqft: '2,850',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9a7dbf1-1780486222949.png",
  imageAlt: 'Grand period townhouse in Kensington with white stucco facade, columned entrance, and mature trees lining the street',
  tag: 'For Sale',
  type: 'Townhouse',
  daysOnMarket: 21,
  agent: { name: 'Emily Watson', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13b8ad2b2-1784522525388.png", avatarAlt: 'Agent Emily Watson' }
},
{
  id: 5,
  title: 'Shoreditch Loft Apartment',
  location: 'Shoreditch, E1',
  area: 'East London',
  price: '£3,800/mo',
  priceValue: 3800,
  beds: 1,
  baths: 1,
  sqft: '720',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1a5673d2a-1772196676072.png",
  imageAlt: 'Industrial-style loft apartment with exposed brick walls, polished concrete floors, and large warehouse windows flooding the space with natural light',
  tag: 'To Let',
  type: 'Flat',
  daysOnMarket: 8,
  agent: { name: 'Marcus Reid', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_117063bc9-1772200771519.png", avatarAlt: 'Agent Marcus Reid' }
},
{
  id: 6,
  title: 'Hampstead Heath Cottage',
  location: 'Hampstead, NW3',
  area: 'North London',
  price: '£2.4M',
  priceValue: 2400000,
  beds: 3,
  baths: 2,
  sqft: '1,650',
  image: "https://images.unsplash.com/photo-1588933505258-28b2fbd2a2a3",
  imageAlt: 'Charming detached cottage near Hampstead Heath with red brick exterior, cottage garden, and traditional sash windows',
  tag: 'For Sale',
  type: 'House',
  daysOnMarket: 34,
  agent: { name: 'Sophia Clarke', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_11b3df0b3-1772952555612.png", avatarAlt: 'Agent Sophia Clarke' }
},
{
  id: 7,
  title: 'Canary Wharf River View Flat',
  location: 'Canary Wharf, E14',
  area: 'East London',
  price: '£4,200/mo',
  priceValue: 4200,
  beds: 2,
  baths: 2,
  sqft: '1,050',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c9430f17-1773061239945.png",
  imageAlt: 'Modern high-rise apartment with floor-to-ceiling windows overlooking the Thames and Canary Wharf financial district skyline',
  tag: 'To Let',
  type: 'Flat',
  daysOnMarket: 2,
  agent: { name: 'James Hartley', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_117063bc9-1772200771519.png", avatarAlt: 'Agent James Hartley' }
},
{
  id: 8,
  title: 'Belgravia Stucco Townhouse',
  location: 'Belgravia, SW1X',
  area: 'Central London',
  price: '£12.5M',
  priceValue: 12500000,
  beds: 6,
  baths: 5,
  sqft: '4,200',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_105eed571-1777571670549.png",
  imageAlt: 'Magnificent white stucco Belgravia townhouse with ornate iron balconies, grand entrance portico, and immaculate private garden',
  tag: 'For Sale',
  type: 'Townhouse',
  daysOnMarket: 17,
  agent: { name: 'Oliver Bennett', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_117063bc9-1772200771519.png", avatarAlt: 'Agent Oliver Bennett' }
},
{
  id: 9,
  title: 'Islington Georgian Flat',
  location: 'Islington, N1',
  area: 'North London',
  price: '£2,950/mo',
  priceValue: 2950,
  beds: 2,
  baths: 1,
  sqft: '860',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_172d78b41-1781457341591.png",
  imageAlt: 'Bright Georgian conversion flat in Islington with original cornicing, high ceilings, and period fireplace in the living room',
  tag: 'To Let',
  type: 'Flat',
  daysOnMarket: 9,
  agent: { name: 'Emily Watson', avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_13b8ad2b2-1784522525388.png", avatarAlt: 'Agent Emily Watson' }
}];
