import getHealthStatus from '../getHealthStatus';

test('testing health person with value 51', () => {
  expect(getHealthStatus({ name: 'Mar', health: 51 })).toBe('healthy');
});

test('testing health person with value 50', () => {
  expect(getHealthStatus({ name: 'Mar', health: 50 })).toBe('wounded');
});

test('testing health person with value 15', () => {
  expect(getHealthStatus({ name: 'Mar', health: 15 })).toBe('wounded');
});

test('testing health person with value 14', () => {
  expect(getHealthStatus({ name: 'Mar', health: 14 })).toBe('critical');
});
