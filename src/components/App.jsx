import "../styles/index.scss"
import Recipes from "./Recipes"
import facebook from "../images/undraw_lightbulb_moment_re_ulyo.png"
import unDraw from "../images/undraw_Sync_files_re_ws4c.svg"

function App() {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={facebook} alt="facebook" width="250" />
        <img src={unDraw} alt="unDraw" width="250" />
        <Recipes />
      </main>
    </>
  )
}

export default App
