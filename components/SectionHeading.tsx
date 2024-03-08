import React from "react";

type headingType = {
  children: React.ReactNode;
};

const SectionHeading = ({ children }: headingType) => {
  return (
    <h2 className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </h2>
  );
};

export default SectionHeading;
