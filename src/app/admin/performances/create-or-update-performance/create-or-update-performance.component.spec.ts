import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOrUpdatePerformanceComponent } from './create-or-update-performance.component';

describe('CreateOrUpdatePerformanceComponent', () => {
  let component: CreateOrUpdatePerformanceComponent;
  let fixture: ComponentFixture<CreateOrUpdatePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrUpdatePerformanceComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdatePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
