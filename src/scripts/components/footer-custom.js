/* eslint-disable require-jsdoc */
class FooterCustom extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        <ul>
          Copyright © 2023 - AstroResto Apps
        </ul>
      </footer>
          `;
  }
}

customElements.define('footer-custom', FooterCustom);
