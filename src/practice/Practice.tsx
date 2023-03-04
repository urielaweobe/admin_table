import React from "react";
import { useState, useMemo, useCallback } from "react";

function SortedList({ list, sortFunc }: any) {
  console.log("Sorted");
  const sortedList = useMemo(() => {
    return [...list].sort(sortFunc);
  }, [list, sortFunc]);

  return <div>{sortedList.join(", ")}</div>;
}

const Practice = () => {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  const [names] = useState(["John", "Paul", "George", "Ringo"]);

  const sortFunc = useCallback(({a, b}: any) => a.localeCompare(b) * -1, []);

  return (
    <>
      <div>Total: {total}</div>
      <div>Names: {names.join(", ")}</div>
      <SortedList list={names} sortFunc={sortFunc} />
    </>
  );
};

export default Practice;
