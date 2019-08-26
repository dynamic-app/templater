# Templater

Template strings es6 helper (onEvent, map, find).

	Templater(el, component, props);


## Example
```js
import Templater from 'dynamic-app-templater';

function myComponent({ map, onEvent, find }, props) {
  
  onEvent('h1', 'click', function() {
    find('.find-my').innerHTML = 'find you!!!';
  })

  return `
    <h1>Simpale Template</h1>
    <div class="find-my">find my</div>
    <ul>
      ${map(props, (item, key) =>`
        <li>${key} - ${item}</li>
      `)}
    </ul>
  `;
}

const props = { 1: 'one', 2: 'two', 3: 'three' };
  
Templater(document.body, myComponent, props);
```

## The benefits
### ***Map***
-----
Templater: 
```js
// map(object || array, renderFunction)
map(items, (item, key) =>
  `<div>${ item }</div>`
)
```
without Templater:
```js
// Object.keys().map().join()
Object.keys(items).map((itemId, index) => 
  `<div>${ items[itemId] }</div>`
).join('')
```

### ***Events***
-----
Templater: 
```js
// onEvent(cssSelector, eventType, eventFunction)
// - using reletive selector path
// - can add event before element is connected to the DOM
// - without jQuery
onEvent('h1', 'click', () => {})
```
without Templater:
```js
// native-js:
document.querySelector('#my_component h1').addEventListener('click', () => {})

// jQuery:
$('#my_component h1').on('click', () => {})
```

### ***Find***
-----
Templater: 
```js
// find(cssSelector)
// - using reletive selector path
// - can use only in onEvent function
// - without jQuery
find('h1').innerHTML;
```
without Templater:
```js
// native-js:
document.querySelector('#my_component h1').innerHTML;

// jQuery:
$('#my_component h1').html()
```

### ***Component writing***
-----
Templater: 
```js
function myComponent({ map, onEvent, find }, props) {
  const items = {};

  return `
    <h1>My template</h1>
  `;
}
  
Templater(el, myComponent, props);
```
# license
MIT
