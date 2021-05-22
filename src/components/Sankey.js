import React from "react";
import { Chart } from "react-google-charts";
import { useTranslation } from "react-i18next";

const Sankey = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2>{t("sankeyHeader")}</h2>
      <Chart
        width={600}
        height={"600px"}
        chartType="Sankey"
        loader={<div>Loading Chart</div>}
        options={{
          sankey: {
            link: { color: { fill: "#00FFFF" } },
            node: {
              colors: ["#348781"],
              label: { color: "#871b47" },
            },
          },
        }}
        data={data}
        rootProps={{ "data-testid": "3" }}
      />
    </>
  );
};

export default Sankey;
