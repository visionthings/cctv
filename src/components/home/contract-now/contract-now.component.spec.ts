import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractNowComponent } from './contract-now.component';

describe('ContractNowComponent', () => {
  let component: ContractNowComponent;
  let fixture: ComponentFixture<ContractNowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContractNowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContractNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
