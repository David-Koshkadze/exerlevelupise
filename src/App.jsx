import { useEffect, useState } from "react";
import SimilarSales from "./components/SimilarSales";
import Terms from "./components/Terms";

import CashGames from "./components/CashGames";
import SpringSeries from "./components/SpringSeries";
import AdditionalCard from "./components/AdditionalCard";

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
    <div className="min-h-screen w-full bg-black flex justify-center">
      <div className="modal mt-8 pb-[90px] max-w-[940px] w-[940px] bg-[#1C1D1E] rounded-t-lg relative top-0 scroll-smooth">
        {/* Close Icon */}
        <div className="sticky top-0">
          <div className="w-[34px] h-[34px] rounded-full bg-[#25292B] absolute top-4 right-4 cursor-pointer grid place-items-center">
            <span className="text-white font-bold">&#10005;</span>
          </div>
          <div className="w-[280px] h-[34px] rounded-full bg-[#25292B] absolute top-4 left-4 flex items-center pl-[5px] text-[13px] text-white text-center gap-2">
            <div className="rounded-full w-[81px] h-[25px] bg-[#7D7D7D]">
              სლოტები
            </div>
            <span className="text-[15px] whitespace-nowrap font-helvetica-bold">
              10 იანვარი - 12 მარტი
            </span>
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-[350px] bg-[#D7C860] rounded-t-xl mb-6"></div>

        {/* Body */}
        <div className="px-[43px] text-white">
          {tabIndex === 1 ? (
            <p className="text-[20px] leading-[26px] mb-[14px] font-november-bold">
              მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
            </p>
          ) : tabIndex === 2 || tabIndex === 3 ? (
            <p className="text-[20px] leading-[26px] mb-[14px] font-november-bold">
              მოიპოვე 10 საგზურიდან ერთ-ერთი
            </p>
          ) : null}

          <p className="text-base leading-[18px] mb-[32px] font-november">
            მოხვდი პოკერის ფესტივალზე მალტაში
          </p>

          {/* Tabs Switch */}
          <div className="w-full h-[77px] bg-[#2C3234] rounded-[12px] grid grid-cols-3 mb-6 font-november-bold [&>div>span]:font-november">
            {/* Tab 1 */}
            <div
              onClick={() => changeTabIndex(1)}
              className={
                tabIndex === 1 ? `${activeTabClasses}` : `${inactiveTabClasses}`
              }
            >
              <span className={tabIndex == 1 ? 'text-[12px]' : 'text-[9px]'}>1 - 29 აპრილი</span>
              <p className={tabIndex == 1 ? 'text-[18px]' : 'text-[13px]'}>Cash Games</p>
            </div>
            {/* Tab 2 */}
            <div
              onClick={() => changeTabIndex(2)}
              className={
                tabIndex === 2 ? `${activeTabClasses}` : `${inactiveTabClasses}`
              }
            >
              <span className={tabIndex == 2 ? 'text-[12px]' : 'text-[9px]'}>13 - 29 აპრილი</span>
              <p className={tabIndex == 2 ? 'text-[16px]' : 'text-[13px]'}>Spring Series</p>
            </div>
            {/* Tab 3 */}
            <div
              onClick={() => changeTabIndex(3)}
              className={
                tabIndex === 3 ? `${activeTabClasses}` : `${inactiveTabClasses}`
              }
            >
              <span className={tabIndex == 3 ? 'text-[12px]' : 'text-[9px]'}>30 აპრილი</span>
              <p className={tabIndex == 3 ? 'text-[16px]' : 'text-[13px]'}>Final Stage</p>
            </div>
          </div>

          {/* Section 1 Container  */}

          {tabIndex === 1 ? (
            <CashGames />
          ) : tabIndex === 2 ? (
            <SpringSeries />
          ) : null}

          {/* Additional Card */}
          <AdditionalCard />

          {/* Terms and qonditions */}

          <Terms />

          <SimilarSales />
        </div>
        {/* Play Button Fixed Bottom */}
        <div className="fixed bottom-0 bg-[#171718] w-full max-w-[940px] h-[70px] border-t-[3px] border-[#F05A22] flex justify-center items-center">
          <button className="bg-[#F05A22] hover:bg-[#ee4c1e] text-white py-2 px-4 w-[144px] h-[36px] inline-flex justify-center items-center rounded-[3px] text-[15px] font-helvetica-medium">
            ითამაშე
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
