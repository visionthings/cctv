import { NgOptimizedImage } from '@angular/common';
import {
  Component,
  Injectable,
  OnInit,
  LOCALE_ID,
  Inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
import { DynamicContentService } from '../../services/dynamic-content.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { first } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
@Injectable({ providedIn: 'root' })
export class NavbarComponent implements OnInit {
  constructor(
    private dynamicContent: DynamicContentService,
    private route: Router,
    @Inject(LOCALE_ID) public locale: string
  ) {}

  // Check language
  isAr(): boolean {
    if (this.locale === 'ar-SA') {
      return true;
    } else {
      return false;
    }
  }

  // Control Navbar menu on small screens
  NavbarMenuIsActive: boolean = false;
  toggleNavbarMenu(): void {
    this.NavbarMenuIsActive = !this.NavbarMenuIsActive;
  }

  navlinks: any[] = [];

  // Change language
  changeLanguage() {
    if (this.route.url.startsWith('/ar-SA')) {
      let newUrl = this.route.url.replace('/ar-SA', '/en-SA');
      this.route.navigateByUrl(newUrl);
    } else {
      let newUrl = this.route.url.replace('/en-SA', '/ar-SA');
      this.route.navigateByUrl(newUrl);
    }
  }

  ngOnInit(): void {
    // Fetch navlinks
    this.dynamicContent
      .fetchNavlinks()
      .pipe(first())
      .subscribe({
        next: (res: any) => {
          this.navlinks = res;
        },
      });
  }
}
