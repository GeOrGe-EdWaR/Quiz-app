import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedQuizesListComponent } from './completed-quizes-list.component';

describe('CompletedQuizesListComponent', () => {
  let component: CompletedQuizesListComponent;
  let fixture: ComponentFixture<CompletedQuizesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompletedQuizesListComponent]
    });
    fixture = TestBed.createComponent(CompletedQuizesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
