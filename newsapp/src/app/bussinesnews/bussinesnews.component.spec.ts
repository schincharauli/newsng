import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BussinesnewsComponent } from './bussinesnews.component';

describe('BussinesnewsComponent', () => {
  let component: BussinesnewsComponent;
  let fixture: ComponentFixture<BussinesnewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BussinesnewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BussinesnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
