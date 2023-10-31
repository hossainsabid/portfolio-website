import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Sabid",
    lastName: "Hossain",
    initials: "sh", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🇬🇧',
            text: 'based in the UK'
        },
        {
            emoji: "💼",
            text: "Final Year CompSci Student"
        },
        {
            emoji: "📧",
            text: "shabid.hossain@outlook.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/sabidhossain.ac.uk/",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/saabidd/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/hossainsabid",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/mdsabidhossain/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },


    ],
    bio: "Hello! I'm Sabid. I'm a final year computer science student. I enjoy hikes in the English countryside. I'm a big fan of the outdoors. I'm also a big fan of the indoors. I'm a big fan of everything. I'm a big fan of being a fan. I'm a big fan of being a big fan. I'm a big fan of being a big fan of being a big fan... ",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'java', 'github', 'html5', 'css3', 'python'],
            exposedTo: ['nodejs', 'figma', 'c++']
        }
    ,
    hobbies: [
        {
            label: 'rainbow6siege',
            emoji: '🎮'
        },
        {
            label: 'videoProduction',
            emoji: '🎬'
        },
        {
            label: 'formula1',
            emoji: '🏎'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}