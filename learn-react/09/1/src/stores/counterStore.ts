// zustand
// setter
// const [count, setCount] = useState({ count: 0 });
import { create } from "zustand";
import {
  combine,
  createJSONStorage,
  devtools,
  persist,
  subscribeWithSelector,
} from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CounterStore = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  incrementByAmount: (value: number) => void;
};

// immer(콜백함수)
// combine -> immer -> persist -> devtools -> subscribeWithSelector
export const useCounterStore = create<CounterStore>()(
  subscribeWithSelector(
    devtools(
      persist(
        immer(
          combine({ count: 0 }, (set) => ({
            increment: () =>
              set((state) => {
                state.count += 1;
              }),
            decrement: () =>
              set((state) => {
                state.count -= 1;
              }),
            reset: () => set({ count: 0 }),
            incrementByAmount: (value) =>
              set((state) => {
                state.count += value;
              }),
          }))
        ),
        {
          // 로컬스토리지 -> 브라우저 종료 해도 삭제 안됨, 탭과 탭사이 공유됨
          // 세션스토리지 -> 브라우저 종료 하면 삭제 됨, 대신에 탭과 탭 사이 공유 안됨
          name: "counter-store",
          storage: createJSONStorage(() => sessionStorage),
        }
      ),
      {
        trace: true,
      }
    )
  )
);
