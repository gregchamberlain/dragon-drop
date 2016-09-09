export default class Tour {
  constructor() {
    this.steps = []
    this.currentStep = 0;
    this.complete = false;
    this.started = false;
  }

  addStep = (options) => {
    this.steps.push(options);
  }

  cancel = () => {
    this.hide();
    this.div = null;
    this.currentStep = this.steps.length;
    this.complete = true;
  }

  hide = () => {
    if (this.div) {
      document.body.removeChild(this.div);
    }
  }

  resume = () => {
    if (this.div) {
      this.createStep(this.steps[this.currentStep]);
    }
  }

  start = () => {
    if (!this.started) {
      this.createStep(this.steps[0])
      this.started = true;
    } else {
      this.resume();
    }
  }

  nextStep = () => {
    const next = this.steps[++this.currentStep];
    if (next) {
      this.createStep(next);
    } else {
      this.complete = true;
    }
  }

  createStep = ({ target, attachment, className, title, body, delay = 0, event = 'click' }) => {
    const tar = document.querySelector(target);
    this.div = createElement(title, body, this.cancel);
    this.div.className = `tour-container ${className}`;
    const style = getPositionStyle(tar, attachment);
    Object.keys(style).forEach(key => {
      this.div.style[key] = style[key];
    })
    document.body.appendChild(this.div);
    const listener = e => {
      document.body.removeChild(this.div);
      this.div = null;
      tar.removeEventListener(event, listener);
      setTimeout(this.nextStep, delay)
    }
    tar.addEventListener(event, listener);
  }
}


const createElement = (title, body, cancel, next) => {
  const div = document.createElement('div');
  const h3 = document.createElement('h4');
  h3.innerHTML = title;
  div.appendChild(h3);
  if (body) {
    const p = document.createElement('p');
    p.innerHTML = body;
    div.appendChild(p);
  }
  const cancelButton = document.createElement('button');
  cancelButton.innerHTML = "cancel";
  cancelButton.addEventListener('click', cancel);
  cancelButton.className = 'tour-cancel'
  div.appendChild(cancelButton);
  return div;
}

const getPositionStyle = (target, attachment) => {
  const bounds = target.getBoundingClientRect();
  const style = { position: 'fixed' }
  const att = attachment.split(" ");
  switch (att[0]) {
    case 'bottom':
      style.top = `${bounds.top + bounds.height}px`;
      style.left = `${bounds.left + bounds.width / 2}px`;
      // style.transform = 'translateX(-50%)';
      break;
    case 'right':
      style.top = `${bounds.top + bounds.height / 2}px`;
      style.left = `${bounds.left + bounds.width}px`;
      style.transform = 'translateY(-50%)';
    break;
    default:
  }
  switch (att[1]) {
    case 'left':
      break;
    case 'right':
      style.transform = 'translateX(-100%)';
      break;
    case 'center':
      style.transform = 'translateX(-50%)';
      break;
    default:
  }
  return style
}
