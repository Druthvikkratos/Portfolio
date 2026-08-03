import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  resumeurl =
    'https://drive.google.com/file/d/10f89o_3W-EeDqVw0WshoddRdSoKxafWY/view?usp=sharing';
  about2 = `Full Stack Developer with 3+ years of experience building enterprise financial web applications. I specialize in Angular frontend architecture — HTTP interceptors, JWT-based authentication, role-based route guards (RBAC), reactive forms, AG Grid, and SSO integration. On the backend, I work with Node.js, NestJS, Sequelize, and PostgreSQL for RESTful API development. I've also set up and managed AWS infrastructure (EC2, RDS, IAM, CodePipeline, CodeDeploy, Lambda, SNS, EventBridge) for CI/CD automation. .
  Currently upskilling in Angular 21/22 (Signals, zoneless change detection) and backend development with NestJS and Prisma.`;

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
      
      `Designed and implemented Angular project architecture including HTTP interceptor pipelines, JWT authentication flows, and role-based route guards, with SSO integration built on top of commercial dashboard templates. Set up AWS infrastructure and CI/CD pipelines using CodePipeline, CodeDeploy, EC2, and RDS, with automated deployment notifications via Lambda and SNS — deployed across multiple production applications.`
    },
    {
      id: 2,
      company: 'Electem Business Solution',
      location: 'Banglore',
      timeline: 'Jun 2022 to Dec 2023',
      role: 'Software Programmer',
      work: 'Worked as a Full Stack Developer building web applications using Angular and Node.js.',
      contributions:
      `Led the migration from Angular 12 to Angular 16 on the frontend and from Express + TypeORM to NestJS + Sequelize on the backend. Designed backend architecture including JWT authentication with Passport.js, dynamic PostgreSQL schema generation per tenant, and full-text search using ts_vector and implemented Cypress end-to-end testing for critical user flows.`
   
      
    }
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
      title: 'Portfolio',
      desc: '',
      githurl: 'https://github.com/Druthvikkratos/postman-portfolio',
      imgUrl: 'assets/images/postman-portfolio.png',
      tech: 'Angular 20 , Signals',
    },
    {
      id: 3,
      title: 'LedgerRecon',
      desc: '',
      githurl: 'https://github.com/Druthvikkratos/ledgerrecon',
      imgUrl: 'assets/images/ledger.png',
      tech: 'NestJS, Prisma ORM, MySQL, JWT, Angular 22, Signals,AG Grid',
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

      skill: 'Angular (12–19)',
      progress: '80%',
    },
    {
      id: '2',
      skill: 'TYPESCRIPT',
      progress: '50%',
    },
    {
      id: '3',
      skill: 'Node.js / NestJS',
      progress: '70%',
    },
    {
      id: '4',
  
      skill: 'Sequelize / Prisma',
      progress: '60%',
    },
    {
      id: '5',
      
      skill: 'PostgreSQL / MySQL',
      progress: '75%',
    },
    {
      id: '6',
      
      skill: 'AWS (EC2, RDS, CodePipeline, Lambda)',
      progress: '50%',
    },
    {
      id: '7',
      
      skill: 'CYPRESS',
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
