import ReactMarkdown from 'react-markdown'

function Recipe(props){

    console.log(props.recipeData)

    return(
<div className="bg-white rounded-xl p-2">

<h2 className="text-3xl">Suggested recipe</h2>
<div className="prose max-w-none">
        <ReactMarkdown>{props.recipeData}</ReactMarkdown>
      </div>
</div>
    )
}

export default Recipe