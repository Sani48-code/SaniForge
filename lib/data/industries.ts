export type IndustryGroup = {
  group: string;
  icon: string;
  items: string[];
};

export const industryGroups: IndustryGroup[] = [
  {
    group: "Professional Services",
    icon: "briefcase",
    items: [
      "Law Firm",
      "Law Firm",
      "Insurance Agency",
      "Reverse Mortgage / Finance",
      "General Business",
    ],
  },
  {
    group: "Health & Wellness",
    icon: "heart-pulse",
    items: ["Chiropractic", "Med Spa / Aesthetics", "Body Contouring"],
  },
  {
    group: "Real Estate",
    icon: "home",
    items: ["Real Estate", "Real Estate"],
  },
  {
    group: "Home & Local Services",
    icon: "wrench",
    items: [
      "Restoration",
      "Air Duct Cleaning",
      "Appliance Repair",
      "Painting",
      "Koi Pond",
      "Laundry",
    ],
  },
  {
    group: "Automotive & Industrial",
    icon: "truck",
    items: ["Auto / Trailer Hitch", "Parking Lot Striping", "Industrial / Manufacturing"],
  },
];

// Stated total across all client engagements (grid above shows representative examples).
export const totalClientBusinesses = 21;
