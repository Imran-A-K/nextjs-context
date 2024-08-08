"use client";

import { useState } from "react";

function Cell({ filled = false, isDisabled, onClick, label, gradient }) {
  return (
    <button
      aria-label={label}
      disabled={isDisabled}
      onClick={onClick}
      // className={filled ? "bg-teal-600 p-10" : "p-10 bg-slate-500"}
      className={filled ? `${gradient} p-10` : "p-10 bg-slate-500"}
    />
  );
}

const gradientColorSet = [
  "bg-gradient-to-r from-red-500 to-orange-500",
  "bg-gradient-to-r from-blue-600 to-violet-600",
  "bg-gradient-to-r from-cyan-500 to-blue-500",
  "bg-gradient-to-r from-fuchsia-500 to-cyan-500",
  "bg-gradient-to-r from-purple-500 to-purple-900",
  "bg-gradient-to-r from-lime-400 to-lime-500",
  "bg-gradient-to-r from-pink-500 to-rose-500",
  "bg-gradient-to-r from-emerald-400 to-cyan-400",
  "bg-gradient-to-r from-fuchsia-600 to-purple-600",
];

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
    <div className="px-6 pt-24 flex flex-col items-center justify-center">
      <h1 className="mb-8 text-xl sm:text-2xl text-slate-800">
        {!isDeactivating &&
          order.length > 0 &&
          order.length < config.flat(1).filter(Boolean).length &&
          "Keep clicking to select more cells"}
        {!isDeactivating && order.length == 0 && "Please click to select cells"}
        {isDeactivating && (
          <span>
            All cells are selected <br className="sm:hidden" />
            <span className="text-lime-600">
              deselecting them in reverse order
            </span>
          </span>
        )}
      </h1>
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
              gradient={gradientColorSet[index]}
              filled={order.includes(index)}
              onClick={() => activateCells(index)}
              isDisabled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default SelectableGrid;
