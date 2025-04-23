import ReactMarkdown from 'react-markdown'

function Recipe(props){

    

    return(
<div>

<h2 className="text-4xl">Suggested recipe</h2>
<div className="prose max-w-none">
        <ReactMarkdown>{props.recipeData}</ReactMarkdown>
      </div>
</div>
    )
}

export default Recipe