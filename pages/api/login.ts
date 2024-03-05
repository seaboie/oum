// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

type DataResponse = {
  response: {};
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DataResponse>
) {
  const response = await axios.post(
    `https://tcm-uat.truecorp.co.th/auth/partner-authen/token-pwd`,
    {
      login_name: "17005288",
      password: "Test=12345",
    },
    {
      headers: {
        auth_api_key: "OAoeDU4QrKdbWl0nRqfEcYFMBZpTvyL2",
        app_id: "tccplus.5de7abe8840cbf8e",
        app_name: "tccplus",
      },
    }
  );

  res.status(200).json({ response: response.data });
}
