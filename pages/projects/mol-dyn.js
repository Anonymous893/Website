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
              Molecular Dynamics <Badge>Jun 2020 - Aug 2020</Badge>
          </Title>
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
            Private Repo
          </Button>
        </Stack>
        <P>
        Part of USAEOP REAP at Johns Hopkins University, high school internship. With mentors, studied the relationship between fluid viscosity and pressure/temperature through AIREBO-M variances.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Technologies Used: </Meta>
            <span>C++, Python (Matplotlib, NumPy), LAMMPS </span>
          </ListItem>
        </List>   
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'