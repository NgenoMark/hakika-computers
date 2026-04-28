const createArtwork = ({ title, accent, background, glow, icon, subtitle, ribbon }) => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
      <defs>
        <linearGradient id="bg" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${background[0]}" />
          <stop offset="100%" stop-color="${background[1]}" />
        </linearGradient>
        <linearGradient id="accent" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stop-color="${accent[0]}" />
          <stop offset="100%" stop-color="${accent[1]}" />
        </linearGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="45" />
        </filter>
      </defs>
      <rect width="1200" height="900" rx="48" fill="url(#bg)" />
      <circle cx="980" cy="180" r="170" fill="${glow}" opacity="0.22" filter="url(#blur)" />
      <circle cx="180" cy="720" r="200" fill="${accent[0]}" opacity="0.18" filter="url(#blur)" />
      <rect x="82" y="82" width="1036" height="736" rx="34" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.16)" />
      <rect x="120" y="124" width="216" height="56" rx="18" fill="rgba(255,255,255,0.09)" />
      <text x="152" y="162" font-family="Segoe UI, Arial" font-size="28" font-weight="700" fill="#f4f7fb">IDEVELOPHUB</text>
      <text x="120" y="310" font-family="Segoe UI Symbol, Segoe UI, Arial" font-size="132" font-weight="800" fill="#ffffff">${icon}</text>
      <text x="120" y="430" font-family="Segoe UI, Arial" font-size="74" font-weight="800" fill="#ffffff">${title}</text>
      <text x="120" y="494" font-family="Segoe UI, Arial" font-size="34" fill="rgba(255,255,255,0.75)">${subtitle}</text>
      <rect x="120" y="598" width="350" height="98" rx="28" fill="url(#accent)" />
      <text x="162" y="660" font-family="Segoe UI, Arial" font-size="36" font-weight="700" fill="#09111f">${ribbon}</text>
      <rect x="834" y="564" width="204" height="204" rx="38" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" />
      <path d="M916 608c-34 0-62 28-62 62s28 62 62 62 62-28 62-62-28-62-62-62Zm0 22c23 0 40 17 40 40s-17 40-40 40-40-17-40-40 17-40 40-40Z" fill="#ffffff" opacity="0.9"/>
      <path d="M920 640h32v24h-32v32h-24v-32h-32v-24h32v-32h24v32Z" fill="${accent[1]}" />
    </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

const products = [
  {
    id: 1,
    name: "HP ProDesk Office Desktop",
    category: "Desktops",
    price: 540,
    rating: 4.8,
    badge: "Top Seller",
    delivery: "Ready for pickup or local delivery",
    description: "A dependable desktop setup for office work, cyber cafes, front-desk stations, and school labs.",
    features: ["Core i5", "8GB RAM", "512GB SSD"],
    image: createArtwork({
      title: "ProDesk",
      subtitle: "Reliable performance for business and study",
      icon: "🖥",
      accent: ["#ffb347", "#ff7b00"],
      background: ["#09172a", "#123e72"],
      glow: "#ff8d24",
      ribbon: "In Stock",
    }),
  },
  {
    id: 2,
    name: "Lenovo ThinkPad Laptop",
    category: "Laptops",
    price: 780,
    rating: 4.9,
    badge: "Popular",
    delivery: "Available with setup support",
    description: "A solid everyday laptop for coding, remote work, research, reports, and business travel.",
    features: ["14-inch FHD", "16GB RAM", "Backlit keyboard"],
    image: createArtwork({
      title: "ThinkPad",
      subtitle: "Portable power for work, school, and travel",
      icon: "💻",
      accent: ["#9dd9ff", "#4ea3ff"],
      background: ["#08111f", "#154b8f"],
      glow: "#5da9ff",
      ribbon: "Fast Moving",
    }),
  },
  {
    id: 3,
    name: "20,000mAh Fast Charge Power Bank",
    category: "Power Banks",
    price: 39,
    rating: 4.6,
    badge: "New Stock",
    delivery: "Same-day dispatch available",
    description: "A compact high-capacity power bank for phones, tablets, routers, and travel backup.",
    features: ["USB-C PD", "Dual output", "Travel friendly"],
    image: createArtwork({
      title: "Power Bank",
      subtitle: "Stay charged during work, travel, and outages",
      icon: "PB",
      accent: ["#7ad6c4", "#18a999"],
      background: ["#081a1b", "#124b57"],
      glow: "#18a999",
      ribbon: "Grab & Go",
    }),
  },
  {
    id: 4,
    name: "65W USB-C Laptop Charger",
    category: "Chargers",
    price: 28,
    rating: 4.7,
    badge: "Essential",
    delivery: "Pickup or courier delivery",
    description: "A replacement charger for modern laptops and phones with steady output and compact build.",
    features: ["65W output", "USB-C cable", "Surge protected"],
    image: createArtwork({
      title: "65W Charger",
      subtitle: "Reliable charging for modern devices",
      icon: "🔌",
      accent: ["#ffd27d", "#ff8d24"],
      background: ["#12161f", "#38465d"],
      glow: "#ff8d24",
      ribbon: "Ready Today",
    }),
  },
  {
    id: 5,
    name: "Mechanical RGB Keyboard",
    category: "Keyboards",
    price: 64,
    rating: 4.5,
    badge: "Customer Pick",
    delivery: "Boxed and sealed",
    description: "A satisfying mechanical keyboard for typing, gaming, and long office sessions.",
    features: ["Blue switches", "RGB lighting", "Full-size layout"],
    image: createArtwork({
      title: "Keyboard",
      subtitle: "Comfortable typing with crisp tactile feel",
      icon: "⌨",
      accent: ["#ffbf70", "#ff7a18"],
      background: ["#102235", "#1d5580"],
      glow: "#7eaefc",
      ribbon: "Fresh Stock",
    }),
  },
  {
    id: 6,
    name: "Wireless Precision Mouse",
    category: "Mouse",
    price: 18,
    rating: 4.4,
    badge: "Budget Pick",
    delivery: "Easy add-on item",
    description: "A lightweight wireless mouse for office work, browsing, presentations, and home setups.",
    features: ["Silent clicks", "2.4GHz receiver", "Long battery life"],
    image: createArtwork({
      title: "Wireless Mouse",
      subtitle: "Everyday control that feels clean and light",
      icon: "🖱",
      accent: ["#9bdcff", "#3ea0ff"],
      background: ["#071826", "#123e72"],
      glow: "#5da9ff",
      ribbon: "Easy Choice",
    }),
  },
  {
    id: 7,
    name: "High-Speed HDMI Cable",
    category: "Cables",
    price: 12,
    rating: 4.7,
    badge: "Best Value",
    delivery: "Available in multiple lengths",
    description: "A clean, dependable HDMI cable for monitors, projectors, TVs, and conference room setups.",
    features: ["4K support", "Durable jacket", "Plug and play"],
    image: createArtwork({
      title: "HDMI Cable",
      subtitle: "For displays, projectors, and media setups",
      icon: "🔗",
      accent: ["#ffbf70", "#ff7a18"],
      background: ["#0c1321", "#1c355d"],
      glow: "#ff8d24",
      ribbon: "Always Needed",
    }),
  },
  {
    id: 8,
    name: "VGA Display Cable",
    category: "Cables",
    price: 10,
    rating: 4.2,
    badge: "Legacy Gear",
    delivery: "Good for school and office setups",
    description: "A practical VGA cable for older monitors, school labs, projectors, and office replacements.",
    features: ["Secure screws", "Stable signal", "1.5m length"],
    image: createArtwork({
      title: "VGA Cable",
      subtitle: "A simple fix for older display connections",
      icon: "🔌",
      accent: ["#74d7c5", "#17b890"],
      background: ["#0a1d1d", "#145056"],
      glow: "#17b890",
      ribbon: "Office Ready",
    }),
  },
  {
    id: 9,
    name: "Studio Comfort Headphones",
    category: "Headphones",
    price: 48,
    rating: 4.6,
    badge: "Hot Item",
    delivery: "Pickup or delivery",
    description: "Comfortable headphones for online meetings, editing, gaming, and focused work sessions.",
    features: ["Padded earcups", "Clear mic", "Wired stability"],
    image: createArtwork({
      title: "Headphones",
      subtitle: "Comfort and clarity for work and play",
      icon: "🎧",
      accent: ["#ffbf70", "#ff7a18"],
      background: ["#0b1a2c", "#0f4f87"],
      glow: "#5da9ff",
      ribbon: "Popular Pick",
    }),
  },
  {
    id: 10,
    name: "Laptop Repair & Diagnostics",
    category: "Repair Services",
    price: 25,
    rating: 4.9,
    badge: "Service",
    delivery: "Book in-store inspection",
    description: "Professional troubleshooting for boot issues, overheating, broken ports, slow systems, and software faults.",
    features: ["Full diagnosis", "Repair quotation", "Quick turnaround"],
    image: createArtwork({
      title: "Laptop Repair",
      subtitle: "Bring in your machine and we will trace the fault",
      icon: "🛠",
      accent: ["#9dd9ff", "#4ea3ff"],
      background: ["#08111f", "#154b8f"],
      glow: "#5da9ff",
      ribbon: "Book Service",
    }),
  },
  {
    id: 11,
    name: "Part Replacement Service",
    category: "Repair Services",
    price: 35,
    rating: 4.8,
    badge: "Workshop",
    delivery: "Labour fee before parts",
    description: "Replacement support for batteries, keyboards, screens, SSDs, fans, hinges, chargers, and internal components.",
    features: ["Labour included", "Parts sourced separately", "Technician handled"],
    image: createArtwork({
      title: "Part Swap",
      subtitle: "Restore damaged machines with clean replacements",
      icon: "⚙",
      accent: ["#ffd27d", "#ff8d24"],
      background: ["#12161f", "#38465d"],
      glow: "#ff8d24",
      ribbon: "Repair Bench",
    }),
  },
  {
    id: 12,
    name: "Computer Servicing Package",
    category: "Repair Services",
    price: 30,
    rating: 4.7,
    badge: "Maintenance",
    delivery: "Routine cleanup and tune-up",
    description: "General servicing for desktops and laptops including cleaning, thermal checks, updates, and performance tuning.",
    features: ["Dust cleaning", "Software tune-up", "Health report"],
    image: createArtwork({
      title: "Servicing",
      subtitle: "Routine maintenance to keep systems healthy",
      icon: "🧰",
      accent: ["#7ad6c4", "#18a999"],
      background: ["#081a1b", "#124b57"],
      glow: "#18a999",
      ribbon: "Book Today",
    }),
  },
];

export default products;
