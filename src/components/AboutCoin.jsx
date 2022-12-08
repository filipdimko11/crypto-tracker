import React from "react";
import DOMPurify from "dompurify";

const AboutCoin = (props) => {
  const coin = props.props;
  const parser = new DOMParser();
  return (
    <div className="bg-secondary my-4 py-4 rounded-lg text-left px-6">
      About {coin.name}
      <div style={{ fontWeight: "lighter" }} className="text-sm">
        <div
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin?.description
                ? coin.description.en
                : "No description available"
            ),
          }}
        />
      </div>
    </div>
  );
};

export default AboutCoin;
