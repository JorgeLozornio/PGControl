import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminusuariosPage } from './adminusuarios.page';

describe('AdminusuariosPage', () => {
  let component: AdminusuariosPage;
  let fixture: ComponentFixture<AdminusuariosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminusuariosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminusuariosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
