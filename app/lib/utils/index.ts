import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { MobileNumber } from 'app/types/types';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function addSpaces(phoneNumber: MobileNumber) {
  const numberString = String(phoneNumber);
  const characters = [...numberString];

  for (let i = 3; i < characters.length; i += 4) {
    characters.splice(i, 0, ' ');
  }

  return characters.join('');
}
