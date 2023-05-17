const Question = ({question, id}) => {
    // if (!question.options) {return null}
    if (question.type === 'mcq'){ return (
        <>
            <label>{question.stem}
            <br/>
                <select>
                {question.options.map((option) => {
                    return <option value={option.value}>{option.text}</option>
                })} 
                </select>
            </label>
            <br/>
            <br/>
        </>
    ) } else if (question.type === 'cr') {
        return (
            <>
                <label>{question.stem}
                <br/>
                    <input type='text'></input>
                </label>
                <br/>
                <br/>
            </>
        )
    } else {
        return (
            <>
                <h3>{question.title}</h3>
                <h3>{question.instructions}</h3>
            </>
        )
    }
};

export default Question;