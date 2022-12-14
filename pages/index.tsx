import type { NextPage } from 'next';

import { getAllPostsByDate } from 'features/Posts/api';

import generateRssFeed from 'core/utilities/generateRSSFeed';

import { PrimaryLayout } from 'features/Layout';

import { Hero } from 'features/HomePage';

import { PostSummary } from 'features/Posts/types';

import { SITE_DESCRIPTION, SITE_IMAGE, SITE_NAME } from 'core/constants';
import { POST_HEADER_FIELDS } from 'features/Posts';

interface HomeProps {
  lastPosts: Array<PostSummary>;
}

const Home: NextPage<HomeProps> = ({ lastPosts }) => {
  return (
    <PrimaryLayout
      pageTitle={SITE_NAME}
      pageMetaDescription={SITE_DESCRIPTION}
      pageImagePath={SITE_IMAGE}
    >
      <Hero />
    </PrimaryLayout>
  );
};

export default Home;

export async function getStaticProps() {
  await generateRssFeed();
  const lastPosts = getAllPostsByDate(POST_HEADER_FIELDS).slice(0, 3);

  return {
    props: {
      lastPosts,
    },
  };
}
