// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = '28d3uqqn6e'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map
  domain: 'dev-kaak7qh4.auth0.com',            // Auth0 domain
  clientId: 'BUWkCvMd8Pt1QjfTSI4JEzYw2TiXi49l',          // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
