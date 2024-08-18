import React from 'react';
import { Button } from 'flowbite-react';
import { AiOutlineUndo, AiOutlineRedo, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';


const CounterControls = ({ onIncrement, onDecrement, onUndo, onRedo, counter }) => {
  return (
    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 mt-6">
      <Button onClick={onDecrement} gradientDuoTone="redToYellow" outline size="lg" disabled={counter <= 0}>
        <AiOutlineMinus className="text-xl" />
      </Button>

      <Button onClick={onIncrement} gradientDuoTone="tealToLime" outline size="lg" disabled={counter >= 150}>
        <AiOutlinePlus className="text-xl" />
      </Button>
      <Button onClick={onUndo}  gradientDuoTone="purpleToBlue" outline size="lg" disabled={counter === 0}>
        <AiOutlineUndo className="text-xl" />
      </Button>
      <Button onClick={onRedo} gradientDuoTone="greenToBlue" outline size="lg" disabled={counter === 150}>
        <AiOutlineRedo className="text-xl" />
      </Button>
    </div>
  );
};

export default CounterControls;
