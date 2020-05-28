import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListserverComponent } from './listserver.component';

describe('ListserverComponent', () => {
  let component: ListserverComponent;
  let fixture: ComponentFixture<ListserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
