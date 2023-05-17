
import Question from '../question/Question';

const Sample = (props) => {
    let data = require('../../_assets/sample.json');
    console.log(data)
    return (
        <>
        <h2>Sample Component</h2>
        <form>
        {data.questions.map((question, id)=> {
            return (
                <Question question={question} id={id}></Question>
            )
        })}
        <button>Submit</button>
        </form>

        </>
    )
};

export default Sample;
