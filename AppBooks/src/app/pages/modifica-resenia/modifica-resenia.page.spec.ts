import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModificaReseniaPage } from './modifica-resenia.page';

describe('ModificaReseniaPage', () => {
  let component: ModificaReseniaPage;
  let fixture: ComponentFixture<ModificaReseniaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificaReseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
