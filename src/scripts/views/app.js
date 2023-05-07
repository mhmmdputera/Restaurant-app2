import DrawerInitiator from '../utils/drawer-initiator.js';
import UrlParser from '../routes/url-parser.js';
import routes from '../routes/routes.js';


// eslint-disable-next-line require-jsdoc
class App {
  // eslint-disable-next-line require-jsdoc
  constructor({
    button,
    content,
    drawer,
    hero,
  }) {
    this._button = button;
    this._content = content;
    this._drawer = drawer;
    this._hero = hero;

    this._initialAppShell();
  }

  // eslint-disable-next-line require-jsdoc
  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      content: this._content,
      drawer: this._drawer,
      hero: this._hero,
    });
  }

  // eslint-disable-next-line require-jsdoc
  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
};

export default App;
