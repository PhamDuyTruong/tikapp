import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: '2b1fhqct',
  dataset: 'production',
  apiVersion: '2023-01-21',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
