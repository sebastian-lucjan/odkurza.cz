import { createClient } from 'contentful';

const spaceId: string = process.env.CONTENTFUL_SPACE_ID || '';
const accessToken: string = process.env.CONTENTFUL_ACCESS_TOKEN || '';

export default createClient({
  space: spaceId,
  accessToken,
});
