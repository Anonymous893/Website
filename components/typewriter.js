import { useState, useEffect } from 'react'
import { Text, chakra, useColorModeValue } from '@chakra-ui/react'

const Typewriter = ({ text, delay = 100 }) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex])
        setCurrentIndex(prevIndex => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <Text 
      fontFamily="serif" 
      fontSize="lg" 
      fontWeight="medium"
      letterSpacing="normal"
    >
      {currentText}
      <chakra.span
        display="inline-block"
        w="2px"
        h="1em"
        bg={useColorModeValue('teal.500', 'teal.200')}
        ml={1}
        verticalAlign="middle"
        sx={{
          animation: 'blink 1s step-start infinite'
        }}
      />
      <style jsx global>{`
        @keyframes blink {
          50% { opacity: 0; }
        }
      `}</style>
    </Text>
  )
}

export default Typewriter