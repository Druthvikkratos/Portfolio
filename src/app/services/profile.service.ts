import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  resumeurl =
    'https://drive.google.com/file/d/11zbrc1Is-W4Cbfc7LEO_e4DoMrksSb8s/view?usp=sharing';
  about2 = `Software Developer with 3.5 years of professional experience building modern web applications, primarily focused on Angular and frontend development. I specialize in creating clean, responsive, and high-performance user interfaces that deliver smooth user experiences .
  I have strong hands-on experience working with Angular (multiple versions), JavaScript, TypeScript, Node.js, and modern UI frameworks, along with backend exposure in building and integrating REST APIs. I’ve also worked with technologies like MongoDB, Firebase, MySQL, Bootstrap, and Cypress for test automation.`;

  about =
    'Lover of innovation and everything related to generate new knowledge.I’m passionate about turning ideas into efficient, scalable, and user-friendly applications.';

  exprienceData: any = [
    {
      id: 1,
      company: 'Infomap Solutions Pvt Ltd',
      location: 'Banglore',
      timeline: 'Jun 2024 to Present',
      role: 'Software Developer',
      work: 'Working as a Frontend Developer, focused on building and enhancing enterprise-level web applications using Angular.',
      contributions:
      `Developing scalable and responsive UI using Angular and TypeScript . 
       Implementing new features based on business requirements .
       Integrating REST APIs and handling data communication .
       Improving application performance and user experience .
       Collaborating with backend and design teams .
       Contributing to minor backend and API-related tasks when required.`
    },
    {
      id: 2,
      company: 'Electem Business Solution',
      location: 'Banglore',
      timeline: 'Jun 2022 to Dec 2023',
      role: 'Software Programmer',
      work: 'Worked as a Full Stack Developer building web applications using Angular and Node.js.',
      contributions:
      `Developed responsive frontend using Angular Angular and TypeScript . 
       Built and integrated REST APIs using Node.js .
       Handled business logic and API integration .
       Improving application performance and user experience .
       Worked with Postgres and MySQL .
       Performed frontend testing using Cypress.`
    },
    {
      id: 3,
      company: 'Kaps System Private Limited',
      location: 'Banglore',
      timeline: 'Aug 2020 to Dec 2021',
      role: 'Process Associate',
      work: 'Worked as a Process Associate handling client requirements..',
      contributions:
      `Analyzed client requirements . 
       Coordinated with internal teams .
       Ensured smooth workflow communication.`
    },
  ];

  projects: any = [
    {
      id: 1,
      title: 'Rack Management System',
      desc: '',
      githurl: 'https://github.com/Druthvikkratos/Rack-Management',
      imgUrl: 'assets/images/projectscreenshot.png',
      tech: 'Angular 16 , Nodejs, Nestjs, Postgres',
    },
    {
      id: 2,
      title: 'CRUD operation using MEAN stack',
      desc: '',
      githurl: 'https://github.com/Druthvikkratos/basic-crud-mean',
      imgUrl: 'assets/images/meancrud.png',
      tech: 'Angular 16 , Nodejs, Express, Mongodb',
    },
    {
      id: 3,
      title: 'Portfolio',
      desc: '',
      githurl: 'https://github.com/Druthvikkratos/postman-portfolio',
      imgUrl: 'assets/images/postman-portfolio.png',
      tech: 'Angular 20 , Signals',
    },
  ];

  education: any = [
    {
      id: 1,
      year: '2015-2019',
      degree: 'Bachelors Degree',
      college: 'Aditya Silver Oak Institute Of Technology',
      description: `Aditya Silver Oak Institute is GTU Affiliated and 
      Completed B.E in Computer Engineering with
      >Maintained above`,
    },
    {
      id: 2,
      year: '2015-2019',
      degree: 'Bachelors Degree',
      college: 'Aditya Silver Oak Institute Of Technology',
      description: `Aditya Silver Oak Institute is GTU Affiliated and 
      Completed B.E in Computer Engineering with
      >Maintained above`,
    },
  ];

  skillsData: any = [
    {
      id: '1',
      skill: 'ANGULAR 11,12,16,19',
      progress: '80%',
    },
    {
      id: '2',
      skill: 'NODE JS',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'TYPESCRIPT',
      progress: '50%',
    },
    {
      id: '4',
      skill: 'JAVASCRIPT',
      progress: '50%',
    },
    {
      id: '5',
      skill: 'POSTGRES, SQL , MONOGO, FIREBASE',
      progress: '75%',
    },
    {
      id: '6',
      skill: 'CYPRESS',
      progress: '60%',
    },
    {
      id: '7',
      skill: 'HTML/CSS',
      progress: '60%',
    },
  ];

  experience(): Observable<any> {
    return this.exprienceData;
  }

  getProjects(): Observable<any> {
    return this.projects;
  }

  skills(): Observable<any> {
    return this.skillsData;
  }

  educations(): Observable<any> {
    return this.education;
  }
}
