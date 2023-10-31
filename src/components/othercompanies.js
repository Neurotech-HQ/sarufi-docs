import React from "react";
import TrustPilot from "./trustpilot";

function OtherCompanies() {
  const companies = [
    {
      title: "Sahara Ventures",
      url: "img/otherCompanies/sahara-ventures.png",
    },
    {
      title: "Rlabs",
      url: "img/otherCompanies/rlabs.png",
    },
    {
      title: "Udsm",
      url: "img/otherCompanies/udsm.png",
    },
    {
      title: "Afya Intelligence",
      url: "img/otherCompanies/afya-intelligence.png",
    },
    {
      title: "Yebi Health",
      url: "img/otherCompanies/yebi-health.png",
    },
    {
      title: "Afya Sol",
      url: "img/otherCompanies/afya-sol.png",
    },
    {
      title: "Vijana tech",
      url: "img/otherCompanies/vijana-tech.png",
    },
    {
      title: "Niajiri",
      url: "img/otherCompanies/niajiri.png",
    },
    {
      title: "Head Start",
      url: "img/otherCompanies/h-start.png",
    },
    {
      title: "Kazi Connect",
      url: "img/otherCompanies/kaziconnect.png",
    },
    {
      title: "Ndovu Dental Clinic",
      url: "img/otherCompanies/ndovu-clinic.png",
    },
    {
      title: "Laina Finance",
      url: "img/otherCompanies/laina-finance.svg",
    },
  ];

  return (
    <>
      <TrustPilot />
      <div style={{
        margin: "4rem auto",
      }}>
        <p
          className="text-white"
          style={{
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Developers from these companies trust us
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            flexWrap: "wrap",
            columnGap: "2rem",
            rowGap: "2rem",
          }}
        >
          {/* Limit to 5 only */}
          {companies.slice(0, 7).map((company, index) => (
            <img
              src={company?.url}
              key={index}
              style={{
                height: "auto",
                width: "100px",
                alignSelf: "center",
                // cursor: "grab",
              }}
              title={company?.title}
              alt={company?.title}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default OtherCompanies;
