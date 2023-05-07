import Home from '../views/pages/home.js';
import Detail from '../views/pages/detail.js';

const routes = {
  '/': Home, // default page
  '/detail/:id': Detail,
};

export default routes;
