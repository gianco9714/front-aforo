import {Component, EventEmitter, forwardRef, Host, Input, OnInit, Optional, Output, SkipSelf} from '@angular/core';
import {AbstractControl, ControlContainer, NG_VALUE_ACCESSOR} from '@angular/forms';
import {AngularUtil} from '../../helpers/util/angular';

export function providerInputBase(type: any): any {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => type),
    multi: true
  };
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [providerInputBase(InputComponent)]

})
export class InputComponent implements OnInit {

  @Input() placeholder: string;
  @Input() label: string;
  @Input() surlabel: string;
  @Input() type = 'text';
  @Input() formControlName: string;
  @Input() inputClass = '';
  @Input() idx: string;
  @Input() prelabel = 'campo';
  control: AbstractControl;
  @Output() evenx = new EventEmitter();


  constructor(
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer
  ) {
  }

  // tslint:disable-next-line:variable-name
  protected _value: any;
  @Input()
  get value(): any {
    return this._value;
  }

  set value(value: any) {
    this._value = value;
    this.propagateChange(this._value);
  }

  // tslint:disable-next-line:variable-name
  protected _disabled: boolean;
  @Input()
  get disabled(): boolean {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = AngularUtil.coerceBooleanProp(value);
  }

  // tslint:disable-next-line:variable-name
  protected _minlength;
  @Input()
  get minlength(): number {
    return this._minlength;
  }

  set minlength(minlength: number) {
    this._minlength = minlength;
  }

  // tslint:disable-next-line:variable-name
  protected _maxlength;
  @Input()
  get maxlength(): number {
    return this._maxlength;
  }

  set maxlength(maxlength: number) {
    this._maxlength = maxlength;
  }

  // tslint:disable-next-line:variable-name
  protected _error = false;
  @Input()
  get error(): boolean {
    return this._error;
  }

  set error(value: boolean) {
    this._error = AngularUtil.coerceBooleanProp(value);
  }

  ngOnInit(): void {
    this.control = this.controlContainer.control.get(this.formControlName);

  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this._value = value;
    }
  }

  propagateChange = (_: any) => {
  }

  registerOnTouched(): void {
  }

  registerOnChange(fn): void {
    this.propagateChange = fn;
    this.getErrorText();
  }

  getErrorText() {
    const label = (this.surlabel || this.label || '').toLocaleLowerCase();
    let errorText = `El ${this.prelabel} ${label} no es válido`;
    if (this.control.hasError('minlength')) {
      errorText = `El ${this.prelabel} ${label} debe tener  como mínimo ${this.minlength} caracteres`;
    } else if (this.control.hasError('maxlength')) {
      errorText = `El ${this.prelabel} ${label} debe tener ${this.maxlength} caracteres como máximo`;
    } else if ((this.formControlName === 'password' || this.formControlName === 'confirmPassword') && this.control.hasError('pattern')) {
      errorText =
        `El ${this.prelabel} ${label} debe incluir un carácter en may\u00fascula, min\u00fascula, n\u00fameros
         y cualquiera de los siguientes caracteres especiales @$#_+`;
    } else if (this.control.hasError('mustMatch')) {
      errorText = `Este ${this.prelabel} no coincide con el valor de confirmaci\u00f3;n`;
    } else if (this.control.hasError('pattern') || this.control.hasError('email')) {
      errorText = `El ${this.prelabel} ${label} no es válido`;
    } else if (this.control.hasError('required')) {
      errorText = `El ${this.prelabel} ${label} es requerido`;
    }

    return errorText;
  }

  onBlur(elem): any {
    if (this._value && this.type === 'text') {
      elem.value = this._value.trim();
    }
  }

  onKeypress(evt: any): any {
    if (this.formControlName === 'phone' ||
      (this.formControlName === 'documentNumber' && +this.controlContainer.control.get('documentType').value.id === 1)) {
      const charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode !== 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
  }
}
