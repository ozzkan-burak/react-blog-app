import  {request, gql} from "graphql-request";

const graphqlAPI = process.env.GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery{
      assetsConnection {
    edges {
      cursor
      node
    }
  }
}
    
  `;

  const result = await request(graphqlAPI, query);

  console.log(result);

  return result.assetsConnection.edges;
};