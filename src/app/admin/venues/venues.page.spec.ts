import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VenuesPage } from './venues.page';

describe('VenuesPage', () => {
  let component: VenuesPage;
  let fixture: ComponentFixture<VenuesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenuesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VenuesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
