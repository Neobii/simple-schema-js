/* eslint-disable func-names, prefer-arrow-callback */

import { SimpleSchema } from './SimpleSchema';
import expect from 'expect';

describe('SimpleSchema - Rules', function () {
  it('Rules should be passed the object being validated', function () {
    const validationContext = new SimpleSchema({
      foo: {
        type: Number,
      },
      bar: {
        type: Number,
        max() {
          return this.foo;
        },
      },
    }).newContext();

    validationContext.validate({ foo: 5, bar: 10 });
    expect(validationContext.validationErrors().length).toBe(1);
    validationContext.validate({ foo: 10, bar: 5 });
    expect(validationContext.validationErrors().length).toBe(0);
  });
});
