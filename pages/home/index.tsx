import { Link, Typography } from "@mui/material";
import DefaultLayout from '@/components/layouts/DefaultLayout'

export default function HomePage() {
    return <>
        <DefaultLayout title="Home">
            <Link href="/home/report">
                <Typography>
                    Report
                </Typography>
            </Link>
        </DefaultLayout>
    </>
}