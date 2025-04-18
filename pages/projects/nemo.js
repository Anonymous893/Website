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
    <Layout title="nemo">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
              NEMO Update <Badge>Feb 2023 - Jul 2023</Badge>
          </Title>
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
            Private Repo
          </Button>
        </Stack>
        <P>
        Helped update the NEMO Interstellar Dynamics Toolbox to support the creation of line/scatter plots from an Astropy table
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Technologies Used: </Meta>
            <span>Python (Docopt, Matplotlib, Astropy) </span>
          </ListItem>
        </List>  
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'