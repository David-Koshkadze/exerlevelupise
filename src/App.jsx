import CardGray from "./components/CardGray";
import SimilarSales from "./components/SimilarSales";
import Terms from "./components/Terms";
import VoucherCard from "./components/VoucherCard";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const changeTabIndex = (index) => {
    setTabIndex(index);
  }

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
          <p className="text-[20px] leading-[26px] mb-[14px]">
            მოიპოვე მრავალფეროვანი პრიზები და 10 საგზურიდან ერთ-ერთი
          </p>
          <p className="text-base leading-[18px] mb-[32px]">
            მოხვდი პოკერის ფესტივალზე მალტაში
          </p>

          {/* Tabs Switch */}
          <div className="w-full h-[77px] bg-[#2C3234] rounded-[12px] grid grid-cols-3">
            {/* Tab 1 */}
            <div 
            
            className="h-[90px] bg-[#EF5A21] m-auto rounded-[12px] w-full mt-[-7px] flex justify-center items-center flex-col">
              <span className="text-[14px]">1 - 29 აპრილი</span>
              <span className="text-[18px]">Cash Games</span>
            </div>
            <div></div>
            <div></div>
          </div>

          {/* Section 1 Container  */}

          <div className="mt-6 rounded-[16px] bg-[#2C3234] w-full mb-14">
            <div
              className="bg-[#F05A22] max-w-[250px] h-1.5 rounded-b-md mx-auto mb-4"
              style={{
                boxShadow: "0 0 10px 0 #f05a22",
              }}
            ></div>
            <h1 className="mx-auto text-center mb-5">1L რეიკი = 1 ქულას</h1>
            {/* black inner container */}
            <div className="w-full bg-[#171718] border-[#25292B] border-x-4 border-b-4 rounded-b-[16px] p-6">
              <p className="text-base text-center mx-auto mb-5">
                ჰოლდემის TOP20 ლიდერბორდი
              </p>
              {/* -------- */}
              <div className="bg-[#25292B] rounded-[12px] p-8 h-[455px] mb-6">
                <div className="text-center flex items-center justify-between font-november mb-5">
                  <span className="pl-2.5 text-left flex-1 text-[13px] text-[#7D7D7D]">
                    პოზიცია
                  </span>
                  <div className="text-left flex-1 text-[13px] text-[#7D7D7D] flex gap-1.5 items-center">
                    <div className="bg-white w-[18px] h-3"></div>
                    <span>ვაუჩერი</span>
                  </div>
                  <span className="flex-1 text-[13px] text-[#7D7D7D]">
                    პრიზი
                  </span>
                </div>

                {/* rounded gray card */}

                <div className="border bg-transparent overflow-y-scroll card-scroll-custom max-h-[90%] pr-4">
                  {Array.from({ length: 10 }).map((item, idx) => (
                    <CardGray
                      id={idx}
                      position={idx + 1}
                      voucher={"1500L"}
                      prize={"კატეგორიული პრიზი"}
                    />
                  ))}
                </div>
              </div>

              {/* Ticket and vouchers cards */}
              <div className="w-full bg-[#25292B] rounded-[16px] p-6 flex flex-col gap-2.5">
                <VoucherCard />
                <VoucherCard />
                <VoucherCard />
              </div>
            </div>
          </div>

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
