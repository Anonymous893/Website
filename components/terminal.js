import { Box, Text, Flex, Input, useColorModeValue } from '@chakra-ui/react'
import { useState, useEffect, useRef } from 'react'

const SKILLS = {
  languages: ['Python', 'Java', 'HTML', 'CSS', 'JavaScript', 'C', 'C++', 'TypeScript', 'Assembly (x86/MIPS)', 'SQL', 'R', 'SAS', 'Rust', 'OCaml'],
  tech: ['React & React Native', 'Firebase', 'Node.js', 'MongoDB', 'Flask', 'AWS', 'Express.js', 'Tailwind', 'Next.js', 'Vercel', 'PostgreSQL', 'Docker', 'Tensorflow', 'Chakra UI', 'Tableau'],
  interests: ['Full-stack dev', 'Machine learning', 'Cloud computing', 'Data visualisation', 'Learning!']
}

const Terminal = () => {
  const [history, setHistory] = useState([{ type: 'out', val: 'Welcome. Type "help" to see skills.' }])
  const [input, setInput] = useState('')
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight
  }, [history])

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cleanInput = input.toLowerCase().trim()
      let response = ""

      if (cleanInput === 'help') response = "Available commands: languages, tech, interests, clear"
      else if (SKILLS[cleanInput]) response = SKILLS[cleanInput].join(" • ")
      else if (cleanInput === 'clear') {
        setHistory([]); setInput(""); return
      } else response = `Command not found: ${cleanInput}`

      setHistory([...history, { type: 'in', val: input }, { type: 'out', val: response }])
      setInput('')
    }
  }

  return (
    <Box 
      fontFamily="mono" 
      fontSize="sm"
      bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.100')}
      p={4} 
      borderRadius="lg" 
      border="1px solid"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
    >
      <Box h="200px" overflowY="auto" ref={scrollRef} mb={2}>
        {history.map((line, i) => (
          <Text key={i} color={line.type === 'in' ? 'teal.400' : 'inherit'}>
            {line.type === 'in' ? `λ ${line.val}` : line.val}
          </Text>
        ))}
      </Box>
      <Flex align="center">
        <Text color="teal.400" mr={2}>λ</Text>
        <Input
          variant="unstyled"
          placeholder="Try 'languages'..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleCommand}
        />
      </Flex>
    </Box>
  )
}

export default Terminal