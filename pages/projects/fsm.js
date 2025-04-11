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
    <Layout title="fsm">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
              Search and Tracking <Badge>Feb 2023 - Jun 2023</Badge>
          </Title>
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
            Private Repo
          </Button>
        </Stack>
        <P>
        Part of research for different search and tracking algorithms with Dr. Triet Le. Implements the fast sweeping method for optimal movement in dynamic environments with visualisation.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Technologies Used: </Meta>
            <span>Python (RichDem, Elevation, GDAL, Matplotlib) </span>
          </ListItem>
        </List>

        <WorkImage src="/images/projects/fsm02.png" alt="Poster" />      
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'