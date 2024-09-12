import { Heading, Stack } from "@chakra-ui/react"

export const Hero = () => {
  return (
    <Stack
      maxW={'100%'}
      h={'100dvh'}
      borderWidth={'thin'}
      borderColor={'blue'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading>
        Hero
      </Heading>
    </Stack>
  )
}
