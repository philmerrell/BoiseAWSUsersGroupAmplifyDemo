import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreateOrUpdateArtistComponent } from './create-or-update-artist.component';

describe('CreateOrUpdateArtistComponent', () => {
  let component: CreateOrUpdateArtistComponent;
  let fixture: ComponentFixture<CreateOrUpdateArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOrUpdateArtistComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateOrUpdateArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
