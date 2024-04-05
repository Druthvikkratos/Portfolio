import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  skills: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.skills = this.profileService.skills();
  }
}
