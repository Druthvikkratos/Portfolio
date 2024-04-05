import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile.component';
import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { SplitPipe } from './split.pipe';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectsComponent } from './projects/projects.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    ProfileComponent,
    HeaderComponent,
    IntroComponent,
    AboutComponent,
    SplitPipe,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    EducationComponent,
    ContactmeComponent,
    FooterComponent,
  ],
  imports: [CommonModule, NgxPaginationModule],
})
export class ProfileModule {}
