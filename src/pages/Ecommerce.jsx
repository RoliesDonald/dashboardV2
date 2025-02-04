import React from "react";

// icons
import { BsCurrencyDollar } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

//diagram components
import { StackedChart, PieChart, Button, SparkLine } from "../components";

//Data for diagram
import {
  earningData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";

//context
import { useStateContext } from "../contexts/ContextProvider";

const Ecommerce = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-wrap lg:flex-nowrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-400 pb-1">Earning</p>
              <p className="font-bold text-3xl text-blue-800">Rp. 2.000.000</p>
            </div>
          </div>
          <div className="mt-4">
            <Button
              color="white"
              bgColor="blue"
              text="Detail"
              borderRadius="10px"
              size="sm"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-2 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-xl"
            >
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full p-4 hover:drop-shadow-md"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold text-slate-600">
                  {item.amount}
                </span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400 mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780">
          <div className="flex justify-between">
            <p className="font-semibold text-gray-500 text-xl">
              Revenue Update
            </p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Expense</span>
              </p>
              <p className="flex items-center gap-2 text-green-600 hover:drop-shadow-xl">
                <span>
                  <GoDotFill />
                </span>
                <span>Budget</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className="border-r-2 border-color m-4 pr-10">
              <div>
                <p className="flex items-center">
                  <span className="text-3xl font-semibold text-neutral-600">
                    Rp.300.000
                  </span>
                  <span className="p-1.5 hover:drop-shadow-md cursor-pointer rounded-full text-white bg-blue-400 ml-3 text-xs">
                    25%
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Budget</p>
              </div>
              <div className="mt-10">
                <p className="flex items-center">
                  <span className="text-3xl font-semibold text-neutral-600">
                    Rp.760.000
                  </span>
                </p>
                <p className="text-gray-500 mt-1">Expense</p>
              </div>

              <div className="mt-5 bg-cyan-50 rounded-xl">
                <SparkLine
                  currentColor="blue"
                  id="line-sparkLine"
                  type="Line"
                  height="80px"
                  width="250px"
                  data={SparklineAreaData}
                  color="blue"
                />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor="blue"
                  text="Download Report"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <StackedChart width="320px" height="360px" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;
