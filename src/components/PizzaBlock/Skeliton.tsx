import React from "react";
import ContentLoader from "react-content-loader";

const Skeliton = (props:{}) => {
  return (
    <div className="skeliton-container">
      <ContentLoader
        speed={2}
        width={280}
        height={465}
        viewBox="0 0 280 465"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}>
        <circle cx="120" cy="120" r="120" />
        <rect x="10" y="290" rx="5" ry="5" width="220" height="50" />
        <rect x="10" y="420" rx="5" ry="5" width="80" height="35" />
        <rect x="153" y="420" rx="15" ry="15" width="80" height="35" />
        <rect x="10" y="252" rx="5" ry="5" width="220" height="20" />
        <rect x="10" y="354" rx="5" ry="5" width="220" height="60" />
      </ContentLoader>
    </div>
  );
};

export default Skeliton;
