"use client";

import { useState } from "react";

function Cell({ filled = false, isDisabled, onClick, label }) {
  return (
    <button
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      className={filled ? "bg-teal-600 p-10" : "p-10 bg-slate-500"}
    />
  );
}

function SelectableGrid() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((originalOrder) => {
        const newOrder = originalOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }
        return newOrder;
      });
    }, 300);
  };
  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);
    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];
  return (
    <div className="px-6 pt-40 flex items-center justify-center">
      <div
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
        }}
        className="grid max-w-80 gap-8 w-full border-2 p-2"
      >
        {config.flat(1).map((value, index) => {
          return value ? (
            <Cell
              key={index}
              label={`Cell ${index}`}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span />
          );
        })}
      </div>
    </div>
  );
}

export default SelectableGrid;
