import project01 from '../assets/appPics/gameplay.png'
import project11 from '../assets/banners/banner01.png'
import project02 from '../assets/appPics/banking.png'
import project12 from '../assets/banners/banner02.png'
import project03 from '../assets/appPics/django.png'
import project13 from '../assets/banners/banner03.png'

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
        id: "django-website",
        title: "Django Website",
        longDesc: "It's a website with a registration interface, and after registering, you gain access to a fully functional to-do list application.",
        image: project13,
        demo: project03,
        languages: ["Python"],
        technologies: ["Python", "Django", "HTML", "CSS", "Bootstrap"],
        github: "https://github.com/ZsoltSule/DjangoWebsite",
        live: null,
    }
];