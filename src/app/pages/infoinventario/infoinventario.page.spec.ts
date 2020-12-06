import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoinventarioPage } from './infoinventario.page';

describe('InfoinventarioPage', () => {
  let component: InfoinventarioPage;
  let fixture: ComponentFixture<InfoinventarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoinventarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoinventarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
