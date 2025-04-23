import ReactMarkdown from 'react-markdown'

function Recipe(props){

    

    return(
<div>

<h2 className="text-4xl">Suggested recipe</h2>
<ReactMarkdown>{props.recipeData}</ReactMarkdown>
</div>
    )
}

export default Recipe