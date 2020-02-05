import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArtistDetailPage } from './artist-detail.page';

describe('ArtistDetailPage', () => {
  let component: ArtistDetailPage;
  let fixture: ComponentFixture<ArtistDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
