import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoFilmeComponent } from './catalogo-filme.component';

describe('CatalogoFilmeComponent', () => {
  let component: CatalogoFilmeComponent;
  let fixture: ComponentFixture<CatalogoFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatalogoFilmeComponent]
    });
    fixture = TestBed.createComponent(CatalogoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
