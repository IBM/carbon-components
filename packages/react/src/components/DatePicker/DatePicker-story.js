/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { withKnobs, boolean, select, text } from '@storybook/addon-knobs';
import DatePicker from '../DatePicker';
import DatePickerInput from '../DatePickerInput';
import DatePickerSkeleton from '../DatePicker/DatePicker.Skeleton';
import mdx from './DatePicker.mdx';

const patterns = {
  'Short (d{1,2}/d{4})': '\\d{1,2}/\\d{4}',
  'Regular (d{1,2}/d{1,2}/d{4})': '\\d{1,2}/\\d{1,2}/\\d{4}',
};

const sizes = {
  'Extra large size (xl)': 'xl',
  'Default size': undefined,
  'Small size (sm)': 'sm',
};

const props = {
  datePicker: () => ({
    dateFormat: text('The date format (dateFormat in <DatePicker>)', 'm/d/Y'),
    id: 'date-picker',
    light: boolean('Light variant (light in <DatePicker>)', false),
  }),
  datePickerInput: () => ({
    id: 'date-picker-input-id',
    className: 'some-class',
    size: select('Field size (size)', sizes, undefined) || undefined,
    labelText: text(
      'Label text (labelText in <DatePickerInput>)',
      'Date Picker label'
    ),
    pattern: select(
      'The date format (pattern in <DatePickerInput>)',
      patterns,
      'd{1,2}/d{4}'
    ),
    placeholder: text(
      'Placeholder text (placeholder in <DatePickerInput>)',
      'mm/dd/yyyy'
    ),
    disabled: boolean('Disabled (disabled in <DatePickerInput>)', false),
    invalid: boolean(
      'Show form validation UI (invalid in <DatePickerInput>)',
      false
    ),
    invalidText: text(
      'Form validation UI content (invalidText in <DatePickerInput>)',
      'A valid value is required'
    ),
    iconDescription: text(
      'Icon description (iconDescription in <DatePickerInput>)',
      'Icon description'
    ),
  }),
};

export default {
  title: 'DatePicker',
  decorators: [withKnobs],

  parameters: {
    component: DatePicker,

    subcomponents: {
      DatePickerInput,
      DatePickerSkeleton,
    },
    docs: {
      page: mdx,
    },
  },
};

export const Simple = () => (
  <DatePicker datePickerType="simple">
    <DatePickerInput placeholder="mm/dd/yyyy" />
  </DatePicker>
);

Simple.storyName = 'simple';

Simple.parameters = {
  info: {
    text: 'A simple Date Picker consists of an input field and no calendar.',
  },
};

export const Single = () => (
  <DatePicker datePickerType="single">
    <DatePickerInput placeholder="mm/dd/yyyy" />
  </DatePicker>
);

Single.storyName = 'single with calendar';

Single.parameters = {
  info: {
    text: `
        A single Date Picker consists of an input field and a calendar.
      `,
  },
};

export const Range = () => {
  return (
    <DatePicker datePickerType="range">
      <DatePickerInput
        id="date-picker-input-id-start"
        placeholder="mm/dd/yyyy"
      />
      <DatePickerInput
        id="date-picker-input-id-finish"
        placeholder="mm/dd/yyyy"
      />
    </DatePicker>
  );
};

Range.storyName = 'range with calendar';

Range.parameters = {
  info: {
    text: `
        A range Date Picker consists of two input fields and a calendar.
      `,
  },
};

export const DatePickerPlayground = () => (
  <DatePicker {...props.datePicker()} datePickerType="single">
    <DatePickerInput {...props.datePickerInput()} />
  </DatePicker>
);

// export const RangeWithCalendarAndMinMaxDates = () => {
//   const datePickerInputProps = props.datePickerInput();
//   return (
//     <DatePicker
//       {...props.datePicker()}
//       minDate="1/10/2020"
//       maxDate="1/20/2020"
//       datePickerType="range"
//       dateFormat="m/d/Y">
//       <DatePickerInput {...datePickerInputProps} id="date-picker-input-id" />
//       <DatePickerInput {...datePickerInputProps} id="date-picker-input-id-2" />
//     </DatePicker>
//   );
// };

// RangeWithCalendarAndMinMaxDates.storyName =
//   'range with calendar and min/max dates';

// RangeWithCalendarAndMinMaxDates.parameters = {
//   info: {
//     text: `
//         A range Date Picker consists of two input fields and a calendar, and optionally, the minDate and maxDate fields.
//       `,
//   },
// };

// export const FullyControlled = () => (
//   <WithState initialState={{ date: '' }}>
//     {({ state, setState }) => (
//       <>
//         <DatePicker
//           datePickerType="single"
//           dateFormat="m/d/Y"
//           value={state.date}
//           onChange={(eventOrDates) => {
//             const value = eventOrDates.target
//               ? eventOrDates.target.value
//               : eventOrDates[0];
//             setState({ date: value });
//           }}>
//           <DatePickerInput
//             {...props.datePickerInput()}
//             id="date-picker-input-id"
//           />
//         </DatePicker>
//         <button type="button" onClick={() => setState({ date: '01/01/2011' })}>
//           Click me to set to 01/01/2011
//         </button>
//       </>
//     )}
//   </WithState>
// );

// FullyControlled.storyName = 'fully controlled';

// FullyControlled.parameters = {
//   info: {
//     text: `
//         If your application needs to control the value of the date picker and
//         be notified of any changes.
//       `,
//   },
// };

export const Skeleton = () => <DatePickerSkeleton range />;

Skeleton.storyName = 'skeleton';

// Skeleton.parameters = {
//   info: {
//     text: `
//             Placeholder skeleton state to use when content is loading.
//             `,
//   },
// };
