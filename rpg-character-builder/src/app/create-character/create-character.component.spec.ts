import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCharacterComponent } from './create-character.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

describe('CreateCharacterComponent', () => {
  let component: CreateCharacterComponent;
  let fixture: ComponentFixture<CreateCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCharacterComponent, FormsModule, CommonModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should generate a random order ID between 1 and 1000 with no decimal places', () => {
    component.addCharacter();
    const id = component.characters[0].id;
    expect(id).toBeGreaterThan(0);
    expect(id).toBeLessThanOrEqual(1000);
    expect(Number.isInteger(id)).toBe(true);
  });

  it('should add a character with correct customization', () => {
    component.name = 'Astra Veylan';
    component.gender = 'female';
    component.charClass = 'mage';

    component.addCharacter();

    const addedChar = component.characters[0];
    expect(addedChar.name).toBe('Astra Veylan');
    expect(addedChar.gender).toBe('female');
    expect(addedChar.class).toBe('mage');
  });

  it('should reset all form fields to their default values after resetForm is called', () => {
    component.name = 'Kess Emberline';
    component.gender = 'other';
    component.charClass = 'warrior';

    component.addCharacter();

    expect(component.name).toBe('');
    expect(component.gender).toBe('male');
    expect(component.charClass).toBe('mage');
  });

});
