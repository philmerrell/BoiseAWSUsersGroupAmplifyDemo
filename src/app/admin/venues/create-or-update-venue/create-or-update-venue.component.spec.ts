import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOrUpdateVenueComponent } from './create-or-update-venue.component';

describe('CreateOrUpdateVenueComponent', () => {
  let component: CreateOrUpdateVenueComponent;
  let fixture: ComponentFixture<CreateOrUpdateVenueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateVenueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdateVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
