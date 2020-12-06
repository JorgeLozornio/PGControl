import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminproductosPage } from './adminproductos.page';

describe('AdminproductosPage', () => {
  let component: AdminproductosPage;
  let fixture: ComponentFixture<AdminproductosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminproductosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminproductosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
