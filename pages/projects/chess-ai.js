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
  import { Title, WorkImage } from '../../components/work'
  import { BsGithub } from 'react-icons/bs'
  import P from '../../components/paragraph'
  
  const Work = () => (
    <Layout title="chessai">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
            Chess AI <Badge>May 2022 - September 2022</Badge>
          </Title>
          <Link href="https://github.com/Anonymous893/Chess-AI" target="_blank">
            <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid'>
              View Source
            </Button>
          </Link>
        </Stack>
        <P>
        This project is a simple Chess AI where the player competes against the computer.
        </P>
        <P>
        The AI uses the minimax algorithm with alpha-beta pruning to efficiently calculate its next moves.
        </P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>React, HTML, CSS</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>JavaScript</span>
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            <span>Vercel</span>
          </ListItem>
        </List>

        <WorkImage src="/images/projects/chess-ai-02.png" alt="Screenshots" />
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'  