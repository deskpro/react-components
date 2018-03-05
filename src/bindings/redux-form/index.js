import deprecate from 'util-deprecate';
import * as validators from './validators';
// NOTE export these to keep backwards compatibility
import deprecatedButton from '../../Components/Buttons/Button';
import deprecatedCheckbox from './Checkbox';
import deprecatedDatepicker from './Datepicker';
import deprecatedFieldGroup from './FieldGroup';
import deprecatedForm from './Form';
import deprecatedInput from './Input';
import deprecatedRadio from './Radio';
import deprecatedSelect from './Select';
import deprecatedTagSet from './TagSet';
import deprecatedTextarea from './Textarea';

export {
  validators
};


export const Button = deprecate(
  deprecatedButton,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const Checkbox = deprecate(
  deprecatedCheckbox,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const Datepicker = deprecate(
  deprecatedDatepicker,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const FieldGroup = deprecate(
  deprecatedFieldGroup,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const Form = deprecate(
  deprecatedForm,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const Input = deprecate(
  deprecatedInput,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const Radio = deprecate(
  deprecatedRadio,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const Select = deprecate(
  deprecatedSelect,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const TagSet = deprecate(
  deprecatedTagSet,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
export const Textarea = deprecate(
  deprecatedTextarea,
  'Redux bindings are deprecated, please use `@deskpro/redux-components` instead'
);
