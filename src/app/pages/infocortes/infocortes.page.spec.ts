import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfocortesPage } from './infocortes.page';

describe('InfocortesPage', () => {
  let component: InfocortesPage;
  let fixture: ComponentFixture<InfocortesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfocortesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfocortesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
