import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaInstallerComponent } from './pwa-installer.component';

describe('PwaInstallerComponent', () => {
  let component: PwaInstallerComponent;
  let fixture: ComponentFixture<PwaInstallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaInstallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaInstallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
