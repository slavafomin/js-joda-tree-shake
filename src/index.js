
// Just to demonstrate that tree shaking is working in general
import { foo } from './foobar';
console.log(`Hello ${foo}!`);


// Importing minimal symbol from the library
// Tree shaking is not working for it, entire library is added to the bundle
import { TextStyle } from 'js-joda';
console.log(TextStyle.FULL);
