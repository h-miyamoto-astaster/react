import "./App.css";
import Article from "./components/Article";

function App() {
  return(
    <>
      <div>
      <Article 
        title = {'新・日本一わかりやすいReact入門講座基礎編'}
        content = {'今日のトピックはprops受け渡しについての講座について'}
      />
      </div>
    </>
  )
}

export default App;
