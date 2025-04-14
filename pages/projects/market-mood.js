import {
    Container,
    Badge,
    List,
    ListItem,
    Button,
    Stack
  } from '@chakra-ui/react'
  import Layout from '../../components/layouts/article'
  import { Title, Meta } from '../../components/work'
  import { BsGithub } from 'react-icons/bs'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="market-mood">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
              Market Mood Detector <Badge>In Progress</Badge>
          </Title>
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
            Private Repo
          </Button>
        </Stack>
        <P>
        Uses machine learning to predict whether the S&amp;P 500 will rise or fall on a given day based on previous Yahoo Finance article titles.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Technologies Used: </Meta>
            <span>Python, PostgreSQL </span>
          </ListItem>
        </List>  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'