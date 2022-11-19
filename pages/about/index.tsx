import type { NextPage } from 'next';

import { Box, Heading, Text } from '@chakra-ui/react';

import { PrimaryLayout } from 'features/Layout';

import { SITE_DESCRIPTION, SITE_IMAGE } from 'core/constants';

const pageName = 'About the app';

const About: NextPage = () => {
  return (
    <PrimaryLayout
      pageTitle={pageName}
      pageMetaDescription={`${pageName} - ${SITE_DESCRIPTION}`}
      pageImagePath={SITE_IMAGE}
    >
      <Box width="100%" maxWidth={{ md: '660px', lg: '800px' }} padding={5} margin="0 auto 20px">
        <Heading>About the Jobs Tracker</Heading>
        <Text marginTop="1em">
          Hi, the purpose of this application is to provide the stakeholder a glimpse of thier jobs
          status.
        </Text>
        <Text marginTop="1em">Let us know how to improve the information on the site.</Text>
        <Text marginTop="1em">
          If you like my content, feel free to visit us in our department and give us pat on the
          back.
        </Text>
      </Box>
    </PrimaryLayout>
  );
};

export default About;
