class MenuBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  render() {
    // Create elements
    const wrapper = document.createElement('div');
    wrapper.className = 'menu-bar';

    // Create slot element
    const slot = document.createElement('slot');

    // Append slot to wrapper
    wrapper.appendChild(slot);

    // Create style element
    const style = document.createElement('style');
    style.textContent = `
      .menu-bar {
        align-items: center;
        background: #231F20;
        border-radius: 40px;
        bottom: 16px;
        display: flex;
        height: 48px;
        justify-content: center;
        left: 50%;
        max-width: 768px;
        position: fixed;
        transform: translateX(-50%);
        width: calc(100% - 32px);
      }
    `;

    // Append elements to shadow DOM
    this.shadowRoot.append(style, wrapper);
  }
}

// Define the new element
customElements.define('menu-bar', MenuBar);

export default MenuBar;
