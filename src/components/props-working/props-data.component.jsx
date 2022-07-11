import { Fragment } from "react";

const PropsData = (props) => {
  const jobs = props.jobTypes;
  return (
    <Fragment>
      <h1>Props Data Example</h1>
      {jobs.map((j, index) => {
        return <p key={index}>{j}</p>;
      })}
    </Fragment>
  );
};

export default PropsData;
