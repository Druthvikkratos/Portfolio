import { Component } from '@angular/core';
import { ProfileService } from 'src/app/services/profile.service';
@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css'],
})
export class IntroComponent {
  cvUrl: any;
  constructor(private profileService: ProfileService) {}
  imagesBackground: any;
  
  ngOnInit() {
    this.cvUrl = this.profileService.resumeurl;
    this.imagesBackground = '	http://localhost:4200/assets/images/introimg.jpg';
  }
}
