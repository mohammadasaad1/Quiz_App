import Option from "./Option";
function Question({ question, answer, dispatch }) {
  // console.log(question);
  return (
    <div>
      <h4>{question.question}</h4>
      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
