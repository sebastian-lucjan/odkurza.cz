import contentfulClient from '@lib/services/cms/contentfulClient';

export const getContent = async (contentfulPhrase: string): Promise<any> => {
  const res = await contentfulClient.getEntries({ content_type: contentfulPhrase });

  // contentful data structure
  return res.items[0].fields;
};
