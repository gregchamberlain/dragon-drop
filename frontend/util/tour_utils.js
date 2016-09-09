import { nextStep } from '../actions/tour_actions';

export const createStep = ({ target, attachment, className, title, body }) => dispatch => {
  const tar = document.querySelector(target);
  const div = createElement(title, body);
  div.className = `tour-container ${className}`;
  const style = getPositionStyle(tar, attachment);
  Object.keys(style).forEach(key => {
    div.style[key] = style[key];
  })
  document.body.appendChild(div);
  const listener = e => {
    document.body.removeChild(div);
    tar.removeEventListener('click', listener);
    dispatch(nextStep());
  }
  tar.addEventListener('click', listener);
}

const createElement = (title, body) => {
  const div = document.createElement('div');
  const h3 = document.createElement('h4');
  const p = document.createElement('p');
  h3.innerHTML = title;
  p.innerHTML = body;
  div.appendChild(h3);
  div.appendChild(p);
  return div;
}

export const getPositionStyle = (target, attachment) => {
  const bounds = target.getBoundingClientRect();
  const style = { position: 'fixed' }
  switch (attachment) {
    case 'bottom':
      style.top = `${bounds.top + bounds.height}px`;
      style.left = `${bounds.left + bounds.width / 2}px`;
      style.transform = 'translateX(-50%)';
      break;
    case 'right':
      style.top = `${bounds.top + bounds.height / 2}px`;
      style.left = `${bounds.left + bounds.width}px`;
      style.transform = 'translateY(-50%)';
    break;
    default:
  }
  return style
}
