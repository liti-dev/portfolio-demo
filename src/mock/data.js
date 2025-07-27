import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'TiaCode',
  lang: 'en',
  description: 'Frontend web developer and Educator',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm ",
  name: 'Thuyet (Tia)',
  subtitle: 'Fullstack engineer <br> Green software advocate',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'mypic.webp',
  paragraphOne:
    "Teacher-turned-Fullstack Developer with a focus on sustainability. I've worked on projects for purpose-driven companies such as DiverseTalent.ai, Article1, Diginex ESG builder.",
  paragraphTwo:
    'My teaching and consulting background helps me craft intuitive and user-centric apps and communicate technical concepts with clarity, enabling effective collaboration with teammates and non-tech stakeholders.',

  resume: 'https://drive.google.com/file/d/1cPM84GtUxgYE-BQp9jP9exRfuBYa0Dm7/view?usp=sharing',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'feedmole.webp',
    title: 'Feed a mole',
    info: 'A vanilla JS & HTML/CSS game which helps reinforce my knowledge of objects and flow',
    info2: 'HTML/CSS, JavaScript',
    url: 'https://feedmoles.netlify.app',
    repo: 'https://github.com/liti-dev/feed-a-mole',
  },
  {
    id: nanoid(),
    img: 'recibees.webp',
    title: 'Recibees',
    info: 'A one-stopper for cooking inspiration and personal recipes storage',
    info2: 'SASS, JavaScript',
    url: 'https://recibees.netlify.app/',
    repo: 'https://github.com/liti-dev/recibees',
  },
  {
    id: nanoid(),
    img: 'moviix.webp',
    title: 'Moviix',
    info: 'Trending movie trailers in one place. Practiced fetching data from The Movie API',
    info2: 'React, react-bootstrap',
    url: 'https://moviix.netlify.app',
    repo: 'https://github.com/liti-dev/moviix',
  },
  {
    id: nanoid(),
    img: 'cloud.PNG',
    title: 'CloudStorage',
    info: 'Pun intended. Storage of your cloud pictures',
    info2: 'React, Firebase',
    url: 'https://cloud-store.netlify.app',
    repo: 'https://github.com/liti-dev/cloud-storage',
  },
  {
    id: nanoid(),
    img: 'tialearn.webp',
    title: 'Today Tia Learned',
    info: 'curated sources of knowledge I gain every day. Practice using Supabase',
    info2: 'React, Supabase',
    url: 'https://today-tia-learned.netlify.app/',
    repo: 'https://github.com/liti-dev/today-i-learned',
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
