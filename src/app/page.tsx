import Link from "next/link";

export default function Page() {
    return (
        // <div className="text-6xl font-bold underline">Hello, สวัสดีชาวโลก</div>

        <main className="flex flex-col h-screen items-center justify-center">
            <h1>ไปหน้า Sim Report</h1>
            <Link
                href='/sim-report'
            >
                <button className="px-4 py-2 bg-blue-600 hover:bg-blue-400 rounded-md mt-4 text-white">Open</button>
            </Link>
        </main>
    )
}