import type { Dispatch, SetStateAction } from "react";
const tipOptions = [
    {
      id: 'tip-10',
      value: 0.10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: 0.20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: 0.50,
      label: '50%'
    },
  ];
  
  type TipPercentage = {
    settip: Dispatch<SetStateAction<number>>,
    tip: number

  }

  export default function TipPercentage({settip, tip}: TipPercentage ) {
    return (
      <div>
        <h3 className="font-black text-2xl">Propina:</h3>
  
        <form>
          {tipOptions.map(tipOption => (
            <div className="flex gap-2"
            key={tipOption.id}>
              <input
                type="radio"
                id={tipOption.id}
                name="tip"
                value={tipOption.value}
                onChange={e => settip(+e.target.value)}
                checked={tipOption.value === tip}
              />
              <label htmlFor={tipOption.id}>{tipOption.label}</label>
            </div>
          ))}
        </form>
      </div>
    );
  }
  