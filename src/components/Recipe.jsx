import ReactMarkdown from 'react-markdown'

function Recipe(props){

    console.log(props.recipeData)

    return(
<div className="bg-white rounded-xl p-5">

<div className="prose max-w-none">
    <h2 className="text-3xl">Suggested recipe</h2>
        <ReactMarkdown>{props.recipeData}</ReactMarkdown>
      </div>
</div>
    )
}

export default Recipe