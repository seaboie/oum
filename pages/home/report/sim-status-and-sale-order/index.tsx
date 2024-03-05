import { useState } from "react";
import DefaultLayout from "@/components/layouts/DefaultLayout";
import styles from "./styles.module.css";
import { Box, Grid, Typography } from "@mui/material";
import SimReportContent from "../../../../components/SimReportContent";
import SaleReportContent from "../../../../components/SaleReportContent";
import blackSimReportIcon from "@/public/sim-report-icon-black.svg";
import whiteSimReportIcon from "@/public/sim-report-icon-white.svg";
import graySimReportIcon from "@/public/sim-report-icon-gray.svg";
import blackSaleReportIcon from "@/public/sale-report-icon-black.svg";
import graySaleReportIcon from "@/public/sale-report-icon-gray.svg";
import whiteSaleReportIcon from "@/public/sale-report-icon-white.svg";
import Image from "next/image";

enum SwitchOptions {
  SIM = "SIM",
  SALE = "SALE",
}

export default function SimStatusAndSaleOrderPage() {
  const [activeOption, setActiveOption] = useState<SwitchOptions>(
    SwitchOptions.SIM
  );

  const handleSwitchClick = (option: SwitchOptions) => {
    setActiveOption(option);
  };

  return (
    <DefaultLayout title="Sim Status & Sale Order Summary Report">
      <Box component="section" sx={{ mx: 3 }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Image
              priority
              src={
                activeOption === SwitchOptions.SIM
                  ? blackSimReportIcon
                  : blackSaleReportIcon
              }
              alt={
                activeOption === SwitchOptions.SIM
                  ? "simReportIcon"
                  : "saleReportIcon"
              }
            />
          </Grid>
          <Grid item>
            <Typography variant="h5">
              {activeOption === SwitchOptions.SIM
                ? "Sim Status Report"
                : "Sale Order Summary Report"}
            </Typography>
          </Grid>
        </Grid>
        <div className={styles.SwitchContainer}>
          <div
            className={styles.ToggleItem}
            style={{
              backgroundColor:
                activeOption === SwitchOptions.SIM ? "#E44160" : "transparent",
            }}
            onClick={() => handleSwitchClick(SwitchOptions.SIM)}
          >
            <Image
              color="red"
              width={15}
              priority
              src={
                activeOption === SwitchOptions.SALE
                  ? graySimReportIcon
                  : whiteSimReportIcon
              }
              alt="simReportIcon"
            />
            <div className={styles.Text}>
              <Typography
                color={activeOption === SwitchOptions.SALE ? "gray" : "white"}
              >
                Sim Status Report
              </Typography>
            </div>
          </div>
          <div
            className={styles.ToggleItem}
            style={{
              backgroundColor:
                activeOption === SwitchOptions.SALE ? "#E44160" : "transparent",
            }}
            onClick={() => handleSwitchClick(SwitchOptions.SALE)}
          >
            <Image
              color={activeOption === SwitchOptions.SALE ? "white" : "gray"}
              width={15}
              priority
              src={
                activeOption === SwitchOptions.SALE
                  ? whiteSaleReportIcon
                  : graySaleReportIcon
              }
              alt="saleReportIcon"
            />
            <div className={styles.Text}>
              <Typography
                color={activeOption === SwitchOptions.SALE ? "white" : "gray"}
              >
                Sale Order Summary Report
              </Typography>
            </div>
          </div>
        </div>
        {activeOption === SwitchOptions.SIM ? (
          <SimReportContent />
        ) : (
          <SaleReportContent />
        )}
      </Box>
    </DefaultLayout>
  );
}
