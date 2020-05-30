export class AngularUtil {

  public static isUndefined(value: any): boolean {
    return typeof value === 'undefined';
  }

  public static isString(value: any): boolean {
    return typeof value === 'string';
  }

  public static isArray(value: any): boolean {
    return Array.isArray(value);
  }

  public static isObject(value: any): boolean {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }

  public static isFunction(value: any): boolean {
    return typeof value === 'function';
  }

  public static clone<T>(value: any): T {
    return JSON.parse(JSON.stringify(value));
  }

  public static fromJson(value: any): string {
    return JSON.stringify(value);
  }

  public static toJson(value: any, defaultValue?: any): any {
    try {
      return JSON.parse(value);
    } catch (error) {
      return defaultValue || value;
    }
  }

  public static toInteger(value: any): number {
    return parseInt(`${value}`, 10);
  }

  public static isNumber(value: any): value is number {
    return !isNaN(AngularUtil.toInteger(value));
  }

  public static isInteger(value: any): value is number {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
  }

  public static isDefined(value: any): boolean {
    return value !== undefined && value !== null;
  }

  public static padNumber(value: number): string {
    if (AngularUtil.isNumber(value)) {
      return `0${value}`.slice(-2);
    } else {
      return '';
    }
  }

  public static coerceBooleanProp(value: any): boolean {
    return value !== null && value !== undefined && `${value}`.toLowerCase() !== 'false';
  }

}
