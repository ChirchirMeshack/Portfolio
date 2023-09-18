const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ChirchirMeshack.github.io/cleanfolio',
  title: 'Meshack.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Meshack Kipchirchir',
  role: 'Front End Engineer',
  description:
    'A motivated and detail-oriented IT professional with a passion for technology and problem-solving. Committed to continuous learning and professional growth.',
  resume: 'https://drive.google.com/file/d/1Y-8i1cKu2qys-bRFQXkWJ6nA6yO-DfuO/view?usp=drive_link',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/ChirchirMeshack',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'City Finder',
    description:
      'Welcome to my portfolio! Explore a captivating project I have built using HTML, CSS, and JavaScript. Discover cities from around the world through an interactive interface. Join me in this web-based urban exploration!',
    stack: ['Html', 'Css', 'Javasacript'],
    sourceCode: 'https://github.com/ChirchirMeshack/cityFinder',
    livePreview: '#',
  },
  {
    name: 'Simple Calaculator',
    description:
      'Welcome to my portfolio! Check out my simple yet functional web-based calculator. Built using HTML, CSS, and JavaScript, it is a user-friendly tool for basic arithmetic operations. Explore the project [here] (insert link) and discover my front-end development skills in action. Thanks for visiting!',
    stack: ['HTML5', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/ChirchirMeshack/calculator',
    livePreview: '#',
  },
  ]
  

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Git',
  'CI/CD',
  ,
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ChirchirMeshack20@gmail.com',
}

export { header, about, projects, skills, contact }
