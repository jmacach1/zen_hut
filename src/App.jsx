import styles from './App.module.scss';
import Footer from './components/footer/footer';
import NavBar from './components/header/navbar/navbar';
import Catalog from './components/catalog/catalog';
import TodoPage from './components/TodoPage/todoPage';

function App() {
  return (
    <div className={styles.App}>
      <NavBar/>
      <main className={styles.main}>
        <Catalog/>
        <TodoPage/>
      </main>
      <Footer/>
    </div>
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
