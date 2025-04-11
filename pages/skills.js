import { 
    Container, 
    Heading, 
    SimpleGrid, 
    Tabs, 
    TabList, 
    TabPanels, 
    Tab, 
    TabPanel, 
    Text,
    Stack,
    List,
    ListItem,
    useColorModeValue,
    Icon
} from '@chakra-ui/react'
  import Layout from '../components/layouts/article'
  import { FaChevronRight } from 'react-icons/fa'
  import { skills } from '../public/data/skills'
  
  
const SkillList = ({ items }) => {
    const iconColor = useColorModeValue('blue.500', 'blue.300')
    
    return (
      <List spacing={3}>
        {items.map((item, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <Icon as={FaChevronRight} color={iconColor} mr={2} boxSize={3} />
            <Text fontSize="lg">
              {item.name}
              <Text as="span" fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')} ml={2}>
                ({item.experience})
              </Text>
            </Text>
          </ListItem>
        ))}
      </List>
    )
}
  
const Skills = () => {
    const tabSelectedBg = useColorModeValue('blue.50', 'blue.900')
    const tabSelectedBorder = useColorModeValue('blue.200', 'blue.600')
  
    return (
      <Layout title="Technical Skills">
        <Container maxW="container.xl">
          <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
            <Heading as="h3" fontSize={30}>
              Technical Skills
            </Heading>
          </Stack>
  
          <Tabs variant="unstyled">
            <TabList borderBottom="2px" borderColor={useColorModeValue('gray.200', 'gray.700')} gap={4}>
              {Object.entries(skills).map(([key, category]) => (
                <Tab 
                  key={key}
                  _selected={{ 
                    color: useColorModeValue('blue.600', 'blue.300'),
                    borderBottom: '2px',
                    borderColor: tabSelectedBorder
                  }}
                  pb={3}
                  fontWeight="medium"
                >
                  <Icon as={category.icon} mr={2} />
                  {category.title}
                </Tab>
              ))}
            </TabList>
  
            <TabPanels mt={6}>
              {Object.entries(skills).map(([key, category]) => (
                <TabPanel key={key} p={0}>
                  <SimpleGrid columns={[1, 2, 3]} spacing={8}>
                    <SkillList items={category.items} />
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>
        </Container>
      </Layout>
    )
}
  
export default Skills
export { getServerSideProps } from '../components/chakra'