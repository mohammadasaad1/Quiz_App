function Progress({ index, numQuestions, points, mxPoints, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        <strong>
          Question {index + 1} / {numQuestions}
        </strong>
      </p>

      <p>
        <strong>
          {points} / {mxPoints}
        </strong>
      </p>
    </header>
  );
}

export default Progress;
