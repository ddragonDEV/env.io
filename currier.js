const values = {
    1: {
      carrier: "CCH",
      service: "DEX",
    },
    17: {
      carrier: "CHP",
      service: "express",
    },
  };
  const json = {
    data: {
      BUIN: {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
      LAJA: {
        limit: 1,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      LEBU: {
        limit: 1,
        over_carrier_service_id: 1,
        under_carrier_service_id: 1,
      },
      LOTA: {
        limit: 1,
        over_carrier_service_id: 17,
        under_carrier_service_id: 17,
      },
    },
  };


  module.exports = {values, json}