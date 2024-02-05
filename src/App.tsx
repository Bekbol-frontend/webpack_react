import { useAppContext } from "./context/useAppContext";
import { useTheme } from "./hooks/useTheme";
import { clsx } from "./helpers/clsx";

function App() {
  const { theme, toggleTheme } = useAppContext();

  console.log(
    clsx(["title", "desc"], {
      active: true,
    })
  );

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
