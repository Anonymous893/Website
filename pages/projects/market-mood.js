import {
    Container,
    Badge,
    Link,
    List,
    ListItem,
    Button,
    Stack
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, WorkImage, Meta } from '../../components/work'
  import { BsGithub } from 'react-icons/bs'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="marketMood">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
              Market Mood Detector <Badge>December 2022 - August 2024</Badge>
          </Title>
          <Link href="https://github.com/Anonymous893/Market-Mood-Detector" target="_blank">
            <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
              View Source
            </Button>
          </Link>
        </Stack>
        <P>
          A full stack application that analyses real-time market sentiment through news articles 
          and macroeconomic technical indicators for stocks.
        </P>
        <P>
          While the webpage only allows for major tech stocks (Mag7), the Python script works for all stocks.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>React (Material-UI/Recharts/React Router)</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>Python, SQLAlchemy (SQLite), Flask, NLTK/VADER, REST APIs</span>
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            <span>In Progress</span>
          </ListItem>
          <ListItem>
            <Meta>Data</Meta>
            <span>Yahoo Finance RSS, World Trading Data API, FRED API</span>
          </ListItem>
        </List> 
        <P>
          Some screenshots from the project.
        </P>
        <WorkImage src="/images/projects/market-mood-02.png" alt="Screenshots" />
        <WorkImage src="/images/projects/market-mood-03.png" alt="Screenshots" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'