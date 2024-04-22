import { MobileNumber } from 'app/types/UIComponentTypes';
import { addSpaces } from '@lib/utils';

describe('addSpaces', () => {
  it('should add spaces after every 3 digits', () => {
    const phoneNumber: MobileNumber = 123456789;
    const formattedNumber = addSpaces(phoneNumber);
    expect(formattedNumber).toBe('123 456 789');
  });

  it('handles shorter numbers correctly', () => {
    const phoneNumber: MobileNumber = 12345;
    const formattedNumber = addSpaces(phoneNumber);
    expect(formattedNumber).toBe('123 45');
  });

  it('handles longer numbers correctly', () => {
    const phoneNumber: MobileNumber = 1234567890123;
    const formattedNumber = addSpaces(phoneNumber);
    expect(formattedNumber).toBe('123 456 789 012 3');
  });

  it('should return the original number if less than 4 digits', () => {
    const phoneNumber: MobileNumber = 123;
    const formattedNumber = addSpaces(phoneNumber);
    expect(formattedNumber).toBe('123');
  });

  it('handles edge case with no digits', () => {
    const phoneNumber: MobileNumber = 0;
    const formattedNumber = addSpaces(phoneNumber);
    expect(formattedNumber).toBe('0');
  });
});
