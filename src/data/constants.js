import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaSass } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";

export const skills = [{
        id: 1,
        component: <IoLogoJavascript />,
    }, {
        id: 2,
        component: <FaReact />,
    }, {
        id: 3,
        component: <FaNodeJs />,
    }, {
        id: 4,
        component: <IoLogoCss3 />,
    }, {
        id: 5,
        component: <FaSass />,
    }, {
        id: 6,
        component: <SiPostgresql />,
    }, {
        id: 7,
        component: <FaGitAlt />,
    },
];

export const projects = [{
        id: 1,
        imageSource: 'projects-moviesportal-image.png',
        name: 'Movies Portal App',
        description: 'This web application is a platform designed to provide users with access to a database of movies. Users have the option to browse the content as guests or register and log in to gain access to additional features such as ratings and comments.',
        link: 'https://github.com/pawelpiotrowski38/movies-app',
    }, {
        id: 2,
        imageSource: 'projects-frontendmentor-image.png',
        name: 'Frontend Mentor Projects',
        description: 'These are real-world design challenges solved using HTML, CSS, and JavaScript. They demonstrate the ability to create responsive layouts and attention to detail.',
        link: 'https://github.com/pawelpiotrowski38/frontend-mentor-projects',
    }, {
        id: 3,
        imageSource: 'projects-nutritiontracker-image.png',
        name: 'Nutrition Tracker App (in progress)',
        description: 'This web application will enable users to search for food products and create meals, while keeping track of calories information. It will provide a way to manage dietary goals and monitoring nutritional intake.',
        link: 'https://github.com/pawelpiotrowski38/nutrition-tracker-app',
    },
];

export const personalData = {
    name: 'Paweł Piotrowski',
    description: 'Welcome to my website! I\'m a computer science graduate focusing on web development. Here, you\'ll find a showcase of my projects and skills in building interactive and user-friendly websites. Take a look around to see what I\'ve been working on!',
};
