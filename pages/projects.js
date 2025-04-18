import { Container, Heading, SimpleGrid, Divider, Stack, Center } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { Tag } from '../components/work'

import thumbChess from '../public/images/projects/chess-ai.png'
import thumbFSM from '../public/images/projects/fsm01.png'
import thumbMarket from '../public/images/projects/mmd.png'
import thumbSteg from '../public/images/projects/steg-detect-01.png'
import thumbNemo from '../public/images/projects/nemo.png'
import thumbMol from '../public/images/projects/trimethylhexane.png'

const Projects = () => (
  <Layout title="Projects">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={30}>
          Projects
        </Heading>
      </Stack>

      <Section>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Side Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="chess-ai" title="Chess AI" thumbnail={thumbChess}>
          Simple Chess AI using minimax algorithm with alpha-beta pruning
          </WorkGridItem>
          <Center >
            <Tag>Web-Dev</Tag>
            <Tag>Algorithms</Tag>
          </Center>
        </Section>
        <Section>
          <WorkGridItem id="market-mood" title="Market Mood Detector" thumbnail={thumbMarket}>
          Market mood detection based on sentiment analysis
          </WorkGridItem>
          <Center >
            <Tag>ML (Sentiment Analysis)</Tag>
            <Tag>Fullstack</Tag>
          </Center>
        </Section>
      </SimpleGrid>

      <Section delay={0.1}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Work Projects
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="steg-detect" thumbnail={thumbSteg} title="StegDetect">
          Using machine learning to detect steganography within images
          </WorkGridItem>
          <Center >
            <Tag>ML</Tag>
            <Tag>Fullstack</Tag>
            <Tag>API</Tag>
          </Center>
        </Section>
        <Section>
          <WorkGridItem id="fsm" thumbnail={thumbFSM} title="Search and Tracking">
          Fast Sweeping Method with Cost Function
          </WorkGridItem>
          <Center >
            <Tag>Python</Tag>
            <Tag>Algorithms</Tag>
          </Center>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="nemo" thumbnail={thumbNemo} title="Nemo">
            NEMO Update
          </WorkGridItem>
          <Center >
            <Tag>Python</Tag>
          </Center>
        </Section>
        <Section delay={0.2}>
          <WorkGridItem id="mol-dyn" thumbnail={thumbMol} title="Molecular Dynamics">
          Viscosity and Pressure Relationship of 2,2,4 - Trimethylhexane
          </WorkGridItem>
          <Center >
            <Tag>C++</Tag>
            <Tag>Python</Tag>
          </Center>
        </Section>
      </SimpleGrid>

    </Container>
  </Layout>
)

export default Projects
export { getServerSideProps } from '../components/chakra'
