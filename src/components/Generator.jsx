import React from "react";
import SectionWrapper from "./SectionWrapper";

function Header(props) {
  const { index, title, description } = propsreturn(
    <div>
      <div>
        <p>{index}</p>
        <h4>{title}</h4>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default function Generator() {
  return (
    <SectionWrapper
      header={"generate our work out"}
      title={["it's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"pick your poison"}
        description={"Select the workout you wish to endure."}
      />
    </SectionWrapper>
  );
}
