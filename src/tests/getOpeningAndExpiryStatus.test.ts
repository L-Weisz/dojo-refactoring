import moment from 'moment';
import { getOpeningAndExpiryStatus } from '../getOpeningAndExpiryStatus';

describe('getOpeningAndExpiryStatus', () => {
  test('should return isOpen = true, isExpired = false when both startDate and endDate are not provided', () => {
    const result = getOpeningAndExpiryStatus(undefined, undefined);
    expect(result.isOpen).toBe(true);
    expect(result.isExpired).toBe(false);
  });

  test('should return isOpen = true, isExpired = false when current date is before endDate and startDate is not provided', () => {
    const endDate = moment().add(1, 'days');
    const result = getOpeningAndExpiryStatus(undefined, endDate);
    expect(result.isOpen).toBe(true);
    expect(result.isExpired).toBe(false);
  });

  test('should return isOpen = true, isExpired = false when current date is after startDate and endDate is not provided', () => {
    const startDate = moment().subtract(1, 'days');
    const result = getOpeningAndExpiryStatus(startDate, undefined);
    expect(result.isOpen).toBe(true);
    expect(result.isExpired).toBe(false);
  });

  test('should return isOpen = true, isExpired = false when current date is between startDate and endDate', () => {
    const startDate = moment().subtract(1, 'days');
    const endDate = moment().add(1, 'days');
    const result = getOpeningAndExpiryStatus(startDate, endDate);
    expect(result.isOpen).toBe(true);
    expect(result.isExpired).toBe(false);
  });

  test('should return isOpen = true when current date is after endDate and startDate is provided', () => {
    const startDate = moment().subtract(2, 'days');
    const endDate = moment().subtract(1, 'days');
    const result = getOpeningAndExpiryStatus(startDate, endDate);
    expect(result.isOpen).toBe(true);
    expect(result.isExpired).toBe(true);
  });

  test('should return isExpired = false when current date is before startDate and endDate is provided', () => {
    const startDate = moment().add(1, 'days');
    const endDate = moment().add(2, 'days');
    const result = getOpeningAndExpiryStatus(startDate, endDate);
    expect(result.isOpen).toBe(false);
    expect(result.isExpired).toBe(false);
  });
});
