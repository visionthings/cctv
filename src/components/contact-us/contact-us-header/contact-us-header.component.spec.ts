import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsHeaderComponent } from './contact-us-header.component';

describe('ContactUsHeaderComponent', () => {
  let component: ContactUsHeaderComponent;
  let fixture: ComponentFixture<ContactUsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactUsHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactUsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
