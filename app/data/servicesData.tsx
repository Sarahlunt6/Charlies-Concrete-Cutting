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
  highlightWord: string;
}

export const servicesData: Service[] = [
  {
    id: "slab-cutting",
    title: "Slab Cutting",
    tagline: "Precision Cutting Up to 27 Inches Deep",
    description: "Professional slab cutting for trenching, openings, and expansion joints in concrete and asphalt.",
    fullDescription: "Slab cutting through reinforced concrete, asphalt, precast concrete, and lightweight panels using advanced cutting technology and professional techniques for precise, clean cuts through structural materials up to 27 inches thick. Our professional team handles all types of slab cutting projects including trenching, openings, expansion joints, decorative cutting, and specialized applications using electric, gas, diesel, and propane-powered cutting equipment for clean, efficient, and quiet operations.",
    highlightWord: "PRECISION",
    features: [
      "Cutting through reinforced concrete, asphalt, precast concrete, and lightweight panels",
      "Precision cutting through ¼\" to 27\" thick slabs with advanced equipment",
      "Trenching, suspended slab openings, duct openings, elevator openings",
      "Expansion joints and decorative cutting applications",
      "Loop detectors, stairwells, machine pads installation cuts",
      "Patch removal on roads and highway maintenance projects",
      "Electric, Gas, Diesel, and Propane powered cutting systems",
      "Commercial, industrial, medical, and residential – clean, efficient, quiet"
    ],
    applications: [
      "STRUCTURAL MATERIALS - Cutting through reinforced concrete, asphalt, precast concrete, and lightweight panels",
      "PRECISION THICKNESS - Professional cutting through ¼\" to 27\" thick slabs with advanced equipment",
      "OPENINGS & TRENCHING - Trenching, suspended slab openings, duct openings, elevator openings",
      "EXPANSION JOINTS - Expansion joints, decorative cutting, and precision joint installations",
      "SPECIALIZED CUTS - Loop detectors, stairwells, machine pads, patch removal on roads",
      "ALL SECTORS - Commercial, industrial, medical, and residential – clean, efficient, quiet operations"
    ],
    benefits: [
      "Advanced cutting technology for structural materials up to 27 inches thick",
      "Professional techniques for precise, clean cuts",
      "Multiple power options: electric, gas, diesel, and propane",
      "Handles all types of slab cutting projects",
      "Clean, efficient, and quiet operations"
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
    fullDescription: "Wall concrete cutting creates precision openings through reinforced concrete, precast concrete, brick, cinderblock, and other structural materials with clean, accurate cuts for doors, windows, ducts, pipes, and structural modifications. Our professional team uses diesel hydraulic, electric hydraulic, and air powered saws to cut openings up to 27″ deep from one side, handling everything from door and window openings to large diameter pipe penetrations with clean, efficient, and quiet operations.",
    highlightWord: "EXPERTISE",
    features: [
      "Openings cut through floors and walls with precision accuracy",
      "Openings cut for doors, windows, dock levelers, and crawl space access",
      "Brick ledges, ducts and pipes through floors and walls",
      "Cutting to remove part or all of existing walls and curb",
      "Cutting openings for large diameter pipes and utilities",
      "Diesel hydraulic, electric hydraulic and air powered saws",
      "Able to cut to a maximum depth of 27″ from one side",
      "Commercial, industrial, medical, and residential work – clean, efficient, and quiet"
    ],
    applications: [
      "DOOR & WINDOW OPENINGS - Precision openings cut for doors, windows, dock levelers, and crawl space access",
      "UTILITY PENETRATIONS - Brick ledges, ducts and pipes through floors and walls for all building systems",
      "WALL REMOVAL - Cutting to remove part or all of existing walls and curb for remodeling projects",
      "LARGE DIAMETER PIPES - Cutting openings for large diameter pipes, utilities, and mechanical systems",
      "MAXIMUM DEPTH 27\" - Able to cut to a maximum depth of 27″ from one side through any structural material",
      "MULTIPLE POWER TYPES - Diesel hydraulic, electric hydraulic and air powered saws for any situation",
      "ALL SECTORS - Commercial, industrial, medical, and residential work – clean, efficient, and quiet operations"
    ],
    benefits: [
      "Precision openings through reinforced concrete and structural materials",
      "Clean, accurate cuts for doors, windows, ducts, and pipes",
      "Multiple power options: diesel hydraulic, electric hydraulic, air powered",
      "Maximum cutting depth of 27″ from one side",
      "Clean, efficient, and quiet operations"
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
    fullDescription: "Removing a cylinder of concrete is core drilling which we use diamond core drills to precisely cut through concrete smoothly and efficiently. We engage state-of-the-art diamond cutting innovations to help make our work as accurate as possible. Core drilling is the procedure of generating accurate circular cuts in concrete to make clean holes for a number of applications. Our professional staff effectively and carefully cuts through reinforced concrete, precast concrete, asphalt, brick, cinderblock, and other structural materials.",
    highlightWord: "ACCURACY",
    features: [
      "Holes cut in a complete range of diameters, at any angle required, and at any thickness required",
      "Holes cut thru walls, floors for electrical, plumbing, heating, sewer, sprinklers, and other unique applications",
      "Holes can be cut upside down thru ceilings if no access is available from above",
      "110V, 220V, hydraulic, and air powered drills",
      "Commercial, industrial, medical and residential work",
      "Clean, efficient and quiet operations"
    ],
    applications: [
      "ANY DIAMETER - Complete range of hole diameters from 1/4\" to 60\" – any size, any angle, any thickness required",
      "ALL APPLICATIONS - Electrical, plumbing, heating, sewer, sprinklers, and other specialized applications",
      "ANY POSITION - Holes cut upside down through ceilings when no access available from above",
      "ALL POWER TYPES - 110V, 220V, hydraulic, and air powered drills for any job requirement",
      "ALL SECTORS - Commercial, industrial, medical and residential work handled professionally",
      "CLEAN & QUIET - Clean, efficient and quiet operations – minimal disruption to your operations"
    ],
    benefits: [
      "State-of-the-art diamond cutting technology",
      "Precisely cut through concrete smoothly and efficiently",
      "Complete range of diameters and angles",
      "Cuts through reinforced concrete, precast, asphalt, brick, and cinderblock",
      "Professional and accurate work"
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
    fullDescription: "Wire sawing for deep cutting in steel, concrete, and other building materials provides unlimited depth capabilities with smooth cut faces from horizontal, vertical, and angled cutting positions – the most efficient method for removing large concrete constructions. Our professional team specializes in large dimension sawing of pipes and tubes, foundation removal, bridge demolition, and complex structural cutting projects with no limit to cutting depth, delivering precise results for the most demanding construction challenges.",
    highlightWord: "POWER",
    features: [
      "Deep sawing in steel, concrete, and other building materials",
      "Large dimension sawing of pipes and tubes with unlimited depth",
      "Smooth cut faces from horizontal, vertical, and angled positions",
      "Most efficient removal of large concrete constructions",
      "Foundation and bridge removal projects",
      "Complex structural cutting with no depth limitations",
      "Commercial, industrial, medical, and residential applications",
      "Precision cutting for the most demanding construction challenges"
    ],
    applications: [
      "UNLIMITED DEPTH - No limit to cutting depth – horizontal, vertical, and angled cutting positions",
      "STEEL & CONCRETE - Deep sawing in steel, concrete, and other structural building materials",
      "LARGE DIMENSIONS - Large dimension sawing of pipes, tubes, and massive structural components",
      "SMOOTH CUT FACE - Provides smooth, precise cut faces with professional finishing quality",
      "FOUNDATION REMOVAL - Most efficient way to remove large concrete constructions, foundations, bridges",
      "ALL SECTORS - Commercial, industrial, medical, residential – precision for demanding projects"
    ],
    benefits: [
      "Unlimited depth cutting capabilities",
      "Smooth cut faces from any angle - horizontal, vertical, angled",
      "Most efficient method for removing large concrete constructions",
      "Large dimension sawing of pipes, tubes, and structural components",
      "Precision results for the most demanding construction challenges"
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
    fullDescription: "Chainsawing is the most versatile concrete cutting method, allowing us to cut through reinforced concrete, precast concrete, and lightweight panels with portable power and precision in tight spaces where other methods can't reach. Our professional team uses electric and diesel chain saws to efficiently cut through slabs and walls from ¼\" to 24\" thick with clean, efficient, and quiet operations.",
    highlightWord: "VERSATILITY",
    features: [
      "Cutting through ¼\" to 24\" thick slabs with portable power",
      "Suspended slab openings and duct openings",
      "Electric and diesel powered saws",
      "Commercial, industrial, medical, and residential work",
      "Clean, efficient, and quiet operations"
    ],
    applications: [
      "ANY THICKNESS - Cutting through ¼\" to 24\" thick slabs with precision and portable power",
      "OPENINGS - Suspended slab openings and duct openings",
      "ALL POWER TYPES - Electric and Diesel powered saws for any situation",
      "ALL SECTORS - Commercial, industrial, medical, and residential – clean, efficient, quiet"
    ],
    benefits: [
      "Most versatile concrete cutting method",
      "Portable power for any location",
      "Works in tight spaces where other methods can't reach",
      "Clean and quiet operations",
      "Efficient cutting through reinforced and precast concrete"
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
    fullDescription: "Concrete removal and demolition is our specialty – we safely and efficiently remove concrete slabs, foundations, walls, driveways, sidewalks, and structures using the right equipment and techniques for each specific job. Our professional team handles complete concrete removal projects from small residential patios to large commercial structures, providing controlled demolition, debris removal, and site cleanup with minimal disruption to surrounding areas.",
    highlightWord: "EFFICIENCY",
    features: [
      "Complete concrete slab and foundation removal",
      "Driveway, sidewalk, and patio demolition",
      "Concrete wall and structure removal",
      "Controlled demolition techniques to protect surrounding structures",
      "Debris haul-away and site cleanup services",
      "Heavy equipment operation – excavators, jackhammers, breakers",
      "Commercial, industrial, medical and residential projects",
      "Dust control and minimal disruption operations"
    ],
    applications: [
      "COMPLETE STRUCTURES - Full concrete structure demolition – foundations, walls, slabs, and multi-story buildings",
      "CONTROLLED DEMOLITION - Precise demolition techniques to protect surrounding structures and minimize disruption",
      "SITE PREPARATION - Complete site clearing, grading, and preparation for new construction projects",
      "DEBRIS REMOVAL - Full debris haul-away, sorting, recycling, and disposal services included",
      "HEAVY EQUIPMENT - Excavators, bulldozers, jackhammers, breakers, and specialized demolition equipment",
      "ALL SECTORS - Commercial, industrial, medical, and residential – safe, efficient, clean operations"
    ],
    benefits: [
      "Safe and efficient concrete removal specialty",
      "Right equipment and techniques for each specific job",
      "Small residential to large commercial projects",
      "Controlled demolition with minimal disruption",
      "Complete debris removal and site cleanup"
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
    fullDescription: "Ground Penetrating Radar Scanning is a non-destructive means to locate potential targets within concrete structures prior to cutting, coring or breaking. We locate reinforcement steel, conduits, pre/post tension cables, PVC, and wire mesh. Ground Penetrating Radar works similar to a fish finder – the scanner sends RADAR into concrete and bounces off targets. Our trained employees analyze patterns, depth, symmetry, and brightness to provide accurate target location before any cutting begins.",
    highlightWord: "SAFETY",
    features: [
      "Non-destructive location of reinforcement steel, conduits, and cables",
      "Locates pre/post tension cables, PVC, and wire mesh within concrete",
      "Real-time data analysis with trained, experienced technicians",
      "Affordable alternative to X-ray scanning (up to 3x less expensive)",
      "No building evacuation required – safe for occupied spaces",
      "Works on slabs on grade without needing access to both sides",
      "Prevents costly damage to utilities and structural elements",
      "Essential for safe cutting, coring, and demolition planning"
    ],
    applications: [
      "REINFORCEMENT STEEL - Locate rebar, wire mesh, and steel reinforcement within concrete structures",
      "CONDUITS & CABLES - Locate electrical conduits, pre/post tension cables, and PVC within slabs and walls",
      "NON-DESTRUCTIVE - Safe scanning method that doesn't damage concrete or require building evacuation",
      "COST EFFECTIVE - Up to 3x less expensive than X-ray scanning with faster turnaround times",
      "REAL-TIME DATA - Immediate results with trained technicians analyzing patterns and depths",
      "ALL STRUCTURES - Works on slabs, walls, foundations – commercial, industrial, medical, residential"
    ],
    benefits: [
      "Non-destructive means to locate targets before cutting",
      "Works like a fish finder sending RADAR into concrete",
      "Trained employees analyze patterns, depth, symmetry, and brightness",
      "Up to 3x less expensive than X-ray scanning",
      "Safe for occupied spaces - no evacuation required",
      "Prevents costly damage to utilities and structural elements"
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
    fullDescription: "Safety groove and texture concrete, precast concrete, and other materials with precision cutting techniques to create non-slip surfaces, ADA compliance features, and decorative patterns that meet your exact specifications. Our professional team creates safety grooves, ADA strips, custom patterns, and surface texturing that makes concrete and other surfaces more comfortable and safer to walk on while eliminating high spots for perfectly even surfaces.",
    highlightWord: "COMPLIANCE",
    features: [
      "ADA strips for compliance with accessibility standards",
      "Cut to specified patterns to meet your exact requirements",
      "Makes concrete and other surfaces more comfortable to walk on",
      "Take down high spots on floors to get an even surface",
      "Safety grooves and anti-slip texturing for enhanced traction",
      "Custom decorative patterns and architectural details",
      "Commercial, industrial, medical and residential applications",
      "Precise, consistent, and professional surface preparation"
    ],
    applications: [
      "ADA COMPLIANCE - ADA strips and accessibility features cut to exact specifications for full compliance",
      "CUSTOM PATTERNS - Cut to specified patterns and designs to meet your exact requirements and specifications",
      "SAFETY TEXTURING - Makes concrete and other surfaces more comfortable and safer to walk on",
      "SURFACE LEVELING - Take down high spots on floors and surfaces to achieve perfectly even results",
      "ALL MATERIALS - Works on concrete, precast concrete, and other construction materials",
      "ALL SECTORS - Commercial, industrial, medical, and residential – precise, consistent, professional"
    ],
    benefits: [
      "Precision cutting techniques for non-slip surfaces",
      "ADA compliance features and accessibility standards",
      "Custom patterns and decorative architectural details",
      "Makes surfaces more comfortable and safer to walk on",
      "Eliminates high spots for perfectly even surfaces",
      "Professional surface preparation"
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
    fullDescription: "Pour back and concrete patching services provide precise replacement of concrete for electrical and plumbing trenches, creating seamless repairs that restore structural integrity and aesthetic continuity to your concrete surfaces. Our professional team specializes in concrete filled steel bollard installation, precision machine pads, test core replacements, and complete trench restoration using proper concrete mixing, placement, and finishing techniques for lasting results.",
    highlightWord: "RESTORATION",
    features: [
      "Replacement of concrete for electrical and plumbing trenches",
      "Concrete filled steel bollard installation for security and traffic control",
      "Machine pads for heavy equipment and industrial applications",
      "Test core patching and restoration after sampling",
      "Seamless concrete repairs that match existing surfaces",
      "Proper concrete mixing and placement techniques",
      "Professional finishing for aesthetic and functional continuity",
      "Commercial, industrial, medical and residential applications"
    ],
    applications: [
      "TRENCH REPLACEMENT - Complete concrete replacement for electrical and plumbing trenches with seamless integration",
      "BOLLARD INSTALLATION - Concrete filled steel bollard installation for security, traffic control, and property protection",
      "MACHINE PADS - Precision machine pads for heavy equipment, industrial applications, and structural support",
      "TEST CORE PATCHING - Professional patching and restoration after concrete core sampling and testing procedures",
      "SEAMLESS REPAIRS - Precise concrete matching and finishing techniques for invisible, lasting repairs",
      "ALL SECTORS - Commercial, industrial, medical, and residential – professional restoration services"
    ],
    benefits: [
      "Precise replacement and seamless repairs",
      "Restores structural integrity and aesthetic continuity",
      "Specialized in bollards, machine pads, and trench restoration",
      "Proper concrete mixing, placement, and finishing techniques",
      "Professional results for lasting durability"
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
