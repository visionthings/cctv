import {
  Component,
  Injectable,
  OnInit,
  Inject,
  LOCALE_ID,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { ParamMap, Router } from '@angular/router';
import { DynamicContentService } from '../../services/dynamic-content.service';
import { first } from 'rxjs';
import { NgOptimizedImage } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dynamic-content',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './dynamic-content.component.html',
  styleUrl: './dynamic-content.component.scss',
})
@Injectable({ providedIn: 'root' })
export class DynamicContentComponent implements OnInit, OnChanges {
  constructor(
    private router: Router,
    private dynamicContent: DynamicContentService,
    @Inject(LOCALE_ID) public locale: string,
    private route: ActivatedRoute
  ) {}

  @Input() id: any;

  // Check application language
  isAr(): boolean {
    if (this.locale === 'ar-SA') {
      return true;
    } else {
      return false;
    }
  }

  // Fetching content data
  pages: any;
  currentPage: any = {};
  primarySection: any = {};
  headerImage: any = 'assets/images/ai_2.png';
  secondarySection: any = {};
  textSection: any = {};
  companiesSection: any = {};

  primarySectionContent: any;
  secondarySectionContent: any;
  textSectionContent: any;
  companiesSectionContent: any;

  ngOnInit(): void {
    this.dynamicContent.fetchPages().subscribe({
      next: (res: any) => {
        this.pages = res;
        this.currentPage = res.find(
          (page: any) => `${this.locale}/${page.slug}` == this.id
        );
      },
    });
    this.primarySection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'primary'
    );
    this.headerImage = `https://api.vision-things.com/${this.primarySection?.file_1}`;
    this.secondarySection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'secondary'
    );
    this.textSection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'text_only'
    );
    this.companiesSection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'companies'
    );

    if (this.locale === 'ar-SA') {
      this.primarySectionContent = this.primarySection?.content_ar;
      this.secondarySectionContent = this.secondarySection?.content_ar;
      this.textSectionContent = this.textSection?.content_ar;
      this.companiesSectionContent = this.companiesSection?.content_ar;
    } else {
      this.primarySectionContent = this.primarySection?.content_en;
      this.secondarySectionContent = this.secondarySection?.content_en;
      this.textSectionContent = this.textSection?.content_en;
      this.companiesSectionContent = this.companiesSection?.content_en;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.currentPage = this.pages?.find((page: any) => page.slug == this.id);

    this.primarySection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'primary'
    );
    this.headerImage = `https://api.vision-things.com/${this.primarySection?.file_1}`;
    this.secondarySection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'secondary'
    );
    this.textSection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'text_only'
    );
    this.companiesSection = this.currentPage?.contents?.find(
      (content: any) => content.content_type === 'companies'
    );

    if (this.locale === 'ar-SA') {
      this.primarySectionContent = this.primarySection?.content_ar;
      this.secondarySectionContent = this.secondarySection?.content_ar;
      this.textSectionContent = this.textSection?.content_ar;
      this.companiesSectionContent = this.companiesSection?.content_ar;
    } else {
      this.primarySectionContent = this.primarySection?.content_en;
      this.secondarySectionContent = this.secondarySection?.content_en;
      this.textSectionContent = this.textSection?.content_en;
      this.companiesSectionContent = this.companiesSection?.content_en;
    }
  }
}
