import ReactMarkdown from 'react-markdown'

function Recipe(props){

    

    return(
<div>
<ReactMarkdown>{props.recipeData}</ReactMarkdown>
<h2 className="text-4xl">Suggested recipe</h2>
<p></p>
<div className="my-4">
    <h3 className="text-2xl">Ingredients:</h3>
</div>
<div className="my-4">
    <h3 className="text-2xl">Instructions:</h3>
</div>
</div>
    )
}

export default Recipe