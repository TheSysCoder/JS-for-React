import { Fragment } from "react";

const ArrayObjects = () => {
  const employee = [
    {
      emp_name: "Jake",
      emp_job: "Developer",
      emp_salary: 345678,
    },
    {
      emp_name: "John",
      emp_job: "DevOps",
      emp_salary: 32456332,
    },
    {
      emp_name: "Sara",
      emp_job: "SRE",
      emp_salary: 6543134,
    },
  ];

  return (
    <Fragment>
      <h3>Employee Details</h3>
      <table>
        <tr>
          <th>Employee Name</th>
          <th>Employee Job</th>
          <th>Employee Salary</th>
        </tr>
        {employee.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.emp_name}</td>
              <td>{item.emp_job}</td>
              <td>{item.emp_salary}</td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
};

export default ArrayObjects;
