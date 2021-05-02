import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/header/navbar/navbar';
import Footer from './components/footer/footer';
import Catalog from './components/catalog/catalog';
import TodoPage from './components/TodoPage/todoPage';
import About from './components/about/about';
import styles from './App.module.scss';

function App() {
  return (
    <BrowserRouter> 
      <div className={styles.App}>
        <NavBar/>
        <main className={styles.main}>
          <Switch>
            <Route path="/" component={Catalog} exact></Route>
            <Route path="/about" component={About} exact></Route>
            <Route path="/catalog" component={Catalog} exact></Route>
            <Route path="/todo" component={TodoPage} exact></Route>
          </Switch>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

// import Sandbox from './sandBox/Sandbox';
// function App() {
//   return (
//     <div className="App">
//       <Sandbox/>
//     </div>
//   );
// }

export default App;
