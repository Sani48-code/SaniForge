export type PersonalProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
};

export const personalProjects: PersonalProject[] = [
  {
    id: "holistic-harmony",
    title: "Holistic Harmony Med Spa",
    category: "Web Development",
    description:
      "A full multi-page marketing website for a board-certified medical spa, including service pages, before/after galleries, and an online booking flow.",
    image: "https://images.unsplash.com/photo-1772378452022-94ee7971fe80?auto=format&fit=crop&w=800&q=70",
    url: "https://holistic-harmony.vercel.app/",
  },
  {
    id: "bibliodrop",
    title: "BiblioDrop",
    category: "Web App",
    description:
      "A platform concept connecting readers with local libraries and independent book owners for doorstep book delivery.",
    image: "https://images.unsplash.com/photo-1761319115027-3ac447d51246?auto=format&fit=crop&w=800&q=70",
    url: "https://biblio-drop-frontend.vercel.app/",
  },
  {
    id: "docappoint",
    title: "DocAppoint",
    category: "Web App",
    description:
      "A doctor appointment management app for scheduling, tracking, and organizing patient bookings.",
    image: "https://images.unsplash.com/photo-1771054243991-e7b2d194ac96?auto=format&fit=crop&w=800&q=70",
    url: "https://docappoint-client-final.vercel.app/",
  },
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    category: "Web App",
    description:
      "A relationship-tracking app that helps people stay in touch with friends and family they care about.",
    image: "https://images.unsplash.com/photo-1755705152604-af6804fb8932?auto=format&fit=crop&w=800&q=70",
    url: "https://keen-keeper-ruby.vercel.app/",
  },
];
