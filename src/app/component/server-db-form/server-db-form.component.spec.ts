import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerDbFormComponent } from './server-db-form.component';

describe('ServerDbFormComponent', () => {
  let component: ServerDbFormComponent;
  let fixture: ComponentFixture<ServerDbFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerDbFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerDbFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
