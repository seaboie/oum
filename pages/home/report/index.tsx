import { Link, Typography } from "@mui/material";
import DefaultLayout from '@/components/layouts/DefaultLayout'

export default function ReportPage() {
    return <>
        <DefaultLayout title="Report">
            <Link href="/home/report/sim-status-and-sale-order">
                <Typography>
                    Sim Status & Sale Order Summary Report
                </Typography>
            </Link>
        </DefaultLayout>
    </>
}