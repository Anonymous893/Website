import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Stack,
  SimpleGrid,
  Button,
  useColorModeValue,
  chakra,
  IconButton,
} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import thumbChess from '../public/images/projects/chess-ai.png'
import thumbMarket from '../public/images/projects/mmd.png'
import Image from 'next/image'
import VoxelLoader from '../components/voxel-loader'

const LazyVoxelImg = dynamic(() => import('../components/voxel-img'), {
  ssr: false,
  loading: () => <VoxelLoader />
})

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})

const Home = () => (
  <Layout>
    <Container maxW="container.md">
      <LazyVoxelImg />
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        css={{ backdropFilter: 'blur(10px)' }}
      >
        UMD CS | ECON | STAT
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jessica S.
          </Heading>
          <Stack mt={4} spacing={4} direction='row' align='center'>
            <Link href="/files/resume.pdf" target="_blank">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" size='md' variant='solid'>
                Resume / CV
              </Button>
            </Link>
            <Link href="https://github.com/Anonymous893" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='github'
                fontSize='20px'
                icon={<BsGithub />}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/jess-s-a8b49826b/" target="_blank">
              <IconButton
                variant='outline'
                colorScheme='teal'
                aria-label='linkedin'
                fontSize='20px'
                icon={<BsLinkedin />}
              />
            </Link>
          </Stack>
        </Box>
        
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            w="130px"
            h="130px"
            display="inline-block"
            borderRadius="full"
            overflow="hidden"
          >
            <ProfileImage
              src="/images/anonymous.png"
              alt="Profile image"
              borderRadius="full"
              width="130%"
              height="130%"
            />
          </Box>
        </Box>
      </Box>

      <Section delay={0.1}>
        <Heading as="h3" variant="section-title">
         Bio
        </Heading>
        <Paragraph>
        Hi, I&apos;m Jessica.
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
        Projects
        </Heading>

        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            href="/projects/chess-ai"
            title="Chess AI"
            thumbnail={thumbChess}
          >
            Chess AI
          </GridItem>
          <GridItem
            href="/projects/market-mood"
            title="Market Mood Detector"
            thumbnail={thumbMarket}
          >
            Market Mood Detector
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={4}>
          <NextLink href="/projects" passHref scroll={false}>
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
              All Projects
            </Button>
          </NextLink>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
