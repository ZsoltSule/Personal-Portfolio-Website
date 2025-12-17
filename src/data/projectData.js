import project01 from '../assets/appPics/gameplay.png'
import project11 from '../assets/banners/banner01.png'
import project02 from '../assets/appPics/banking.png'
import project12 from '../assets/banners/banner02.png'
import project03 from '../assets/appPics/django.png'
import project13 from '../assets/banners/banner03.png'
import project04 from '../assets/appPics/website.png'
import project14 from '../assets/banners/banner04.png'
import project05 from '../assets/appPics/rps.png'
import project15 from '../assets/banners/banner05.png'
import project06 from '../assets/appPics/pong.png'
import project16 from '../assets/banners/banner06.png'
import project07 from '../assets/appPics/inventory.png'
import project17 from '../assets/banners/banner07.png'


export const projectData = [
    {
        id: "grims-adventure",
        title: "Grims's Adventure",
        longDesc: "It’s a 2D platformer in which you must defeat all the enemies in each level to advance to the next. The main character, Grim, uses fire attacks to defeat enemies.",
        image: project11,
        demo: project01,
        languages: ["Python"],
        technologies: ["Python", "Pygame"],
        github: "https://github.com/ZsoltSule/Grims-Adventure",
        live: null,
    },
    {
        id: "banking-app",
        title: "Banking",
        longDesc: "A banking application in which you can enter your name and an interest rate to create an account. Afterwards, you can deposit or withdraw money.",
        image: project12,
        demo: project02,
        languages: ["C#"],
        technologies: [".NET Framework"],
        github: "https://github.com/ZsoltSule/BankingApp",
        live: null,
    },
    {
        id: "personal-website",
        title: "My Website",
        longDesc: "It's this website that you are looking at :), it features a modern, fully responsive design optimized for desktops, laptops, tablets, and mobile phones.",
        image: project14,
        demo: project04,
        languages: ["JavaScript"],
        technologies: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
        github: "https://github.com/ZsoltSule/Personal-Portfolio-Website",
        live: null,
    },
    {
        id: "inventory-manager",
        title: "Inventory Manager",
        longDesc: "Inventory Manager is a simple web application for managing products and categories. It allows users to create, read, update, and delete products and view their associated categories. It has a nice and simle design.",
        image: project17,
        demo: project07,
        languages: ["PHP"],
        technologies: ["PHP","HTML", "CSS", "MySQL"],
        github: "https://github.com/ZsoltSule/Inventory_Manager",
        live: null,
    },
    {
        id: "pong",
        title: "Pong",
        longDesc: "A fun game called Pong where you can play against another player using a split keyboard or compete against an AI.",
        image: project16,
        demo: project06,
        languages: ["Python"],
        technologies: ["Python"],
        github: "https://github.com/ZsoltSule/PongGame",
        live: null,
    },
    {
        id: "rock-paper-scissors",
        title: "Rock Paper Scissors",
        longDesc: "A web application that lets you play Rock, Paper, Scissors with a friend, featuring a clean and attractive design.",
        image: project15,
        demo: project05,
        languages: ["JavaScript"],
        technologies: ["JavaScript", "HTML", "CSS"],
        github: "https://github.com/ZsoltSule/Rock-Paper-Scissors",
        live: null,
    },
    {
        id: "django-website",
        title: "Django Website",
        longDesc: "It's a website with a registration interface, and after registering, you gain access to a fully functional to-do list application.",
        image: project13,
        demo: project03,
        languages: ["Python"],
        technologies: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
        github: "https://github.com/ZsoltSule/DjangoWebsite",
        live: null,
    },
];