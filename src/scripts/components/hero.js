/* eslint-disable max-len */
// eslint-disable-next-line require-jsdoc
class Hero extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">Berbagai Hidangan Khas Daerah</h1>
          <p class="hero__tagline">Nikmati hidangan spesial dari menu yang sudah kami sediakan dengan penuh cinta dan rasa khas makanan daerah</p>
        </div>
      </div>
          `;
  }
}

customElements.define('hero-element', Hero);
