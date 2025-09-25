import { useEffect } from "react";
import CountButtons from "./CountButtons";
import CountDisplay from "./CountDisplay";
import { useCounterStore } from "../stores/counterStore";

export default function Count() {
  useEffect(() => {
    useCounterStore.subscribe(
      (state) => state.count,
      (newCount, prevCount) => {
        console.log(`count 변경됨:${prevCount} -> ${newCount}`);
      }
    );
  }, []);
  return (
    <>
      <CountDisplay />
      <CountButtons />
    </>
  );
}
