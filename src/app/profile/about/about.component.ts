import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  about1: any;
  about2: any;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.about1 = this.profileService.about;
    this.about2 = this.profileService.about2;
  }
}
