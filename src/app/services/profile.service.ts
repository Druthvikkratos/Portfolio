import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  constructor() {}

  resumeurl =
    'https://drive.google.com/uc?export=download&id=1Qnc6HOq2SlNxVqs3v5Oz8n6wpBrbu70h';
  about2 = `Software Programmer with 1.6 years of experience .
  Expertise in Angular 2+ All versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Having good understanding of Jquery, Bootstrap, MongoDB, Firebase, and MYSQL
  Having good knowledge in frontend test automation tool - Cypress`;

  about =
    'Lover of innovation and everything related to generate new knowledge.Face problems with a smile and solve them as soon as possible. Very calculated about the time I spend and work I do.';

  exprienceData: any = [
    {
      id: 1,
      company: 'Electem Business Solution',
      location: 'Banglore',
      timeline: 'Jun 2022 to Dec 2023',
      role: 'Software Programmer',
      work: 'Worked as a full stack developer .Responsible for handling the UI in Angular and Managing the api calls in Nodejs.',
    },
    {
      id: 2,
      company: 'Kaps System Private Limited',
      location: 'Banglore',
      timeline: 'Aug 2020 to Dec 2021',
      role: 'Process Associate',
      work: 'Worked as a process associate .Responsible for analyze the requirements from client and convey to teammates.',
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
      skill: 'ANGULAR 11',
      progress: '80%',
    },
    {
      id: '2',
      skill: 'NODE JS',
      progress: '80%',
    },
    {
      id: '3',
      skill: 'JAVASCRIPT JQUERY',
      progress: '50%',
    },
    {
      id: '4',
      skill: 'SQL,POSTGRES,MONOGO, FIREBASE',
      progress: '75%',
    },
    {
      id: '5',
      skill: 'CYPRESS',
      progress: '60%',
    },
    {
      id: '6',
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
