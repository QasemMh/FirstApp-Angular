import { TestBed } from '@angular/core/testing';

import { AutherizationGaurdGuard } from './autherization-gaurd.guard';

describe('AutherizationGaurdGuard', () => {
  let guard: AutherizationGaurdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutherizationGaurdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
