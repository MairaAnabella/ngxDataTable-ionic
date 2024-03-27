import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineEditPage } from './inline-edit.page';

describe('InlineEditPage', () => {
  let component: InlineEditPage;
  let fixture: ComponentFixture<InlineEditPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InlineEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
