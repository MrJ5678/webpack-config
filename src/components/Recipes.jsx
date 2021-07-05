import { useState } from "react"

const object = {
  name: "Jld",
  age: 30,
}

const seniorObject = {
  ...object,
  hobby: "code",
  gender: "female",
}

console.log(object)
console.log(seniorObject)

function Recipes() {
  const [recipe, setRecipe] = useState({})
  return (
    <div>
      <h3>Current Recipe:</h3>
      <button onClick={() => setRecipe(object)}>object</button>
      <button onClick={() => setRecipe(seniorObject)}>seniorObject</button>

      <ul>
        {Object.keys(recipe).map(material => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Recipes
