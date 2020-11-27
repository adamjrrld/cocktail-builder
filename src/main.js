import { Route, NavLink, HashRouter } from 'react-router-dom';
import Entry from './Entry';
import Jarrolds from './Jarrolds';
import Booze from './Booze';
import Mixer from './Mixer';
import Garnish from './Garnish';

function Main() {
  return (
    <HashRouter>
      <main className="page-container">
        <section className="static">
          <header className="site-header">
            <div className="site-header__logo-wrap">
              <img className="site-header__logo-img" src="" alt="" />
            </div>
            <h2 className="site-header__header">Jarrold's Cocktail Builder</h2>
          </header>

          <div className="progress-bar">
            <ul className="progress-bar__list">
              <li className="progress-bar__list-item">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="progress-bar__list-item">
                <NavLink to="/jarrolds">Jarrolds</NavLink>
              </li>
              <li className="progress-bar__list-item">
                <NavLink to="/booze">More Booze</NavLink>
              </li>
              <li className="progress-bar__list-item">
                <NavLink to="/mixers">Mixers</NavLink>
              </li>
              <li className="progress-bar__list-item">
                <NavLink to="/garnish">Garnishes</NavLink>
              </li>
            </ul>
          </div>
        </section>

        <section className="content-container">
          <Route path="/" component={Entry} />
          <Route path="/jarrolds" component={Jarrolds} />
          <Route path="/booze" component={Booze} />
          <Route path="/mixers" component={Mixer} />
          <Route path="/garnish" component={Garnish} />
        </section>
      </main>
    </HashRouter>
  );
}

export default Main;
