/* eslint-disable */
import { Grid } from "@mui/material";
import PageTitle from "../Wrapper/PageTtitle";
import PropertyCardFetched from "../PropertyCardFetched.tsx";
import ButtonComponent from "../Button";
import SaleWrapper from "../Wrapper/SaleWrapper";
import { useRouter } from "next/navigation";

const SaleComponent = () => {
  const router = useRouter();
  return (
    <SaleWrapper>
      <Grid item md={12} sx={{ textAlign: "center" }}>
        <PageTitle
          heading="Properties For Sale"
          subHeading="We provide full service at every step."
        />
      </Grid>

      <PropertyCardFetched />
      <Grid item md={12} sx={{ textAlign: "center", margin: "32px 0 0" }}>
        <ButtonComponent
          text="View All"
          onClick={() => router.push("/about")}
        />
      </Grid>
    </SaleWrapper>
  );
};

export default SaleComponent;
