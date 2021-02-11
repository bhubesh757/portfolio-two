import emoji from 'react-easy-emoji'
// import 'font-awesome/css/font-awesome.min.css';

// import { Description } from '@material-ui/icons';

const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

const greeting = {
    username : 'Udai Tumma',
    title : emoji("👋 Hey Dudes! , I'm Udai Tumma "),
    subTitle : emoji('Data Scientist  Full Stack Developer Associate Artificial Intelligence Community Influencer Opensource Contributor '),
    resumeLink : '' // udai bro u can give your resume link it should be in the form of gooogle drive
}


const SocialMediaLinks = {
  github : 'https://github.com/Udai004',
  linkedin: '',
  gmail: 'bhubesh2k19@gmail.com',
  facebook: 'https://www.facebook.com/udai_tumma',
  instagram : 'https://www.instagram.com/dev_sr_/?hl=en',
  twitter : 'https://twitter.com/SrBhubesh',
    display: true, // Set true to display this section, defaults to false

}

const skillPage = {
    display: true, 
    title : 'What I Can Do',
    subTitle : emoji('Love to Code , Coding is My Life , Good At Coding  '),
    skills: [
        emoji(
          '🚀 Complex quantitative modelling for dynamic forecasting and time series analysis'
        ),
        emoji('🚀 Developing mobile applications using Flutter, React Native and solo android apps using Kotlin'),
        emoji('🚀 Deploying deep learning models on cloud to use on mobile devices'),
      ],

      softwareSkills: [
        {
          skillName: 'html-5',
          src :"https://img.icons8.com/dusk/64/000000/html-5.png"
        },
        {
          skillName: 'css3',
          src:"https://img.icons8.com/dusk/64/000000/css3.png"
        },
       
        {
          skillName: 'JavaScript',
          src:"https://img.icons8.com/color/48/000000/javascript.png"
        },
        {
          skillName: 'reactjs',
          src:"https://img.icons8.com/dusk/64/000000/react.png"
        },
        {
          skillName: 'react-Native',
          src:"https://img.icons8.com/cute-clipart/64/000000/react-native.png"
        },
        {
          skillName: 'nodejs',
          src:"https://img.icons8.com/windows/32/000000/node-js.png"
        },
        
        {
          skillName: 'npm',
          src:"https://img.icons8.com/color/48/000000/npm.png"
        },
        {
          skillName: 'Linux',
           src:"https://img.icons8.com/dusk/64/000000/linux.png"
        },
        {
          skillName: 'Material-ui',
          src : "https://img.icons8.com/color/48/000000/material-ui.png",
        },
        {
          skillName: 'firebase',
          src:"https://img.icons8.com/color/48/000000/firebase.png"
        },
        {
          skillName: 'python',
          src : 'https://img.icons8.com/nolan/64/python.png'
        },
        {
          skillName: 'c',
          src:"https://img.icons8.com/color/48/000000/c-programming.png"
        },
        {
          skillName: 'Java',
          src:"https://img.icons8.com/dusk/64/000000/java-coffee-cup-logo.png"
        },
      ],
}


// icons



const illustration = {
    animated : true,
}




// contact

const contactPageData = {
  display : true ,

  contactSection: {
    title: "Contact Me",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.I can Help in Developement",
  },

  addressSection: {
    title: "Address",
    subtitle:
      "Thillai Nagar , Tiruchirapalli , Tamil nadu - 621307",
    location_map_link: "https://goo.gl/maps/rQR3yTecxqbSv1aT6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9876543210",
  },
};

// Education

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      src: 'https://cdn.worldvectorlogo.com/logos/hackerrank.svg',
      style: {
        color: "#2EC866",
      },
      profileLink: "", // your hackerank link here
    },
    {
      siteName: "Codechef",
      src : 'https://icons-for-free.com/iconfiles/png/512/codechef-1324440139527402917.png',
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "LetsUpgrade",
      src : 'https://yt3.ggpht.com/a/AATXAJxojCU-N7Qs3_ZDCtNBZL2RV0O3tCUTvw7JerYJ=s900-c-k-c0x00ffffff-no-rj',
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    {
      siteName: "Hackerearth",
      src : 'https://upload.wikimedia.org/wikipedia/commons/e/e8/HackerEarth_logo.png',
      style: {
        color: "#323754",
      },
      profileLink: "",
    },
    {
      siteName: "Kaggle",
      src : 'https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/189_Kaggle-512.png',
      style: {
        color: "#20BEFF",
      },
      profileLink: "",
    },
  ],
};

const degrees = {
  display  : 'true',
  degrees: [
    {
      title: "Indian Institute of Technology Chennai",
      subtitle: "B.Tech CSE",
      
      alt_name: "IIT Chennai",
      duration: "2021 - Present",
      descriptions: [
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "⚡ Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      ],
      website_link: "https://www.iitm.ac.in/",
    },
  ],
};

const certifications = {
  display : 'true',
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      link : 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png',
      certificate_link:
        "", // just fill the link in this bro , certification link
      color_code: "#8C151599",
    },
    {
      title: "Deep Learning", // just for example i gave the name , you can give your certification name and the lin in the below 
      subtitle: "- Andrew Ng",
      link : 'https://static.thenounproject.com/png/2010152-200.png',
      certificate_link:
        "",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    {
      title: "ML on GCP",
      subtitle: "- GCP Training",
      link : 'https://static.thenounproject.com/png/2010152-200.png',
      certificate_link:
        "",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science",
      subtitle: "- Alex Aklson",
      link :'',
      link : 'https://www.hdatasystems.com/assets/images/data-science.svg',
      logo_path: "ibm_logo.png",
      certificate_link:
        "",
      alt_name: "IBM",
      color_code: "#1F70C199",

    },
    {
      title: "Big Data",
      subtitle: "- Kim Akers",
      logo_path: "microsoft_logo.png",
      link : 'http://cdn.onlinewebfonts.com/svg/img_543467.png',
      certificate_link:
        "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Advanced Data Science",
      subtitle: "- Romeo Kienzler",
      logo_path: "ibm_logo.png",
      link : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1280px-IBM_logo.svg.png',
      certificate_link:
        "",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //  
    //   certificate_link:
    //     "",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   
    //   certificate_link:
    //     "",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   
    //   certificate_link:
    //     "",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
  ],
};


//Experience

const experience = {
	title: "Experience"
};
// Bro its Just a 


// projects

const projectsHeader = {
  display: true, 
  title : 'projects',
  description : "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  
}
export {
  greeting,
  illustration,
  skillPage,
  contactPageData,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  settings,
  SocialMediaLinks
}