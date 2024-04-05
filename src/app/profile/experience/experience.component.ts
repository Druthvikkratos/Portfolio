import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  workexp: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.workexp = this.profileService.experience();
  }
}
