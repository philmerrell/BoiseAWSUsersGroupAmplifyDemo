import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerformancesPage } from './performances.page';

describe('PerformancesPage', () => {
  let component: PerformancesPage;
  let fixture: ComponentFixture<PerformancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerformancesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerformancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
