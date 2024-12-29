import pizzaImage from "../images/pizzawebsayfası.png";
import witImage from "../images/witflix.png";

export const contentData = {
  en: {
    name: "Feyzanur Ak",
    title: "Imaginative Doer, Simplicity Enthusiast",
    description:
      "Hi, I’m Feyzanur Ak, a full-stack developer. Let’s build amazing digital products together!",
    skills: [
      {
        name: "JavaScript",
        description:
          "JavaScript is a popular programming language that adds interactivity to web pages and enhances user experience. I effectively use it to develop dynamic web applications, create interactive components, and implement backend functionality with Node.js when needed, providing a comprehensive JavaScript expertise.",
      },
      {
        name: "React.js",
        description:
          "React is a widely-used library for building user interfaces, especially single-page applications. I leverage React to design and develop responsive, scalable front-end components that ensure seamless user interactions and optimal performance.",
      },
      {
        name: "Node.js",
        description:
          "React is a widely-used library for building user interfaces, especially single-page applications. I leverage React to design and develop responsive, scalable front-end components that ensure seamless user interactions and optimal performance.",
      },
    ],
    profile: {
      "Birth Date": "18.12.1999",
      "Education": "Kocaeli University, Master's, 2023",
      "Preferred Role": "Frontend, UI Developer",
      aboutMe:
        "Hi, I'm Feyzanur Ak. I'm a passionate front-end developer, creating user-friendly, visually engaging, and high-performing digital experiences.",
    },
    nav: {
      skills: "Skills",
      projects: "Projects",
      hireMe: "Hire me",
    },
  },
  tr: {
    name: "Feyzanur Ak",
    title: "Hayal Gücü Yüksek Uygulayıcı, Sadelik Meraklısı",
    description:
      "Merhaba, ben Feyzanur Ak. Haydi birlikte istediğiniz şekilde web site tasarımları oluşturalım!",
    skills: [
      {
        name: "JavaScript",
        description:
          "JavaScript, web sayfalarına etkileşim kazandıran ve kullanıcı deneyimini zenginleştiren popüler bir programlama dilidir. Bu dili etkin bir şekilde kullanarak dinamik web uygulamaları geliştiriyor, kullanıcı etkileşimlerini artıran bileşenler oluşturuyor ve gerektiğinde backend tarafında da Node.js ile projeleri hayata geçiriyorum. Böylece tam kapsamlı JavaScript deneyimi sunabiliyorum. ",
      },
      {
        name: "React.js",
        description:
          "React, özellikle tek sayfalı uygulamalar için kullanıcı arayüzleri oluşturmakta yaygın olarak kullanılan bir kütüphanedir. React'i, kesintisiz kullanıcı etkileşimleri ve optimal performans sağlayan, duyarlı ve ölçeklenebilir ön uç bileşenler tasarlamak ve geliştirmek için kullanıyorum.",
      },
      {
        name: "Node.js",
        description:
          "Node.js, JavaScript'i sunucu tarafında çalıştırmak için güçlü bir çalışma zamanıdır. Node.js'i, sağlam arka uç hizmetleri oluşturmak, veritabanlarını yönetmek ve API entegrasyonlarını gerçekleştirmek için kullanıyorum; böylece tam kapsamlı JavaScript uygulamaları geliştirmeyi mümkün kılıyorum.",
      },
    ],
    profile: {
      "Doğum Tarihi": "18.12.1999",
      "Eğitim Durumu": "Kocaeli Üniversitesi, Yüksek Lisans, 2023",
      "Tercih Ettiği Rol": "Frontend, UI Geliştirici",
      aboutMe:
      "Merhaba, ben Feyzanur Ak. Kullanıcı dostu, görsel olarak çekici ve yüksek performanslı dijital deneyimler oluşturan tutkulu bir ön yüz geliştiricisiyim.",
    },
    nav: {
      skills: "Yetenekler",
      projects: "Projeler",
      hireMe: "Beni İşe Al",
    },
  },
}

export const projectsData = {
  en: [
    {
      id: 1,
      title: "Witflix",
      description: "Every great journey doesn't start at the top; every step is a story of progress. This application has been created to document and share my first steps, the challenges I faced, and the progress I've made along the way.",
      siteUrl: "https://net-flix-uygulama.vercel.app/",
      githubUrl:"https://github.com/Feyzanur-Ak/NetFlixUygulama",
      imageUrl:witImage,
      tags:["Html","Css","JavaScript"]
    },
    {
      id: 2,
      title: "Netflix Clone",
      description: "This project is a practical application of the theoretical knowledge I have gained about React at a fundamental level. It also serves as an example where I simulate data management between pages and create user interactions.",
      siteUrl: "https://pizzawebsitesi-s44q.vercel.app/",
      githubUrl:"https://github.com/Feyzanur-Ak/WitflixReact",
      tags:["React","Axios","React-Router-Dom"],
    },
    {
      id: 3,
      title: "Pizza Order Website",
      description: "This project demonstrates the use of React Router DOM to enable data transfer between pages using the prop-drilling method and simulates an API source with axios. User selections are preserved across pages, representing a shopping environment experience.",
      siteUrl: "https://pizzawebsitesi-s44q.vercel.app/",
      githubUrl:"https://github.com/Feyzanur-Ak/pizzawebsitesi",
      imageUrl: pizzaImage,
      tags:["React","Redux","LocalStorage"],
    },
  ],
  tr: [
    {
      id: 1,
      title: "Witflix",
      description: "Her büyük yolculuk en tepeden başlamaz; her adım bir ilerleme hikayesidir. Bu uygulama, attığım ilk adımları, karşılaştığım zorlukları ve gösterdiğim ilerlemeyi belgelemek ve paylaşmak için oluşturulmuştur",
      siteUrl: "https://net-flix-uygulama.vercel.app/",
      githubUrl:"https://github.com/Feyzanur-Ak/NetFlixUygulama",
      imageUrl:witImage,
      tags:["Html","Css","JavaScript"]
    },
    {
      id: 2,
      title: "Netflix Kopyası",
      description: "Bu proje, React ile edindiğim teorik bilgilerin temel düzeyde uygulamaya geçirildiği bir çalışmadır. Aynı zamanda, verinin sayfalar arası yönetimi ve kullanıcı etkileşimlerinin oluşturulmasını simüle ettiğim bir örnektir.",
      siteUrl: "https://randomjokes.com",
      githubUrl:"https://github.com/Feyzanur-Ak/WitflixReact",
      tags:["React","Axios","React-Router-Dom"],
    },
    {
      id: 3,
      title: "Pizza Sipariş Websitesi",
      description: "Bu proje, React Router DOM kullanılarak sayfalar arası veri geçişinin prop-drilling yöntemiyle sağlandığı ve axios ile bir API kaynağının simüle edildiği bir çalışmadır. Kullanıcı seçimleri sayfalar arasında korunarak, bir alışveriş ortamı deneyimi temsil edilmiştir.",
      siteUrl: "https://pizzawebsitesi-s44q.vercel.app/",
      githubUrl:"https://github.com/Feyzanur-Ak/pizzawebsitesi",
      imageUrl: pizzaImage,
      tags:["React","Redux","LocalStorage"],
    },
  ],
}