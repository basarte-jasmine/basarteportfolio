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
      'An AI-integrated journaling platform built to foster student wellness and simplify mental health tracking through a clean, accessible interface and reflective journaling flow.',
    image: bawattalaImage,
    filters: ['Development', 'Design'],
    tags: ['Journal', 'AI-Integration', 'App'],
  },
  {
    title: 'Student Management System',
    type: 'System',
    description:
      'A Student Management System dashboard for managing student records, enabling efficient grade tracking, automated categorization, and interactive data filtering.',
    image: studentSystemImage,
    filters: ['Development'],
    tags: ['System', 'Database', 'Dashboard'],
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
      'A streamlined feedback management platform designed to automate event evaluations, turning attendee responses into structured, actionable insights.',
    image: evaluationImage,
    filters: ['Development'],
    tags: ['Evaluation', 'Reports', 'Forms'],
  },
  {
    title: 'SJAV Website',
    type: 'Website',
    description:
      'A welcoming and informative school website designed to help parents and students easily access essential contact details, admission information, and upcoming announcements.',
    image: sjavImage,
    filters: ['Development', 'Design'],
    tags: ['Web Design', 'Information Portal', 'School Community'],
  },
  {
    title: 'Customer Satisfaction Survey',
    type: 'Website',
    description:
      'A user-friendly survey platform designed to help organizations easily gather and understand customer feedback through a clean and intuitive digital interface.',
    image: surveyImage,
    filters: ['Development'],
    tags: ['Survey', 'Forms', 'Web'],
  },
  {
    title: 'CEIT Website',
    type: 'Website',
    description:
      'A department website concept focused on creating a clean, organized, and easy-to-navigate space for students to explore academic resources and campus facilities.',
    image: ceitImage,
    filters: ['Development', 'Design'],
    tags: ['Academic', 'Website', 'UI'],
  },
  {
    title: 'Laro ng Kapalaran',
    type: 'Hybrid Mobile Game',
    description:
      'A haunting hybrid mobile game that blends survival mechanics with classic Filipino folklore, where players must outsmart curses in a tense, high-stakes tabletop environment.',
    image: larongKapalaranImage,
    video: larongKapalaranVideo,
    filters: ['Games', 'Development'],
    tags: ['Hybrid', 'Mobile Game', 'Filipino Folklore'],
  },
  {
    title: 'Game of Hunters',
    type: 'Desktop Game',
    description:
      'Blending Filipino folklore with fast-paced survival horror, this project challenges players to explore dangerous, haunted rooms, gather powerful relics, and outlast escalating waves of mythical creatures.',
    image: gameHuntersImage,
    video: gameHuntersVideo,
    filters: ['Games', 'Development'],
    tags: ['Desktop Game', 'Folklore-Inspired', 'Survival Horror'],
  },
  {
    title: 'Lost in the Archipelago',
    type: 'Desktop Game',
    description:
      'A narrative-driven adventure game centered on time-travel, strategic decision-making, and moral complexity, offering players multiple paths to navigate the tensions between colonial authorities and resistance movements.',
    image: lostArchipelagoImage,
    filters: ['Games', 'Development'],
    tags: ['Narrative-Driven', 'Adventure', 'Historical RPG'],
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
      'A streamlined mobile interface concept designed for effortless media tracking, allowing users to discover, save, and organize their favorite movies and TV shows in one place.',
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
