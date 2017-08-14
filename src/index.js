import _ from 'lodash';
// import printMe from './print';
import './style.css';

function component() {
  var element = document.createElement('div');
  // var btn = document.createElement('button');
  var input = document.createElement('input');

  element.innerHTML = _.join(['H22osfsdss', 'w22ebpack'], ' ');
  // btn.innerHTML = 'print Me';
  // btn.onclick = printMe;
  // element.appendChild(btn);
  element.appendChild(input);

  return element;
}

document.body.appendChild(component());