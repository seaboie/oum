import DocumentGraySmallIcon from "src/components/icons/document-gray-small";
import HamburgerIcon from "src/components/icons/hamburger";
import LogoIcon from "src/components/icons/logo";
import PersonIcon from "src/components/icons/person";
import SimIcon from "src/components/icons/sim";
import SimWhiteSmallIcon from "src/components/icons/sim-white-small";

export default function Page() {
    return (
        <div>
            <div className="flex justify-between shadow-md">
                <div className="flex flex-row items-center pl-5 pt-5 pb-5 pr-5 ">
                    <HamburgerIcon />
                    <div className="ml-4 mr-3">
                        <LogoIcon />
                    </div>
                    <p className="text-[#9F9F9F]">Channel Care</p>
                </div>
                <div className="flex flex-row items-center pl-5 pt-5 pb-5 pr-5">
                    <div className="flex mr-4 rounded border">
                        <div className="flex items-center bg-[#F2F2F2] py-2 px-2 ">
                            <div className="mr-1">
                                <PersonIcon />
                            </div>
                            <div className="  text-[#44444C] text-xs">
                                Dealer
                            </div>
                        </div>
                        <div className=" py-2 px-2 bg-[#E2E2E2] text-[#44444C] text-xs">
                            1799001
                        </div>
                    </div>
                    <button className="text-[#9F9F9F] py-2 px-6 border rounded shadow-md mr-4 text-xs">ติดต่อเรา</button>
                    <button className="text-[#9F9F9F] py-2 px-6 border rounded shadow-md text-xs">ออกจากระบบ</button>

                </div>
            </div>
            <div className="ml-12 mt-6 mr-12 text-xs">
                <p>Home / Report / Sim Status & Sale Order Summary Report</p>
            </div>
            <div className="flex flex-row items-center ml-12 mt-5 mr-12 text-2xl font-medium">
                <div className="mr-3">
                    <SimIcon />
                </div>
                <p className="text-[#44444C]">SIM Status Report</p>
            </div>
            <div className="inline-flex border px-2 py-2 rounded-full mt-5 ml-12">
                <button className="bg-red-600 hover:bg-red-600  text-white font-bold py-2 px-4 rounded-full text-sm inline-flex text-center">
                    <div className="mt-1 mr-1">
                        <SimWhiteSmallIcon />
                    </div>
                    <p> Sim Status Report</p>
                </button>
                <button className=" hover:bg-red-600 hover:text-white text-[#9F9F9F] font-bold py-2 px-4 rounded-full text-sm flex text-center">
                    <div className="mt-1 mr-1">
                        <DocumentGraySmallIcon />
                    </div>
                    <p>Sale Order Summary Report</p>
                </button>
            </div>

            <div className="bg-[#F4F6F9] h-44 mt-5 ml-12 mr-5 rounded shadow-md">

            </div>
        </div>
    );
}