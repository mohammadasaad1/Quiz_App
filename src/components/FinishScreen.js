function FinishScreen({ points, mxPoints, highscore, dispatch }) {
  const percentage = (points / mxPoints) * 100;
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of <strong>{mxPoints}</strong>{" "}
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">Highscore : {highscore} points</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz !
      </button>
    </>
  );
}

export default FinishScreen;
