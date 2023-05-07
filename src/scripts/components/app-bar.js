// eslint-disable-next-line require-jsdoc
class AppBar extends HTMLElement {
  // eslint-disable-next-line require-jsdoc
  connectedCallback() {
    this.render();
  }

  // eslint-disable-next-line require-jsdoc
  render() {
    this.innerHTML = `
  <a href="#maincontent" class="skip-link">Menuju ke konten</a>
  <header class="header">
    <div class="header__inner">
     <h1 class="header__title">
        Restaurant Apps Astroo Resto
      </h1>
      </div>
    <button id="menu" class="header__menu">☰</button>    
  </header>
  <nav id="drawer" class="nav">
   <ul class="nav__list">
     <li class="nav__item"><a href="#">Home</a></li>
     <li class="nav__item"><a href="#">Favorite</a></li>
     <li class="nav__item"><a href="https://www.instagram.com/mhmmdputera_/">About Us</a></li>
   </ul>
  </nav>   
  `;
  }
}

customElements.define('app-bar', AppBar);
