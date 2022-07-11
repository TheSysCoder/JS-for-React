import { Fragment } from "react";

const SpreadOperator = (props) => {
  const std = props.students;
  const num = [...props.numbers];
  return (
    <Fragment>
      <h1>Spread Operator Example</h1>
      <div>
        {std.map((s) => {
          return (
            <p>
              {s.roll} {s.name} {s.marks}
            </p>
          );
        })}
        {num.map((n) => {
          return <p>{n}</p>;
        })}
      </div>
    </Fragment>
  );
};
export default SpreadOperator;
