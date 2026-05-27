import networkingImage from '../assets/images/networking.png'
import jasmineLogoFile from '../assets/images/jasminelogo.jpg'
import profileImageFile from '../assets/images/hero/profile-pic.png'
import gameHuntersImage from '../assets/images/games/gameofhunters.png'
import larongKapalaranImage from '../assets/images/games/larongkapalaran.png'
import lostArchipelagoImage from '../assets/images/games/lostinthearchipelago.png'
import bawattalaImage from '../assets/images/mobile/bawattala.jpg'
import equipmentImage from '../assets/images/systems/PLV-VTHKTigersEquipmentInventorySystem.png'
import evaluationImage from '../assets/images/systems/eventevaluation.png'
import studentSystemImage from '../assets/images/systems/studentmanagementsystem.png'
import kiddieCoinImage from '../assets/images/uidesign/kiddiecoinui.png'
import studyBuddyImage from '../assets/images/uidesign/studybuddy.png'
import trackflixImage from '../assets/images/uidesign/trackflix.png'
import ceitImage from '../assets/images/website/ceitwebsite.png'
import surveyImage from '../assets/images/website/customersatisfactionsurvey.png'
import sjavImage from '../assets/images/website/sjav.png'
import bookMockupImage from '../assets/images/graphic designs/bookmockup.png'
import displacementImage from '../assets/images/graphic designs/displacementchangwook.png'
import ecosiaImage from '../assets/images/graphic designs/ecosiaflyer.png'
import geometricImage from '../assets/images/graphic designs/geometric.png'
import minimalistImage from '../assets/images/graphic designs/minimalist.png'
import pointillismImage from '../assets/images/graphic designs/pointillism.png'
import portfolioPosterImage from '../assets/images/graphic designs/portfolioposter.png'
import punkGrungeImage from '../assets/images/graphic designs/punkgrunge.png'
import typographyImage from '../assets/images/graphic designs/typography.png'
import aboutVideoFile from '../assets/video/demoreel.mp4'
import gameHuntersVideo from '../assets/video/game/gameofhuntersdemoreel.mp4'
import larongKapalaranVideo from '../assets/video/game/larongkapalarandemoreel.mp4'

export const aboutVideo = aboutVideoFile
export const jasmineLogo = jasmineLogoFile
export const profileImage = profileImageFile

export const filters = ['All', 'Development', 'Design', 'Games', 'Networking']

export const stats = [
  '18+ Projects Completed',
  '3rd Year BSIT',
  'Frontend and Backend Development',
  'UI/UX Design',
  'Networking',
  'Game Development',
]

export const skills = [
  {
    title: 'Development',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Node.js',
      'Java',
      'C#',
      'Python',
      'MySQL',
      'PostgreSQL',
    ],
  },
  {
    title: 'Design',
    items: ['Figma', 'UI/UX Design', 'Graphic Design'],
  },
  {
    title: 'Technical',
    items: [
      'Networking',
      'Cisco Packet Tracer',
      'System Analysis',
      'Database Design',
    ],
  },
]

export const projects = [
  {
    title: 'Bawat Tala',
    type: 'Mobile App',
    description:
      'A mobile app project where I focused on simple screens, readable layouts, and a flow that feels easy to follow.',
    image: bawattalaImage,
    filters: ['Development', 'Design'],
    tags: ['Journal', 'UI', 'App'],
  },
  {
    title: 'Student Management System',
    type: 'System',
    description:
      'A school records system for managing student information in a more organized and searchable way.',
    image: studentSystemImage,
    filters: ['Development'],
    tags: ['System', 'Database', 'Admin'],
  },
  {
    title: 'PLV VTHK Tigers Equipment Inventory System',
    type: 'System',
    description:
      'An inventory system made for tracking team equipment, item availability, and borrowed assets.',
    image: equipmentImage,
    filters: ['Development'],
    tags: ['Inventory', 'System', 'Records'],
  },
  {
    title: 'Event Evaluation System',
    type: 'System',
    description:
      'A system for collecting event feedback and turning responses into easier-to-review results.',
    image: evaluationImage,
    filters: ['Development'],
    tags: ['Evaluation', 'Reports', 'Forms'],
  },
  {
    title: 'SJAV Website',
    type: 'Website',
    description:
      'A responsive website project where I worked on page structure, spacing, and content presentation.',
    image: sjavImage,
    filters: ['Development', 'Design'],
    tags: ['Website', 'Responsive', 'Frontend'],
  },
  {
    title: 'Customer Satisfaction Survey',
    type: 'Website',
    description:
      'A web-based survey form for gathering customer feedback without making the process feel complicated.',
    image: surveyImage,
    filters: ['Development'],
    tags: ['Survey', 'Forms', 'Web'],
  },
  {
    title: 'CEIT Website',
    type: 'Website',
    description:
      'A department website concept with academic content arranged in a cleaner, more browsable layout.',
    image: ceitImage,
    filters: ['Development', 'Design'],
    tags: ['Academic', 'Website', 'UI'],
  },
  {
    title: 'Larong Kapalaran',
    type: 'Hybrid Mobile Game',
    description:
      'A hybrid mobile game project with a demo reel showing the main gameplay and interaction flow.',
    image: larongKapalaranImage,
    video: larongKapalaranVideo,
    filters: ['Games', 'Development'],
    tags: ['Hybrid', 'Mobile Game', 'Demo Reel'],
  },
  {
    title: 'Game of Hunters',
    type: 'Desktop Game',
    description:
      'A desktop game project with recorded gameplay that shows the core mechanics and player movement.',
    image: gameHuntersImage,
    video: gameHuntersVideo,
    filters: ['Games', 'Development'],
    tags: ['Desktop Game', 'Gameplay', 'Demo Reel'],
  },
  {
    title: 'Lost in the Archipelago',
    type: 'Desktop Game',
    description:
      'A desktop game concept built around exploration, level atmosphere, and interactive play.',
    image: lostArchipelagoImage,
    filters: ['Games', 'Development'],
    tags: ['Desktop Game', 'Adventure', 'Concept'],
  },
  {
    title: 'Kiddie Coin',
    type: 'UI/UX Mobile Concept',
    description:
      'A mobile UI concept for introducing money habits through a friendlier and more playful design.',
    image: kiddieCoinImage,
    filters: ['Design'],
    tags: ['Figma', 'Mobile UI', 'Concept'],
  },
  {
    title: 'Study Buddy',
    type: 'UI/UX Mobile Concept',
    description:
      'A student productivity app concept for planning study tasks and keeping school work organized.',
    image: studyBuddyImage,
    filters: ['Design'],
    tags: ['Figma', 'Student App', 'UX'],
  },
  {
    title: 'Trackflix',
    type: 'UI/UX Mobile Concept',
    description:
      'A media tracker concept with screens for browsing, saving, and organizing shows or movies.',
    image: trackflixImage,
    filters: ['Design'],
    tags: ['Figma', 'Mobile UI', 'Media'],
  },
  {
    title: 'Networking Infrastructure Project',
    type: 'Networking',
    description:
      'A networking project where I planned the topology, configured connections, and documented the setup.',
    image: networkingImage,
    filters: ['Networking'],
    tags: ['Cisco', 'Topology', 'Infrastructure'],
  },
]

export const designGallery = [
  { title: 'Book Mockup', image: bookMockupImage },
  { title: 'Displacement Poster', image: displacementImage },
  { title: 'Ecosia Flyer', image: ecosiaImage },
  { title: 'Geometric Study', image: geometricImage },
  { title: 'Minimalist Design', image: minimalistImage },
  { title: 'Pointillism', image: pointillismImage },
  { title: 'Portfolio Poster', image: portfolioPosterImage },
  { title: 'Punk Grunge', image: punkGrungeImage },
  { title: 'Typography', image: typographyImage },
]

export const contactLinks = [
  { label: 'Email', value: 'Email', href: 'mailto:jasminebasarte@example.com' },
  { label: 'GitHub', value: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', value: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Facebook', value: 'Facebook', href: 'https://www.facebook.com/' },
]
