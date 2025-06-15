// Default statistics data configuration
export const defaultStatsConfig = [
  {
    id: "registrations",
    bg: "bg-[#D3AEFF]",
    label: "Registrations",
    value: "50+",
    rotation: -14.444,
    hoverBg: "hover:bg-[#A266FF]",
  },
  {
    id: "projects",
    bg: "bg-[#FFEA89]",
    label: "Projects",
    value: "30+",
    rotation: 12.088,
    hoverBg: "hover:bg-[#FFD74C]",
  },
  {
    id: "participants",
    bg: "bg-[#EFE7F7]",
    label: "Participants",
    value: "250+",
    rotation: -2.726,
    hoverBg: "hover:bg-[#D8C6E9]",
  },
  {
    id: "prizes",
    bg: "bg-[#E6CEFF]",
    label: "Prize Pool",
    value: "₹50K",
    rotation: 29.177,
    hoverBg: "hover:bg-[#C59EFF]",
  },
];

// Physics configuration for Matter.js
export const physicsConfig = {
  gravity: {
    y: 0.8,
  },
  label: {
    width: 165,
    height: 45,
    restitution: 0.4,
    friction: 0.1,
    frictionAir: 0.01,
  },
  boundaries: {
    wallThickness: 20,
    floorOffset: 110, // Distance from bottom where floor is placed
  },
  mouse: {
    stiffness: 0.2,
  },
};

// Animation configuration
export const animationConfig = {
  updateInterval: 50, // ms between React state updates
  initDelay: 100, // ms delay before physics initialization
};

// API configuration for real-time updates
export const apiConfig = {
  endpoints: {
    stats: "/api/stats",
    realTimeSocket: "wss://your-api.com/stats",
  },
  retryAttempts: 3,
  retryDelay: 2000, // ms
};

// Responsive breakpoints for cards
export const responsiveConfig = {
  cardSizes: {
    mobile: { width: 280, height: 280 },
    tablet: { width: 250, height: 250 },
    desktop: { width: 300, height: 300 },
  },
  gaps: {
    mobile: "gap-8",
    tablet: "gap-4 md:gap-5",
    desktop: "gap-20",
  },
};

// Typography configuration
export const typographyConfig = {
  label: {
    fontFamily: "Bricolage_Grotesque",
    fontSize: "text-2xl",
    fontWeight: "font-normal",
    letterSpacing: "tracking-[-0.48px]",
    lineHeight: "leading-normal",
  },
  statNumber: {
    fontFamily: "font-sans",
    fontWeight: "font-extrabold",
    lineHeight: "leading-none",
    sizes: {
      mobile: "text-[70px]",
      tablet: "text-[80px] md:text-[90px]",
      desktop: "text-[100px] xl:text-[120px]",
    },
  },
};

// Error messages
export const errorMessages = {
  loadFailed: "Failed to load statistics",
  networkError: "Network connection error",
  physicsError: "Physics simulation error",
};