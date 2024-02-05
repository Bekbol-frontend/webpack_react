import { useTheme, useAppContext } from "../shared/hooks";

function App() {
  const { theme, toggleTheme } = useAppContext();

  useTheme();

  return (
    <div>
      <h1>App: {theme}</h1>
      <div className="box">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis debitis
          modi recusandae voluptatum odit deserunt quaerat aperiam repudiandae
          mollitia. Architecto.
        </p>
      </div>
      <button onClick={toggleTheme}>toggle theme</button>
      <hr />
      <a href="#">lin a element</a>
    </div>
  );
}

export default App;
