export const socials = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/VarunBajaj22', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://www.twitter.com/VarunBajaj22', icon: 'twitter' },
  { name: 'Facebook', url: 'https://www.facebook.com/varun.bajaj.566', icon: 'facebook' },
  { name: 'Instagram', url: 'https://www.instagram.com/VarunBajaj22', icon: 'instagram' },
  { name: 'YouTube', url: 'https://www.youtube.com/PhoenixFruitloops', icon: 'youtube' },
] as const;

export const resume = {
  label: 'View Resume',
  url: '/Varun_Bajaj_Resume.pdf',
  download: 'Varun_Bajaj_Resume.pdf',
} as const;

export const navLinks = [
  { label: 'Mission / Level Design', href: '/#projects' },
  { label: 'Game Design', href: '/game-design' },
  { label: 'Game Dev Processes', href: '/game-dev' },
  { label: 'Gameplay & Prototyping', href: '/gameplay-prototyping' },
  { label: 'Maya', href: '/maya' },
  { label: 'VR Game Dev', href: '/vr-game-dev' },
] as const;
