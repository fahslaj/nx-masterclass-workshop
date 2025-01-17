import { InjectionToken } from '@angular/core';

export interface Environment {
  production: boolean;
  apiUrl: string;
}

export const ENVIRONMENT_TOKEN = new InjectionToken<Environment>('environment');
