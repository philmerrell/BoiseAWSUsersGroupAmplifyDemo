import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GenresPage } from './genres.page';

describe('GenresPage', () => {
  let component: GenresPage;
  let fixture: ComponentFixture<GenresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GenresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
