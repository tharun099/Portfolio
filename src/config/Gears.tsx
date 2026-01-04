import Headphones from '@/components/svgs/devices/Headphones';
import Keyboard from '@/components/svgs/devices/Keyboard';
import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';
import Mouse from '@/components/svgs/devices/Mouse';
import Phone from '@/components/svgs/devices/Phone';

export const devices = [
  {
    name: 'Asus TUF Gaming F15 with RTX 2090 (15.6 inch)',
    icon: <Laptop className="size-4" />,
  },
  // {
  //   name: 'LG Ultragear 27GN650 (27 inch, 68.5 cm)',
  //   icon: <Monitor className="size-4" />,
  // },
  {
    name: 'Redragon K630 Dragonborn',
    icon: <Keyboard className="size-4" />,
  },
  {
    name: 'Logitech MX Master 3S',
    icon: <Mouse className="size-4" />,
  },
  {
    name: 'KZ EDX Pro (In-Ear)',
    icon: <Headphones className="size-4" />,
  },
  {
    name: 'Samsung S23 Ultra',
    icon: <Phone className="size-4" />,
  },
];

export const webExtensions = [
  { name: 'JSON Viewer', href: 'https://chrome.google.com/webstore/detail/json-viewer/' },
  { name: 'CSS Peeper (CSS inspector)', href: 'https://chrome.google.com/webstore/detail/css-peeper/' },
  {
    name: 'React Developer Tools',
    href: 'https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
  },
  { name: 'daily.dev', href: 'https://daily.dev/' },
  { name: 'Grammarly', href: 'https://www.grammarly.com/' },
  { name: 'Tabnine – AI autocomplete', href: 'https://www.tabnine.com/' },
  {
    name: 'ColorZilla',
    href: 'https://chromewebstore.google.com/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp?hl=en',
  },
];

export const software = [
  { name: 'Arc', href: 'https://arc.net/' },
  { name: 'Notion', href: 'https://www.notion.so/desktop' },
  { name: 'OBS Studio', href: 'https://obsproject.com/' },
  { name: 'PyCharm', href: 'https://www.jetbrains.com/pycharm/' },
  { name: 'GitHub Desktop', href: 'https://desktop.github.com/' },
  { name: 'Postman', href: 'https://www.postman.com/' },
  { name: 'Node.js', href: 'https://nodejs.org/' },
  { name: 'Figma', href: 'https://www.figma.com/' },
  { name: 'Supabase', href: 'https://supabase.com/' },
  { name: 'Vercel', href: 'https://vercel.com/' },
  { name: 'Discord', href: 'https://discord.com/' },
];
