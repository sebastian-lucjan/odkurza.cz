import contentfulClient from './contentfulClient';

export const getContent = async (contentfulPhrase) => {
  const res = await contentfulClient.getEntries({ content_type: contentfulPhrase });

  return res.items[0].fields;
};
