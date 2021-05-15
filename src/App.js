import './App.scss';

function App() {
  const title = "Welcome to the new blog"
  const url = "https://netninja.dev"
  let likes = 50
  return (
    <div className="App">
      <header className="App__header">
        <span className="App__title">{ title }</span>
      </header>

      <main className="Main__content">
        <span>Liked {  likes }</span>
        <a href={ url }>Dojo</a>
      </main>
    </div>
  );
}

export default App;
