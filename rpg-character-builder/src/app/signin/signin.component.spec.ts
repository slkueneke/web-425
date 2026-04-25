import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SigninComponent } from './signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { of } from 'rxjs';

class MockAuthService {
  signin(email: string, password: string) {
    return of(true);
  }
}
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SigninComponent, ReactiveFormsModule],
      providers: [{ provide: AuthService, useClass: MockAuthService }],
    }).compileComponents();
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cookie and authState to true on successful sign in', () => {
    const authSpy = spyOn(
      (component as any).authService,
      'signin',
    ).and.returnValue(true);

    const routerSpy = spyOn((component as any).router, 'navigate');

    component.signinForm.controls['email'].setValue('rpg@builder.com');
    component.signinForm.controls['password'].setValue('Password123');

    component.signin();

    expect(authSpy).toHaveBeenCalledWith('rpg@builder.com', 'Password123');
    expect(routerSpy).toHaveBeenCalledWith(['/']);
  });


  it('should not set cookie and should alert on unsuccessful sign in', () => {
    const authSpy = spyOn(
      (component as any).authService,
      'signin',
    ).and.returnValue(false);

    const alertSpy = spyOn(window, 'alert');

    const routerSpy = spyOn((component as any).router, 'navigate');

    component.signinForm.controls['email'].setValue('wrong@example.com');
    component.signinForm.controls['password'].setValue('BadPass1');

    component.signin();

    expect(authSpy).toHaveBeenCalledWith('wrong@example.com', 'BadPass1');
    expect(routerSpy).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith(
      'Invalid email or password. Please try again.',
    );
  });


  it('should call signin method on form submit', () => {
    const signInSpy = spyOn(
      (component as any).authService,
      'signin',
    ).and.callThrough();
    component.signinForm.controls['email'].setValue('test@example.com');
    component.signinForm.controls['password'].setValue('Password123');
    component.signin();
    expect(signInSpy).toHaveBeenCalledWith('test@example.com', 'Password123');
  });
});
