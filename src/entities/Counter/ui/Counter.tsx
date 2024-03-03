import { IStateSchema } from "@/app/Providers/StoreProvider";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import Button from "@/shared/ui/Button/ui/Button";
import { useSelector } from "react-redux";
import { counterActions } from "../model/slice";
import { value } from "../model/selector";

function Counter() {
  const valueCount = useSelector(value);

  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter: {valueCount}</h1>
      <Button onClick={() => dispatch(counterActions.increment())}>+</Button>
      <Button onClick={() => dispatch(counterActions.decrement())}>-</Button>
      <Button onClick={() => dispatch(counterActions.changeCount(4))}>
        change count plus
      </Button>
      <Button onClick={() => dispatch(counterActions.changeCount(-4))}>
        change count minus
      </Button>
    </div>
  );
}

export default Counter;
