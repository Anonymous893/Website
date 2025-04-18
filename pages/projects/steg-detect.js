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
    <Layout title="stegDetect">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Title>
              StegDetect <Badge>Jun 2024 - Aug 2024</Badge>
          </Title>
          <Button leftIcon={<BsGithub/>} colorScheme="teal" size='sm' variant='solid' isDisabled={true}>
            Private Repo
          </Button>
        </Stack>
        <P>
        This is my project with BAH 2024 internship, where the goal was to use machine learning to detect steganography.
        </P>
        <P>
        Steganography is the practice of concealing data within another medium, like images or videos.
        </P>
        <P>
        StegDetect detects LSB and F5 steganography with 95% accuracy. The training and testing datasets were compiled with webscraping social media sites. Half of the collected images were embedded with random text messages using the F5 and LSB methods.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Frontend</Meta>
            <span>NextJS, React, Tailwindcss</span>
          </ListItem>
          <ListItem>
            <Meta>Backend</Meta>
            <span>Python Flask, TensorFlow, PostgreSQL, Java</span>
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            <span>AWS EC2</span>
          </ListItem>
        </List>     
      </Container>
    </Layout>
  )
  
  export default Work
  export { getServerSideProps } from '../../components/chakra'