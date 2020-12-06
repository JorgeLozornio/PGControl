import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoventasPage } from './infoventas.page';

describe('InfoventasPage', () => {
  let component: InfoventasPage;
  let fixture: ComponentFixture<InfoventasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoventasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoventasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
