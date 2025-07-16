import { z } from 'zod';

// ✅ Required non-empty string
export const stringRequired = z.string({
  required_error: 'This field is required',
}).min(1, 'This field is required');

// ✅ Required valid email
export const emailField = z.string({
  required_error: 'Email is required',
}).email('Invalid email address');

// ✅ Required valid URL
export const urlField = z.string({
  required_error: 'URL is required',
}).url('Invalid URL');

// ✅ Required number in string form
export const numberString = z.string({
  required_error: 'This field is required',
}).regex(/^\d+$/, 'Must be a numeric value');

// ✅ Required boolean string from dropdown or radio
export const booleanString = z.enum(['true', 'false'], {
  required_error: 'This field is required',
  invalid_type_error: 'Invalid value',
});
