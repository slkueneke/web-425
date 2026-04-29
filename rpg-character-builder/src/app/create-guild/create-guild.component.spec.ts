import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateGuildComponent } from './create-guild.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('CreateGuildComponent', () => {
  let component: CreateGuildComponent;
  let fixture: ComponentFixture<CreateGuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateGuildComponent, ReactiveFormsModule, FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateGuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid when empty', () => {
    expect(component.createGuildForm.valid).toBeFalsy();
  });

  it('form should be valid when filled correctly', () => {
    component.createGuildForm.controls['guildName'].setValue('Guild 1');
    component.createGuildForm.controls['guildDesc'].setValue('This is the best guild.');
    component.createGuildForm.controls['guildType'].setValue('Educational');
    component.createGuildForm.controls['guildTerms'].setValue(true);
    component.createGuildForm.controls['guildNotif'].setValue('SMS');
    expect(component.createGuildForm.valid).toBeTruthy();
  });

  it('should call createGuild on form submit when form is valid', () => {
    spyOn(component, 'createGuild');
    component.createGuildForm.controls['guildName'].setValue('Guild 1');
    component.createGuildForm.controls['guildDesc'].setValue('This is the best guild.');
    component.createGuildForm.controls['guildType'].setValue('Educational');
    component.createGuildForm.controls['guildTerms'].setValue(true);
    component.createGuildForm.controls['guildNotif'].setValue('SMS');

    fixture.detectChanges();

    const form = fixture.debugElement.query(By.css('form'));
    form.triggerEventHandler('ngSubmit', null);

    expect(component.createGuild).toHaveBeenCalled();
  });
});
