
export default function Templater(el, component, props) {

  const events = [];

  function onEvent(selector, action, fun) {
    events.push({ selector, action, fun });
  }

  function find(selector) {
    return el.querySelector(selector);
  }

  function map(obj, fun) {
    return Object.keys(obj).map(key => fun(obj[key], key)).join('');
  }

  function afterInsert() {
    events.forEach(item => {
      el.querySelectorAll(item.selector).forEach(el =>
        el.addEventListener(item.action, item.fun)
      );
    });
  }

  el.innerHTML = component({ map, onEvent, find }, props);

  afterInsert();
}
