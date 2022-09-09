// Import stylesheets
import './style.css';

// Write Javascript code!
// const appDiv = document.getElementById('app');
// appDiv.innerHTML = `<h1>JS Starter</h1>`;

const form = document.getElementById('myForm');
const submitButton = document.getElementById('submit');
const file = document.getElementById('csvFile');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('e', file, e);
  const single = file.files[0];
  console.log('single', single);
  const reader = new FileReader();
  reader.onload = function (event) {
    const text = event.target.result;
    const values = conversion(text);
    console.log('values', values);
  };
  reader.readAsText(single);
});

function conversion(texter) {
  const splitted = texter.split('\n');
  let value = splitted[0].split(',');
  const newVal = splitted.slice(1).map((v) => {
    const val = v.split(',');
    const newObj = value.reduce((obj, header, index) => {
      obj[header] = val[index];
      return obj;
    }, {});
    // let obj = {};
    // val.forEach((n, i) => {
    //   obj[value[i]] = n;
    // });
    return newObj;
  });

  return newVal;
}
