import { Route, HashRouter } from 'react-router-dom';
import ProgressBar from './components/ProgressBar';
import Entry from './Entry';
import Jarrolds from './Jarrolds';
import Booze from './Booze';
import Mixer from './Mixer';
import Garnish from './Garnish';
import logo from './images/j-logo-trans.png';

function Main() {
  return (
    <HashRouter>
      <main className="page-container">
        <section className="static">
          <header className="site-header">
            {/* <div className="site-header__logo-wrap">
              <img
                className="site-header__logo-img"
                src={logo}
                alt="Jarrold's logo"
              />
            </div> */}
            <h2 className="site-header__header">
              Jarrold's Gin Cocktail Builder
            </h2>
          </header>
          <ProgressBar />
        </section>

        <section className="content-container">
          <Route exact path="/" component={Entry} />
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
