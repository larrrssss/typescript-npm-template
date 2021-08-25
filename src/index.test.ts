import { greeter } from './index';

test('greet lars', () => {
  const msg = greeter('Lars');

  expect(msg).toBe('Hello Lars');
});