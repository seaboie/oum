'use client';

import DocumentGraySmallIcon from "src/components/icons/document-gray-small";
import HamburgerIcon from "src/components/icons/hamburger";
import LogoIcon from "src/components/icons/logo";
import PersonIcon from "src/components/icons/person";
import SimIcon from "src/components/icons/sim";
import SimWhiteSmallIcon from "src/components/icons/sim-white-small";
import MultipleSelectPlaceholder from "src/components/shares/dropdown-chip";
import StickyHeadTable from "src/components/shares/table-sticky";
import TextField from '@mui/material/TextField';

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

            <div className="bg-[#F4F6F9] mt-5 ml-12 mr-5 rounded shadow-md px-5 py-5 font-medium">
                <div>Search By</div>

                <div className="flex items-start mt-2">
                    <div>
                        <div className=" bg-white">
                            <MultipleSelectPlaceholder />
                        </div>

                        <div className="text-xs mt-2">Multi number search for</div>
                        <div className="text-xs">(Phone Number/SIM Serial Number)</div>
                    </div>
                    <div className="mx-5 w-11/12">
                        <div className="">
                            {/* <MultipleSelectPlaceholder /> */}
                            {/* <input type="text" /> */}
                            <TextField id="outlined-basic" variant="outlined" className="bg-white w-full" />
                        </div>

                        <div className="text-xs mt-2">Input a number (eg. 081xxxxxxx) and enter, then input another (eg. 082xxxxxxx).</div>
                    </div>

                    <div>
                        <button className="bg-[#df4164] hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.0946 11.5946C11.1933 11.4958 11.3105 11.4175 11.4395 11.364C11.5685 11.3105 11.7067 11.283 11.8463 11.283C11.986 11.283 12.1242 11.3105 12.2532 11.364C12.3822 11.4175 12.4994 11.4958 12.5981 11.5946L16.6887 15.6852C16.8881 15.8845 17.0001 16.1547 17.0002 16.4366C17.0003 16.7184 16.8884 16.9888 16.6892 17.1882C16.49 17.3875 16.2197 17.4996 15.9379 17.4997C15.656 17.4998 15.3857 17.3879 15.1863 17.1887L11.0957 13.0981C10.9969 12.9994 10.9185 12.8822 10.8651 12.7532C10.8116 12.6242 10.7841 12.486 10.7841 12.3463C10.7841 12.2067 10.8116 12.0685 10.8651 11.9395C10.9185 11.8105 10.9969 11.6933 11.0957 11.5946H11.0946Z" fill="white" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.90625 13.25C7.67366 13.25 8.43356 13.0988 9.14256 12.8052C9.85155 12.5115 10.4958 12.081 11.0384 11.5384C11.581 10.9958 12.0115 10.3516 12.3052 9.64256C12.5988 8.93356 12.75 8.17366 12.75 7.40625C12.75 6.63884 12.5988 5.87894 12.3052 5.16994C12.0115 4.46095 11.581 3.81674 11.0384 3.27409C10.4958 2.73145 9.85155 2.301 9.14256 2.00733C8.43356 1.71365 7.67366 1.5625 6.90625 1.5625C5.35639 1.5625 3.87001 2.17818 2.77409 3.27409C1.67818 4.37001 1.0625 5.85639 1.0625 7.40625C1.0625 8.95611 1.67818 10.4425 2.77409 11.5384C3.87001 12.6343 5.35639 13.25 6.90625 13.25ZM13.8125 7.40625C13.8125 9.2379 13.0849 10.9945 11.7897 12.2897C10.4945 13.5849 8.7379 14.3125 6.90625 14.3125C5.0746 14.3125 3.31797 13.5849 2.02279 12.2897C0.727621 10.9945 0 9.2379 0 7.40625C0 5.5746 0.727621 3.81797 2.02279 2.52279C3.31797 1.22762 5.0746 0.5 6.90625 0.5C8.7379 0.5 10.4945 1.22762 11.7897 2.52279C13.0849 3.81797 13.8125 5.5746 13.8125 7.40625Z" fill="white" />
                            </svg>

                            <span className="text-white ml-2">Search</span>
                        </button>
                    </div>

                    <div>
                        <button className="py-2 px-4 text-[#d80326]">Reset</button>
                    </div>
                </div>
            </div>

            <div className="mt-6 mb-2 mx-12 text-xl font-medium">
                SIM Registration Status Result
            </div>

            <div className="mx-12">
                <StickyHeadTable />
            </div>
        </div>
    );
}