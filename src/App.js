import ArrayObjects from "./components/array-objects/array.component";
import PropsData from "./components/props-working/props-data.component";
import SpreadOperator from "./components/spread-operator/spread.component";
import { students, numbers } from "./utils/database";
function App() {
  // varibale declaration
  // types in javascript
  const firstName = `Pruthviraj sonawane`; //string
  const age = 29; //int
  const isSRE = true; // boolean
  let changeName = null; // null value

  let yearsofExp = 2;
  console.log(yearsofExp);
  yearsofExp = yearsofExp + 0.7;
  const welcomeMsg = `Hello, ${firstName}`;
  console.log(yearsofExp);

  const user = {
    firstName: "Mark",
    age: 29,
    job: "DevOps",
    [firstName]: "New name",
  };

  console.log(user);

  // arrays in js => user map and push

  const myFavFruits = ["Apple", "Bitroot", "orange", 37, true];
  myFavFruits.push("banana");

  // distructuring
  const name = ["Mark", "Tony"];

  const [fname, sname] = name;

  const userData = {
    uName: "JOny",
    uAge: 37,
    count: 30000,
  };

  const { uName, uAge, ...otherData } = userData;
  // spred operator

  // props example
  const jobTypes = ["DevOps", "SRE", "MERN", "ML"];
  return (
    <div>
      <p>Hello World {firstName}</p>
      <p>{welcomeMsg}</p>
      <p>
        {user.firstName} + {user.age} + {user.job} + {user[firstName]}
      </p>
      <p>{myFavFruits}</p>
      <div>
        {myFavFruits.map((fruit, index) => {
          return (
            <p key={index}>
              {index} -{fruit}
            </p>
          );
        })}
      </div>
      <p>{fname}</p>
      <p>{sname}</p>
      <p>
        {uName} is {uAge} is old - {otherData.count}
      </p>
      <ArrayObjects />
      <PropsData jobTypes={jobTypes} />
      <SpreadOperator students={students} numbers={numbers} />
    </div>
  );
}

export default App;
