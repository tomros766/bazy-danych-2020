import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularNeo4jComponent } from './angular-neo4j.component';

describe('AngularNeo4jComponent', () => {
  let component: AngularNeo4jComponent;
  let fixture: ComponentFixture<AngularNeo4jComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularNeo4jComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularNeo4jComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
