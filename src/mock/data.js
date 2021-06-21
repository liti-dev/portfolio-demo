import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TiaCode',
  lang: 'en',
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Thuyet (Tia)',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'mypic.jpg',
  paragraphOne:
    "I'm a front-end developer who started off as an educational consultant and language instructor. I strongly believe women should not be restricted in one role during her entire career path. I embrace changes; knowledge excites me. ",
  paragraphTwo:
    'Apart from reading and coding, I love cooking, painting, playing with pets and watching horrors films.',

  resume: 'https://www.resumemaker.online/es.php',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Feed a mole',
    info: 'A vanilla JS & HTML/CSS game which helps reinforce my knowledge of objects and flow',
    info2: '',
    url: 'https://feedmoles.netlify.app',
    repo: 'https://github.com/liti-dev/feed-a-mole',
  },
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'Social blog',
    info: 'A CRUD app which also integrate authentication and authorisation',
    info2: '',
    url: '',
    repo: 'https://github.com/liti-dev',
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Moviix',
    info: 'Practiced fetching data from The Movie API',
    info2: '',
    url: '',
    repo: 'https://github.com/thuyet311/moviix', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'PawStation',
    info: "I'm currently working on this non-profit project which helps connect pets nearby and suggests animal-friendly places",
    info2: 'Tech stack: React.js Express.js MongoDB',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'tia.nkm03@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/thuyet311',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/thuyet-ng-03/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/liti-dev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
