import { stripe } from "../../../../server/common/stripe";
import { getServerAuthSession } from "../../../../server/common/get-server-auth-session";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerAuthSession({ req, res });
  if (!session?.user) return res.status(401).send("Not Authorized");
  await stripe.customers
    .createSource(session.user.stripeCustomerId, {})
    .then(({ data }) => res.status(200).json(data));
};

export default handler;
