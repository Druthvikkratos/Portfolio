import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  paginationConfig: any;
  projects: any = [];

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.projects = this.profileService.getProjects();
    console.log(this.projects);
    this.paginationConfig = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.projects.length,
    };
  }

  pageChanged(event: any) {
    this.paginationConfig.currentPage = event;
  }
}
