<!-- alex disable hooks -->

<!--
Inspired by Uber's Go Style Guide:
https://github.com/uber-go/guide/blob/85bf203f4371a8ae9e5e9a4d52ea77b17ca04ae6/style.md

Editing this document:

- Update the table of contents as new sections are added or removed. You can use
  `yarn doctoc docs/style.md` to accomplish this
- Use tables for side-by-side code samples. See below.

Code Samples:

Use 2 spaces to indent. Horizontal real estate is important in side-by-side
samples.

For side-by-side code samples, use the following snippet.

~~~
<table>
<thead><tr><th>Unpreferred</th><th>Preferred</th></tr></thead>
<tbody>
<tr><td>

```jsx
UNPREFERRED CODE GOES HERE
```

</td><td>

```jsx
PREFERRED CODE GOES HERE
```

</td></tr>
</tbody></table>
~~~

(You need the empty lines between the <td> and code samples for it to be
treated as Markdown.)

If you need to add labels or descriptions below the code samples, add another
row before the </tbody></table> line.

~~~
<tr>
<td>DESCRIBE UNPREFERRED CODE</td>
<td>DESCRIBE PREFERRED CODE</td>
</tr>
~~~

-->

# Carbon Style Guide

<!-- prettier-ignore-start -->
<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
## Table of Contents

- [Introduction](#introduction)
- [React](#react)
  - [Guidelines](#guidelines)
    - [Writing a component](#writing-a-component)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->
<!-- prettier-ignore-end -->

## Introduction

This guide covers how we prefer to write code for the Carbon Design System. As a
result, this document will evolve and change over time as we explore new
concepts, learn from our mistakes, and grow the number of languages that we
target or support as a design system.

Guidelines or practices outlined in this document are meant to help us as a
group build stable and reliable sofware. What this means to the developer may
change depending on the environment in which one writes code.

At the end of the day, we as a group hold the following values about writing
code:

- No abstraction is better than the wrong abstraction
- Prefer learning patterns over libraries or frameworks
- Prefer few abstractions and lots of repetition
- When creating abstractions, only fix or update code if repetition or patterns
  lead to bugs. Make sure the abstraction is worth its weight

_Inspired by
[Minimal API Surface Area](https://www.youtube.com/watch?v=4anAwXYqLG8)_

## React

### Guidelines

#### Writing a component

In general, we prefer to author components using functions instead of classes.
This means that we take advantage of built-in and custom
[hooks](https://reactjs.org/docs/hooks-intro.html) to provide state-based
behavior inside of a component.

At a high-level, the structure of a component will mirror the following:

```jsx
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function MyComponent({
  // Prefer default argument values to `defaultProps`
  initialValue = 0,
}) {
  // Constants and other variables
  const value = 1;
  // State-related behavior
  const [state, setState] = useState(initialValue);

  // Handlers
  function onClick() {
    // ...
  }

  // Effects
  useEffect(() => {
    // ...
  }, []);

  // Output
  return <button onClick={onClick}>Output</button>;
}

MyComponent.propTypes = {
  initialValue: PropTypes.number,
};
```

_Note: not every component will mirror the structure above. Some will need to
incorporate `useEffect`, some will not. You can think of the outline above as
slots that you can fill if you need this functionality in a component._
