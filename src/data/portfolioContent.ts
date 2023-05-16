export interface PortfolioData {
  titleImage: string
  titleImageAlt: string
  videoLink?: string
  webLink?: string
  intro: string
  introHighlight?: string
  callengeContent: string
  skillContent: string
  video: string
}
export const portfolioData: PortfolioData[] = [
  {
    titleImage: '../pig_logo.png',
    titleImageAlt: 'pig',
    videoLink: 'https://www.youtube.com/watch?v=XKhBnAX3D1Q',
    webLink: 'https://pig-team.vercel.app/home',
    intro: `This is a project during AVR school I work and learn with several 
    great visual designer and 3D Graphic Designer. 
    `,

    introHighlight:
      'With the detail of 3D explosion we built the connection between client and manufacture.',
    video: '../pig.mov',
    callengeContent: `1️⃣ Applying 3D interactive animation
        2️⃣ Implemented every units animation of products  the most one  is 16 . 
        3️⃣ The CORS problem I could not import 3D model from database to frontend at beginning.Finally I used gcolud installing gsutil to solve this problem.`,
    skillContent: `Front-end:
    React , Three.js, React, Redux , React-responsive-carousel , styled-component, React-three/fiber,React-three/drei
    
    Database:
    Firebase`
  },
  {
    titleImage: '../chroma_logo.png',
    titleImageAlt: 'chroma',
    videoLink: 'https://www.youtube.com/watch?v=9Ug1SJPfXPI',
    webLink: 'https://www.virtualchromaate.com/',
    intro:
      'I am responsible for optimize the functionality( like audio tour guide ,popup re-design and video slider etc.) .',
    introHighlight:
      'This is online exhibition website,the whole scene is wrapped by a image .You can click and drag to move around 720 degree .',
    video: '../chroma.mov',
    callengeContent: `1️⃣ Applied Badylon.js to website.
    2️⃣ Applied audio tour guide, I came out with an idea to loop all the audio and played it in the setInterval after the audio finished and jump to another.`,
    skillContent: `Front-end: 
    Vue.js,(verison 2) Vuex, swiper.js, badylon.js,
    websocket, 360 model picture exchanging, scss
    
    Back-end:
     Php Lavareal, websocket`
  },
  {
    titleImage: '../secpaas_logo.png',
    titleImageAlt: 'secpaas',
    videoLink: 'https://www.youtube.com/watch?v=xvOONvM0E8g',
    intro: `This is a information security activity website(only for cellphone device),
    with complete register system and QRcode scanner for searching the game.`,
    video: '../secpaas.mp4',
    callengeContent: `1️⃣ Optimize every phone and different device problem,
    2️⃣ Solving the Anroid keyboard compress problem
    and IOS device resize problem.
    3️⃣ Use ngrok to solve the https problem in order to open
    QRcode Scanner. `,
    skillContent: `Front-end: 
    Vue.js(version 3), Vue3-qrcode-reader ,Vuex, 
    Ngrok, scss
    
    backend: 
    Php Lavareal, Docker`
  },
  {
    titleImage: '../energy_logo.png',
    titleImageAlt: 'green energy',
    webLink: 'https://greenewera.com.tw/2022/',
    intro:
      'I was responsible for making the landing page popup include Contact form authentication, Audio tour guide,Language switcher.',
    introHighlight:
      'This is 3D island website, you can tour around on the island. Cooperated with 3 front-end and 1 back-end',
    video: '../energy.mov',
    callengeContent: `1️⃣ Optimize every phone and different device problem,
    2️⃣ Solving the Anroid keyboard compress problem
    and IOS device resize problem.
    3️⃣ Use ngrok to solve the https problem in order to open
    QRcode Scanner. `,
    skillContent: `Front-end: 
    Vue.js(version 3), Vue3-qrcode-reader ,Vuex, 
    Ngrok, scss
    
    backend: 
    Php Lavareal, Docker`
  }
]
