
const projects = [
  {
    name: 'Jet Boat Classifieds',
    description: 'E-commerce Web App built for a business startup. Users are displayed products that they can add to their cart & checkout. Users can complete a transaction with false card information provided in github repo README.',
    technologies: ['Next.js', 'Tailwind', 'Firebase', 'Stripe API'],
    src: '/jetboats.webp',
    link: 'https://jetboats.vercel.app/',
    git: 'https://github.com/clucero36/jetboats'
  },
  { 
    name: 'Spotify Clone',
    description: 'Spotify Clone Web Application. Authenticated users are treated to a replica application with user playlists, liked songs, & recently played songs. ' +
    'Non Auth users are treated to an interface with popular playlists being displayed.',
    technologies: ['React', 'Chakra', 'Express', 'Firebase', 'OAuth2.0', 'SpotifyAPI'],
    src: '/spot1stPage.webp',
    link: 'https://spotifyditto.netlify.app',
    git: 'https://github.com/clucero36/spotify-clone.git',
  },
  {
    name: 'Appointment Scheduler',
    description: 'Salon Appointment Schedule App. Users can select a service, a stylist, date & time of an appointment, & are asked to input user information for appointment confirmation. ' +
    'Unpaid version of API provides limited functionality.',
    technologies: ['Next.js', 'Tailwind', 'Firebase', 'Square API'],
    src: '/appointments.webp',
    link: 'https://appointments-app-router.vercel.app/',
    git: 'https://github.com/clucero36/appointments',
  },
  {
    name: 'Image Gallery',
    description: 'Media Gallery Web application. Users are treated to an array of images based on selection of nature settings.',
    technologies: ['Next.js', 'Pexel API', 'Vitest', 'GitHub Actions'],
    src: '/Gallery.webp',
    link: 'https://gallery-psi-sandy.vercel.app/',
    git: 'https://github.com/clucero36/gallery'
  }
]

const experience = [
  {
    duration: 'Oct 2023 - June 2024',
    title: 'Lead Web Developer',
    description: 'Lead web developer for a camping gear manufacturer responsible for developing and maintaining company Shopify Website. Worked within a cross functional team and ' +
                  'collaborated with coworkers to establish requirements that I then translated into functional code to improve UI/UX.',
    technologies: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JS'],
  },
  {
    duration: 'Feb 2023 - Aug 2023',
    title: 'Web Progammer',
    description: 'Responsible for developing, maintaining, and updating client websites using content management systems like ' +
                  'Drupal, Shopify, & WordPress. Promptly gained proficiency with multiple content management systems and communicated with clients and team members to deliver ' +
                  'multiple concurrent projects within deadlines.',
    technologies: ['Drupal', 'Shopify', 'WordPress', 'SQL', 'PHP', 'HTML', 'CSS', 'JS'],
  }
]





export { projects, experience };