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
  Box,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { courses } from '../public/data/courses'

const CourseItem = ({ code, name }) => {
  const borderColor = useColorModeValue('gray.300', 'whiteAlpha.300')
  const hoverBg = useColorModeValue('gray.50', 'whiteAlpha.50')

  return (
    <Box
      p={4}
      border="1px"
      borderColor={borderColor}
      borderRadius="md"
      _hover={{ bg: hoverBg }}
      mb={2}
    >
      <Text fontWeight="bold">{code}</Text>
      <Text fontSize="sm">{name}</Text>
      {/* <Text fontSize="xs" color={useColorModeValue('gray.600', 'gray.400')}>
        {semester}
  </Text> */}
    </Box>
  )
}

const Courses = () => {
  return (
    <Layout title="Courses">
      <Container maxW="container.xl">
        <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
          <Heading as="h3" fontSize={30}>
            University Courses
          </Heading>
        </Stack>

        <Tabs variant="enclosed">
        <TabList>
          {Object.keys(courses).map((department) => {
            const isHighlighted = ['CMSC', 'ECON', 'STAT', 'MATH'].includes(department)
            return (
              <Tab 
                key={department} 
                _selected={{
                  color: 'white',
                  bg: isHighlighted 
                    ? useColorModeValue('blue.500', 'blue.300')
                    : useColorModeValue('pink.500', 'purple.500')
                }}
              >
                {department}
              </Tab>
            )
          })}
        </TabList>

          <TabPanels mt={4}>
            {Object.entries(courses).map(([department, courses]) => (
              <TabPanel key={department} p={0}>
                <SimpleGrid columns={[1, 2, 3]} spacing={4}>
                  {courses.map((course) => (
                    <CourseItem key={course.code} {...course} />
                  ))}
                </SimpleGrid>
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Container>
    </Layout>
  )
}

export default Courses
export { getServerSideProps } from '../components/chakra'