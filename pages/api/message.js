import { hygraphClient } from "../../lib/hygraph";

export const GetAllMessages = `
query {
  greetingMessages {
    greatTitle
    productDescription
  }
}
`;

export default async (req, res) => {
  switch (req.method.toLowerCase()) {
    case "get": {
      const { greetingMessages } = await hygraphClient.request(GetAllMessages);
      res.status(200).json(greetingMessages);

      break;
    }
  }
};
