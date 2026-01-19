export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  features: string[];
  applications: string[];
  benefits: string[];
  icon: React.ReactNode;
}

export const servicesData: Service[] = [
  {
    id: "slab-cutting",
    title: "Slab Cutting",
    tagline: "Precision Cutting Up to 27 Inches Deep",
    description: "Professional slab cutting for trenching, openings, and expansion joints in concrete and asphalt.",
    fullDescription: "Our slab cutting services provide precision cutting through concrete, asphalt, and other structural materials up to 27 inches thick. Using state-of-the-art diamond blade technology, we deliver clean, accurate cuts for a variety of applications including trenching, creating openings, and installing expansion joints.",
    features: [
      "Up to 27\" cutting depth capability",
      "Diamond blade technology for clean, precise cuts",
      "Minimal vibration and noise during operation",
      "Indoor and outdoor applications",
      "Dust control systems available",
      "Professional-grade equipment"
    ],
    applications: [
      "Expansion joint installation",
      "Trenching for utilities",
      "Creating openings in floors",
      "Removing damaged concrete sections",
      "HVAC and plumbing rough-ins",
      "Decorative concrete patterns"
    ],
    benefits: [
      "Minimal disruption to surrounding areas",
      "Fast, efficient cutting process",
      "Clean edges for professional finish",
      "Safe operation with experienced technicians",
      "Complete cleanup included"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <circle cx="32" cy="20" r="14" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="16" y="30" width="32" height="18" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="32" y1="20" x2="32" y2="48" stroke="currentColor" strokeWidth="2.5"/>
        <path d="M20 38 L44 38" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2,2"/>
      </svg>
    )
  },
  {
    id: "wall-cutting",
    title: "Wall Cutting",
    tagline: "Clean Openings Through Reinforced Concrete",
    description: "Expert wall cutting for doors, windows, ducts, and penetrations up to 27″ deep.",
    fullDescription: "Our wall cutting services deliver clean, precise openings through reinforced concrete and structural walls. Whether you need doorways, windows, HVAC ducts, or pipe penetrations, we provide professional cutting up to 27 inches deep while maintaining structural integrity.",
    features: [
      "Vertical and horizontal cutting capabilities",
      "Up to 27\" cutting depth",
      "Cuts through heavily reinforced concrete",
      "Minimal dust and debris",
      "Structural integrity maintained",
      "Track-mounted cutting systems"
    ],
    applications: [
      "Door and window openings",
      "HVAC ductwork installations",
      "Pipe and conduit penetrations",
      "Elevator shaft modifications",
      "Stairwell openings",
      "Building renovations"
    ],
    benefits: [
      "Clean, professional edges",
      "No structural damage",
      "Fast project completion",
      "Precise dimensional accuracy",
      "Safe, controlled cutting process"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="16" width="48" height="36" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="44" cy="28" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="44" y1="18" x2="44" y2="38" stroke="currentColor" strokeWidth="2.5"/>
        <line x1="12" y1="24" x2="30" y2="24" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="32" x2="30" y2="32" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="12" y1="40" x2="52" y2="40" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: "core-drilling",
    title: "Core Drilling",
    tagline: "Diamond Precision Drilling",
    description: "Clean circular cuts through any structural material for utility penetrations and HVAC.",
    fullDescription: "Our core drilling services provide diamond-precision drilling for clean circular cuts through any structural material. From small utility penetrations to large HVAC openings, we offer diameter sizes from 1 inch to 60 inches with any angle drilling capability.",
    features: [
      "Diameter sizes from 1\" to 60\"",
      "Any angle drilling capability",
      "Wet or dry drilling options",
      "Precision depth control",
      "Minimal vibration",
      "Core removal included"
    ],
    applications: [
      "Utility penetrations",
      "HVAC installations",
      "Plumbing pipe routing",
      "Electrical conduit paths",
      "Anchor bolt installation",
      "Testing and sampling"
    ],
    benefits: [
      "Clean, perfectly round holes",
      "No structural cracking",
      "Fast drilling process",
      "Accurate positioning",
      "Complete debris removal"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="24" width="48" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
        <circle cx="32" cy="32" r="3" fill="currentColor"/>
        <line x1="32" y1="8" x2="32" y2="20" stroke="currentColor" strokeWidth="3"/>
        <circle cx="32" cy="14" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )
  },
  {
    id: "wire-sawing",
    title: "Wire Sawing",
    tagline: "Unlimited Depth Cutting",
    description: "Large-scale demolition and structural modifications including foundation and bridge work.",
    fullDescription: "Wire sawing technology allows for unlimited depth cutting, making it ideal for large-scale demolition and structural modification projects. This method is perfect for cutting through heavily reinforced concrete, foundations, and bridge structures where traditional methods fall short.",
    features: [
      "Unlimited cutting depth",
      "Cuts through heavy reinforcement",
      "Minimal vibration",
      "Remote operation capability",
      "Versatile cutting angles",
      "Large structural capacity"
    ],
    applications: [
      "Foundation removal",
      "Bridge demolition",
      "Large beam cutting",
      "Underwater cutting",
      "Nuclear facility decommissioning",
      "Industrial plant modifications"
    ],
    benefits: [
      "Handles oversized cuts",
      "Minimal impact on surroundings",
      "Safe for sensitive structures",
      "Cost-effective for large projects",
      "Precision cutting capability"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="12" y="36" width="40" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M8 28 Q32 8 56 28" stroke="currentColor" strokeWidth="2.5" fill="none" strokeDasharray="4,2"/>
        <circle cx="8" cy="28" r="5" fill="currentColor"/>
        <circle cx="56" cy="28" r="5" fill="currentColor"/>
        <line x1="16" y1="44" x2="48" y2="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3,2"/>
      </svg>
    )
  },
  {
    id: "chainsawing",
    title: "Chainsawing",
    tagline: "Versatile Cutting in Tight Spaces",
    description: "Perfect for tight or hard-to-reach areas, cuts materials ¼\" to 24\" thick.",
    fullDescription: "Concrete chainsawing provides versatile cutting solutions for tight spaces and hard-to-reach areas. Our diamond chain saws cut through materials from ¼ inch to 24 inches thick, including reinforced concrete and precast panels, making them ideal for renovation and retrofit projects.",
    features: [
      "Cuts materials ¼\" to 24\" thick",
      "Portable and maneuverable",
      "Fast cutting speeds",
      "Minimal setup required",
      "Wet or dry cutting",
      "Perfect for tight spaces"
    ],
    applications: [
      "Window and door openings",
      "Renovation projects",
      "Vent and duct installations",
      "Precast panel cutting",
      "Tight space cutting",
      "Emergency access creation"
    ],
    benefits: [
      "Highly portable equipment",
      "Quick project completion",
      "Access to confined areas",
      "Versatile application",
      "Cost-effective solution"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="28" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M38 16 L48 28" stroke="currentColor" strokeWidth="3"/>
        <rect x="32" y="8" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="12" y1="38" x2="52" y2="38" stroke="currentColor" strokeWidth="2"/>
        <circle cx="46" cy="13" r="3" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: "demolition",
    title: "Demolition & Removal",
    tagline: "Professional Demolition Services",
    description: "Complete demolition with debris removal and site cleanup for all project sizes.",
    fullDescription: "Our demolition and removal services provide complete solutions for residential and commercial projects. From selective demolition to complete teardowns, we handle every aspect including debris hauling, disposal, and thorough site cleanup.",
    features: [
      "Complete demolition services",
      "Selective demolition capability",
      "Debris hauling and disposal",
      "Site cleanup included",
      "Recycling when possible",
      "Safe, controlled demolition"
    ],
    applications: [
      "Building demolition",
      "Interior strip-outs",
      "Concrete structure removal",
      "Foundation demolition",
      "Parking structure removal",
      "Industrial facility demolition"
    ],
    benefits: [
      "All-inclusive service",
      "Licensed and insured",
      "Environmentally responsible",
      "Fast project completion",
      "Complete site restoration"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="32" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(-15 18 42)"/>
        <rect x="36" y="28" width="20" height="24" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(10 46 40)"/>
        <path d="M10 52 L54 52" stroke="currentColor" strokeWidth="3"/>
      </svg>
    )
  },
  {
    id: "gpr-scanning",
    title: "GPR Scanning",
    tagline: "Non-Destructive Testing",
    description: "Locate rebar, conduits, and cables before cutting for safety and accuracy.",
    fullDescription: "Ground Penetrating Radar (GPR) scanning provides non-destructive testing to locate rebar, post-tension cables, conduits, and other embedded items before cutting. This critical safety step prevents costly mistakes and ensures project success.",
    features: [
      "Non-destructive testing method",
      "Real-time imaging",
      "Locates multiple materials",
      "Accurate depth measurement",
      "Immediate results",
      "Detailed reporting available"
    ],
    applications: [
      "Pre-cut safety verification",
      "Rebar location",
      "Post-tension cable detection",
      "Utility mapping",
      "Conduit and pipe location",
      "Structural analysis"
    ],
    benefits: [
      "Prevents costly mistakes",
      "Ensures worker safety",
      "Protects existing utilities",
      "Reduces project risk",
      "Peace of mind"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="32" width="48" height="20" stroke="currentColor" strokeWidth="2" fill="none"/>
        <rect x="16" y="12" width="32" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="32" y1="20" x2="32" y2="32" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 40 Q20 36 28 40 Q36 44 44 40 Q52 36 56 40" stroke="currentColor" strokeWidth="2" fill="none"/>
        <circle cx="24" cy="20" r="2" fill="currentColor"/>
        <circle cx="40" cy="20" r="2" fill="currentColor"/>
      </svg>
    )
  },
  {
    id: "safety-grooving",
    title: "Safety Grooving",
    tagline: "Enhanced Surface Traction",
    description: "Precision grooving for parking structures and walkways with ADA-compliant solutions.",
    fullDescription: "Safety grooving enhances surface traction on concrete surfaces, reducing slip hazards in parking structures, walkways, and other high-traffic areas. Our precision grooving services create customizable patterns that meet ADA compliance while providing long-lasting safety improvements.",
    features: [
      "Enhanced surface traction",
      "ADA-compliant solutions",
      "Customizable groove patterns",
      "Long-lasting results",
      "Precision depth control",
      "Minimal downtime"
    ],
    applications: [
      "Parking structure decks",
      "Pedestrian walkways",
      "Ramp surfaces",
      "Pool decks",
      "Loading docks",
      "Public plaza areas"
    ],
    benefits: [
      "Reduces slip hazards",
      "Meets safety regulations",
      "Improves drainage",
      "Extends surface life",
      "Professional appearance"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="28" width="48" height="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <line x1="14" y1="28" x2="14" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="20" y1="28" x2="20" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="26" y1="28" x2="26" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="32" y1="28" x2="32" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="38" y1="28" x2="38" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="44" y1="28" x2="44" y2="36" stroke="currentColor" strokeWidth="1.5"/>
        <line x1="50" y1="28" x2="50" y2="36" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: "pour-back",
    title: "Pour Back & Patching",
    tagline: "Seamless Surface Restoration",
    description: "Professional concrete patching and finishing to restore surfaces after cutting.",
    fullDescription: "Our pour-back and patching services restore concrete surfaces after cutting operations with seamless, professional finishing. Using high-quality materials and expert techniques, we ensure color matching and structural integrity for a complete, like-new appearance.",
    features: [
      "Complete surface restoration",
      "Seamless finishing techniques",
      "Color matching available",
      "Fast curing options",
      "Professional-grade materials",
      "Structural integrity maintained"
    ],
    applications: [
      "Post-cutting restoration",
      "Damaged concrete repair",
      "Floor leveling",
      "Joint filling",
      "Spall repair",
      "Surface refinishing"
    ],
    benefits: [
      "Like-new appearance",
      "Durable, long-lasting repairs",
      "Quick turnaround time",
      "Seamless integration",
      "Professional finish"
    ],
    icon: (
      <svg viewBox="0 0 64 64" fill="currentColor">
        <rect x="8" y="36" width="48" height="16" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M20 20 Q24 12 28 20 L28 36" stroke="currentColor" strokeWidth="2" fill="none"/>
        <ellipse cx="24" cy="20" rx="6" ry="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        <path d="M16 44 Q24 40 32 44 Q40 48 48 44" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    )
  }
];

export function getServiceById(id: string): Service | undefined {
  return servicesData.find(service => service.id === id);
}

export function getAllServiceIds(): string[] {
  return servicesData.map(service => service.id);
}
