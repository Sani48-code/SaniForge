export type IndustryTheme = {
  cardBg: string;
  border: string;
  hoverBorder: string;
  hoverShadow: string;
  iconBg: string;
  tagBg: string;
  dot: string;
};

export type IndustryBadge = {
  label: string;
  icon: string;
  tag?: string;
  theme: IndustryTheme;
};

export const industryBadges: IndustryBadge[] = [
  {
    label: "Insurance Agency",
    icon: "briefcase",
    tag: "Risk & Policy",
    theme: {
      cardBg: "bg-sky-100/90",
      border: "border-sky-300",
      hoverBorder: "hover:border-sky-500",
      hoverShadow: "hover:shadow-lg hover:shadow-sky-500/25",
      iconBg: "bg-sky-600 text-white shadow-md shadow-sky-600/30",
      tagBg: "bg-sky-200/90 text-sky-900",
      dot: "bg-sky-600",
    },
  },
  {
    label: "Chiropractic Clinic",
    icon: "heart-pulse",
    tag: "Healthcare",
    theme: {
      cardBg: "bg-rose-100/90",
      border: "border-rose-300",
      hoverBorder: "hover:border-rose-500",
      hoverShadow: "hover:shadow-lg hover:shadow-rose-500/25",
      iconBg: "bg-rose-600 text-white shadow-md shadow-rose-600/30",
      tagBg: "bg-rose-200/90 text-rose-900",
      dot: "bg-rose-600",
    },
  },
  {
    label: "Corporate Law Firm",
    icon: "scale",
    tag: "Legal Advisory",
    theme: {
      cardBg: "bg-amber-100/90",
      border: "border-amber-300",
      hoverBorder: "hover:border-amber-500",
      hoverShadow: "hover:shadow-lg hover:shadow-amber-500/25",
      iconBg: "bg-amber-600 text-white shadow-md shadow-amber-600/30",
      tagBg: "bg-amber-200/90 text-amber-950",
      dot: "bg-amber-600",
    },
  },
  {
    label: "Personal Injury Law",
    icon: "scale",
    tag: "Litigation",
    theme: {
      cardBg: "bg-violet-100/90",
      border: "border-violet-300",
      hoverBorder: "hover:border-violet-500",
      hoverShadow: "hover:shadow-lg hover:shadow-violet-500/25",
      iconBg: "bg-violet-600 text-white shadow-md shadow-violet-600/30",
      tagBg: "bg-violet-200/90 text-violet-900",
      dot: "bg-violet-600",
    },
  },
  {
    label: "Residential Real Estate",
    icon: "home",
    tag: "Property Brokerage",
    theme: {
      cardBg: "bg-emerald-100/90",
      border: "border-emerald-300",
      hoverBorder: "hover:border-emerald-500",
      hoverShadow: "hover:shadow-lg hover:shadow-emerald-500/25",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/30",
      tagBg: "bg-emerald-200/90 text-emerald-950",
      dot: "bg-emerald-600",
    },
  },
  {
    label: "Commercial Real Estate",
    icon: "home",
    tag: "Commercial Space",
    theme: {
      cardBg: "bg-teal-100/90",
      border: "border-teal-300",
      hoverBorder: "hover:border-teal-500",
      hoverShadow: "hover:shadow-lg hover:shadow-teal-500/25",
      iconBg: "bg-teal-600 text-white shadow-md shadow-teal-600/30",
      tagBg: "bg-teal-200/90 text-teal-950",
      dot: "bg-teal-600",
    },
  },
  {
    label: "Med Spa / Aesthetics",
    icon: "sparkles",
    tag: "Wellness & Beauty",
    theme: {
      cardBg: "bg-fuchsia-100/90",
      border: "border-fuchsia-300",
      hoverBorder: "hover:border-fuchsia-500",
      hoverShadow: "hover:shadow-lg hover:shadow-fuchsia-500/25",
      iconBg: "bg-fuchsia-600 text-white shadow-md shadow-fuchsia-600/30",
      tagBg: "bg-fuchsia-200/90 text-fuchsia-950",
      dot: "bg-fuchsia-600",
    },
  },
  {
    label: "Reverse Mortgage / Finance",
    icon: "landmark",
    tag: "Financial Planning",
    theme: {
      cardBg: "bg-yellow-100/90",
      border: "border-yellow-300",
      hoverBorder: "hover:border-yellow-500",
      hoverShadow: "hover:shadow-lg hover:shadow-yellow-500/25",
      iconBg: "bg-yellow-600 text-white shadow-md shadow-yellow-600/30",
      tagBg: "bg-yellow-200/90 text-yellow-950",
      dot: "bg-yellow-600",
    },
  },
  {
    label: "Restoration Services",
    icon: "wrench",
    tag: "Emergency Remediation",
    theme: {
      cardBg: "bg-orange-100/90",
      border: "border-orange-300",
      hoverBorder: "hover:border-orange-500",
      hoverShadow: "hover:shadow-lg hover:shadow-orange-500/25",
      iconBg: "bg-orange-600 text-white shadow-md shadow-orange-600/30",
      tagBg: "bg-orange-200/90 text-orange-950",
      dot: "bg-orange-600",
    },
  },
  {
    label: "Industrial / Manufacturing",
    icon: "factory",
    tag: "Enterprise Production",
    theme: {
      cardBg: "bg-blue-100/90",
      border: "border-blue-300",
      hoverBorder: "hover:border-blue-500",
      hoverShadow: "hover:shadow-lg hover:shadow-blue-500/25",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-600/30",
      tagBg: "bg-blue-200/90 text-blue-950",
      dot: "bg-blue-600",
    },
  },
  {
    label: "Air Duct Cleaning",
    icon: "wind",
    tag: "HVAC Services",
    theme: {
      cardBg: "bg-cyan-100/90",
      border: "border-cyan-300",
      hoverBorder: "hover:border-cyan-500",
      hoverShadow: "hover:shadow-lg hover:shadow-cyan-500/25",
      iconBg: "bg-cyan-600 text-white shadow-md shadow-cyan-600/30",
      tagBg: "bg-cyan-200/90 text-cyan-950",
      dot: "bg-cyan-600",
    },
  },
  {
    label: "Appliance Repair",
    icon: "wrench",
    tag: "Home Maintenance",
    theme: {
      cardBg: "bg-indigo-100/90",
      border: "border-indigo-300",
      hoverBorder: "hover:border-indigo-500",
      hoverShadow: "hover:shadow-lg hover:shadow-indigo-500/25",
      iconBg: "bg-indigo-600 text-white shadow-md shadow-indigo-600/30",
      tagBg: "bg-indigo-200/90 text-indigo-950",
      dot: "bg-indigo-600",
    },
  },
  {
    label: "Painting Services",
    icon: "paintbrush",
    tag: "Commercial Contractor",
    theme: {
      cardBg: "bg-lime-100/90",
      border: "border-lime-300",
      hoverBorder: "hover:border-lime-500",
      hoverShadow: "hover:shadow-lg hover:shadow-lime-500/25",
      iconBg: "bg-lime-600 text-white shadow-md shadow-lime-600/30",
      tagBg: "bg-lime-200/90 text-lime-950",
      dot: "bg-lime-600",
    },
  },
  {
    label: "Auto / Trailer Hitch Services",
    icon: "truck",
    tag: "Automotive Solutions",
    theme: {
      cardBg: "bg-red-100/90",
      border: "border-red-300",
      hoverBorder: "hover:border-red-500",
      hoverShadow: "hover:shadow-lg hover:shadow-red-500/25",
      iconBg: "bg-red-600 text-white shadow-md shadow-red-600/30",
      tagBg: "bg-red-200/90 text-red-950",
      dot: "bg-red-600",
    },
  },
  {
    label: "Parking Lot Striping",
    icon: "parking-square",
    tag: "Facility Maintenance",
    theme: {
      cardBg: "bg-amber-200/80",
      border: "border-amber-400",
      hoverBorder: "hover:border-amber-500",
      hoverShadow: "hover:shadow-lg hover:shadow-amber-500/25",
      iconBg: "bg-amber-600 text-white shadow-md shadow-amber-600/30",
      tagBg: "bg-amber-300 text-amber-950",
      dot: "bg-amber-600",
    },
  },
  {
    label: "Koi Pond & Water Garden",
    icon: "waves",
    tag: "Landscape Architecture",
    theme: {
      cardBg: "bg-teal-200/70",
      border: "border-teal-400",
      hoverBorder: "hover:border-teal-500",
      hoverShadow: "hover:shadow-lg hover:shadow-teal-500/25",
      iconBg: "bg-teal-700 text-white shadow-md shadow-teal-700/30",
      tagBg: "bg-teal-300 text-teal-950",
      dot: "bg-teal-700",
    },
  },
  {
    label: "Laundry Services",
    icon: "washing-machine",
    tag: "Commercial Cleaners",
    theme: {
      cardBg: "bg-sky-200/70",
      border: "border-sky-400",
      hoverBorder: "hover:border-sky-500",
      hoverShadow: "hover:shadow-lg hover:shadow-sky-500/25",
      iconBg: "bg-sky-700 text-white shadow-md shadow-sky-700/30",
      tagBg: "bg-sky-300 text-sky-950",
      dot: "bg-sky-700",
    },
  },
  {
    label: "Body Contouring Clinic",
    icon: "flower",
    tag: "Medical Esthetics",
    theme: {
      cardBg: "bg-pink-100/90",
      border: "border-pink-300",
      hoverBorder: "hover:border-pink-500",
      hoverShadow: "hover:shadow-lg hover:shadow-pink-500/25",
      iconBg: "bg-pink-600 text-white shadow-md shadow-pink-600/30",
      tagBg: "bg-pink-200/90 text-pink-950",
      dot: "bg-pink-600",
    },
  },
  {
    label: "General Business Services",
    icon: "briefcase",
    tag: "B2B Solutions",
    theme: {
      cardBg: "bg-blue-100/90",
      border: "border-blue-300",
      hoverBorder: "hover:border-blue-500",
      hoverShadow: "hover:shadow-lg hover:shadow-blue-500/25",
      iconBg: "bg-blue-600 text-white shadow-md shadow-blue-600/30",
      tagBg: "bg-blue-200/90 text-blue-950",
      dot: "bg-blue-600",
    },
  },
  {
    label: "E-Commerce & Retail",
    icon: "sparkles",
    tag: "Online Merchandising",
    theme: {
      cardBg: "bg-purple-100/90",
      border: "border-purple-300",
      hoverBorder: "hover:border-purple-500",
      hoverShadow: "hover:shadow-lg hover:shadow-purple-500/25",
      iconBg: "bg-purple-600 text-white shadow-md shadow-purple-600/30",
      tagBg: "bg-purple-200/90 text-purple-950",
      dot: "bg-purple-600",
    },
  },
  {
    label: "B2B SaaS & Tech",
    icon: "factory",
    tag: "Cloud Platforms",
    theme: {
      cardBg: "bg-emerald-100/90",
      border: "border-emerald-300",
      hoverBorder: "hover:border-emerald-500",
      hoverShadow: "hover:shadow-lg hover:shadow-emerald-500/25",
      iconBg: "bg-emerald-600 text-white shadow-md shadow-emerald-600/30",
      tagBg: "bg-emerald-200/90 text-emerald-950",
      dot: "bg-emerald-600",
    },
  },
];

export const totalClientBusinesses = 21;
