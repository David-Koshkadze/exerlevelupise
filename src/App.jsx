import { useEffect, useState } from "react";
import SimilarSales from "./components/SimilarSales";
import Terms from "./components/Terms";

import CashGames from "./components/CashGames";
import SpringSeries from "./components/SpringSeries";
import AdditionalCard from "./components/AdditionalCard";
import FinalStage from "./components/FinalStage";

const activeTabClasses = `h-[90px] bg-[#EF5A21] m-auto rounded-[12px] w-full mt-[-7px] flex justify-center items-center flex-col cursor-pointer`;
const inactiveTabClasses = `bg-transparent m-auto w-full flex justify-center items-center flex-col cursor-pointer`;

function App() {
  const [tabIndex, setTabIndex] = useState(1); // start tabs with one

  const changeTabIndex = (index) => {
    setTabIndex(index);
  };

  useEffect(() => {
    console.log(tabIndex);
  }, [tabIndex, setTabIndex]);

  return (
    <div className="flex min-h-screen w-full justify-center bg-black">
      <div className="modal relative top-0 mt-8 w-[940px] max-w-[940px] scroll-smooth rounded-t-lg bg-[#1C1D1E] pb-[90px]">
        {/* Image */}

        <div className="z-[9999] block md:sticky md:top-0">
          <div className="absolute right-4 top-4 hidden h-[34px] w-[34px] cursor-pointer place-items-center rounded-full bg-[#25292B] md:grid">
            <span className="font-bold text-white">&#10005;</span>
          </div>
          <div className="absolute left-4 top-4 flex h-[34px] w-[280px] items-center gap-2 rounded-full bg-[#25292B] pl-[5px] text-center text-[13px] text-white">
            <div className="h-[25px] w-[81px] rounded-full bg-[#7D7D7D]">
              სლოტები
            </div>
            <span className="whitespace-nowrap font-helvetica-bold text-[15px]">
              10 იანვარი - 12 მარტი
            </span>
          </div>
        </div>

        <div
          className="mb-6 h-auto min-h-[200px] w-full rounded-t-xl bg-cover pt-[38%]"
          style={{ backgroundImage: "url(/assets/banner.jpg)" }}
        ></div>

        {/* Body */}
        <div className="px-4 text-white md:px-[43px]">
          {tabIndex === 1 ? (
            <p className="mb-[14px] font-november-bold text-base leading-[26px] md:text-[20px]">
              მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
            </p>
          ) : tabIndex === 2 || tabIndex === 3 ? (
            <p className="mb-[14px] font-november-bold text-base leading-[26px] md:text-[20px]">
              მოიპოვე 10 საგზურიდან ერთ-ერთი
            </p>
          ) : null}

          <p className="mb-[32px] font-november text-sm leading-[18px] md:text-base">
            მოხვდი პოკერის ფესტივალზე მალტაში
          </p>

          {/* Tabs Switch */}
          <div className="mb-6 grid h-[77px] w-full grid-cols-3 rounded-[12px] bg-[#2C3234] font-november-bold [&>div>span]:font-november">
            {/* Tab 1 */}
            <div
              onClick={() => changeTabIndex(1)}
              className={
                tabIndex === 1 ? `${activeTabClasses}` : `${inactiveTabClasses}`
              }
            >
              <span className={tabIndex == 1 ? "text-[12px]" : "text-[9px]"}>
                1 - 29 აპრილი
              </span>
              <p className={tabIndex == 1 ? "text-[18px]" : "text-[13px]"}>
                Cash Games
              </p>
            </div>
            {/* Tab 2 */}
            <div
              onClick={() => changeTabIndex(2)}
              className={
                tabIndex === 2 ? `${activeTabClasses}` : `${inactiveTabClasses}`
              }
            >
              <span className={tabIndex == 2 ? "text-[12px]" : "text-[9px]"}>
                13 - 29 აპრილი
              </span>
              <p className={tabIndex == 2 ? "text-[16px]" : "text-[13px]"}>
                Spring Series
              </p>
            </div>
            {/* Tab 3 */}
            <div
              onClick={() => changeTabIndex(3)}
              className={
                tabIndex === 3 ? `${activeTabClasses}` : `${inactiveTabClasses}`
              }
            >
              <span className={tabIndex == 3 ? "text-[12px]" : "text-[9px]"}>
                30 აპრილი
              </span>
              <p className={tabIndex == 3 ? "text-[16px]" : "text-[13px]"}>
                Final Stage
              </p>
            </div>
          </div>

          {/* Section 1 Container  */}

          {tabIndex === 1 ? (
            <CashGames />
          ) : tabIndex === 2 ? (
            <SpringSeries />
          ) : tabIndex === 3 ? (
            <FinalStage />
          ) : null}

          {/* Additional Card */}
          <AdditionalCard />

          {/* Terms and qonditions */}

          <Terms />

          <SimilarSales />
        </div>
        {/* Play Button Fixed Bottom */}
        <div className="fixed bottom-0 flex h-[70px] w-full max-w-[940px] items-center justify-center border-t-[3px] border-[#F05A22] bg-[#171718]">
          <button className="inline-flex h-[36px] w-[144px] items-center justify-center rounded-[3px] bg-[#F05A22] px-4 py-2 font-helvetica-medium text-[15px] text-white hover:bg-[#ee4c1e]">
            ითამაშე
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
