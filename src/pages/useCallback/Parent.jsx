import React, { useCallback, useState } from "react";
import Display from "./Display";
import Title from "./Title";
import Button from "./Button";

const Parent = () => {
  const [salary, setSalary] = useState(2000);
  const [age, setAge] = useState(22);
  const increaseAge = useCallback(() => {
    setAge(age + 5);
  }, [age]);
  const increaseSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);
  return (
    <div>
      <Title />
      <Display text="age" displayValue={age} />
      <Button content="increase Age" handleClick={increaseAge} />
      <Display text="Salary" displayValue={salary} />
      <Button content="increase salary" handleClick={increaseSalary} />
    </div>
  );
};

export default Parent;
