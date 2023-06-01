'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AuthorizedAPI = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint URL
        const apiUrl = 'https://cdh.digitalfastforward.cloud:8443/prweb/PRRestService/PegaMKTContainer/V3/Container?SubjectID=19&ContextName=Customer&ContainerName=NextBestAction&Channel=Web&Direction=Inbound&AppID=CDHDemo&Placements=Hero,Tile,Tile,Tile';

        // Replace 'YOUR_ACCESS_TOKEN' with the actual access token
        const accessToken = 'eyJraWQiOiJmMThiZDFmZDIxNDljYTcyNWJjZjc5ZGRjODI1MTgzZSIsInR5cCI6IkpXVCIsImFsZyI6IlJTMjU2In0.eyJhdWQiOiJ1cm46MTA0MTcxMDUyMzkwNTM0NTYxMTUiLCJzdWIiOiJib3Bha2lAZGlnaXRhbGZhc3Rmb3J3YXJkLmNvbSIsImFwcF9uYW1lIjoiQ1NEZW1vIiwibmJmIjoxNjg0NzY2ODcyLCJhcHBfdmVyc2lvbiI6IjAxLjAxLjAxIiwiaXNzIjoidXJuOmNkaC5kaWdpdGFsZmFzdGZvcndhcmQuY2xvdWQiLCJleHAiOjE2ODQ3NzA0NzIsImlhdCI6MTY4NDc2Njg3MiwianRpIjoiZThiMWE3MzQ0YzM2MDRiMDViMWRiNzNmMjNhNjNmMWQiLCJvcGVyYXRvcl9hY2Nlc3MiOiJDU0RlbW86Q1NBZG1pbiJ9.fMnvNHhC4Zhi5F0vSZvNUoD-c6A3uz0lk07TmifRBATGDYeGsn64p_cO_W-E5e1SJVI3InxOOhXJmeONXO3ByptelLMfvYJo6H50D5R_ocehGyDrYEEIWFGuA1MKjKL4SKTc2CePRfMy7P9vdlV9-QA1jyj5OQJnYF9nifAxl8RGMAgU42JwvLkU-CUE_H6tk4QMldnXj5YeGRfS86thBBP2t6zgcDMA4CtKNdFqOTw_jC1Mzzr5vN-oLHYdWpZLke-nTLAUuTBHnaHvoUNQRmrsTeiO8Tjdgb1PmBS9fJx_Vrh6t11zndscaqb58NXlx9Dj7NQOakLEiWgDW_bBTlYVWDNRxoFYlEIjiJR_2M48cdt6XxKPoYcTlbxZF3NYYf9WSYdctNtLOwy1MSDR5hrCIR51fRBs1hO8-SB1OdF2nAD5B9sMfQ48Du5jt8MMlvPLDyUO77afPT4V-wQtAl1mnmdD1tJlBW1c31g66mUrW2JcTwqsP8XsuT0NeRR3FIP-LNBEUV-jl2leEl9Ic2AUII0nmXxyDAxVt7As_V14iiIeG_p6fg3aENuJofIv_7or9Q-iHvJmSnit9EMxe_LFRyLDZ5N0dc4oaU1RDsIBtvxXmH4wPbNeO2dTUva1JUYffShrL622TFV0nIR1URfgff30pT5OYIrjEyhPlk8';
        // Set the authorization header with the access token fam
        const headers = {
          Authorization: `Bearer ${accessToken}`,
        };

        // Make the authorized API request
        const response = await axios.get(apiUrl, { headers });

        // Set the response data
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Authorized API Request</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AuthorizedAPI;
