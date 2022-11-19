import { FunctionComponent } from 'react';

import { Box, Flex, Heading, Image } from '@chakra-ui/react';

import { FaRulerCombined, FaRegThumbsUp, FaTruck } from 'react-icons/fa';

import HeroSocialButton from './hero-social-button/HeroSocialButton';

import { GITHUB_PROFILE_URL, LINKEDIN_URL, TWITTER_URL } from 'core/constants';

const Hero: FunctionComponent = () => {
  return (
    <Flex
      width="100%"
      align="center"
      justify={'space-evenly'}
      backgroundColor="brand.darkBlue"
      minHeight={{ base: '90vh', lg: '85vh' }}
      direction={{ base: 'column-reverse', lg: 'row' }}
    >
      <Box>
        <Image
          filter="drop-shadow(10px 10px 4px rgba(0,0,0,0.3));"
          boxSize={{ base: '250px', md: '400px', lg: '400px' }}
          src="/assets/media/macbook.png"
          alt="Computer with coffee mug"
        />
      </Box>
      <Flex direction="column">
        <Flex direction="column">
          <Heading as="h3" size="lg" color="white">
            Welcome to
          </Heading>
          <Heading size={{ base: '2xl', lg: '3xl' }} color="brand.green">
            Jobs Tracker
          </Heading>
          <Heading as="h3" size="lg" color="white" textAlign="left">
            Realtime Job Status Finder
          </Heading>
        </Flex>
        <Flex
          align="center"
          direction="row"
          justify="space-evenly"
          width="100%"
          padding="3em 0 0 0"
        >
          <HeroSocialButton href={TWITTER_URL}>
            <FaRulerCombined size={35} />
          </HeroSocialButton>
          <HeroSocialButton href={LINKEDIN_URL}>
            <FaRegThumbsUp size={35} />
          </HeroSocialButton>
          <HeroSocialButton href={GITHUB_PROFILE_URL}>
            <FaTruck size={35} />
          </HeroSocialButton>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
