import { Stack, Heading } from "@chakra-ui/react"

export const Navbar = () => {
  return (
    <Stack
      as={'header'}
      pos={'fixed'}
      spacing={0}
      w={'100%'}
      borderWidth={'thin'}
      borderColor={'red'}
      minH={'60px'}
      justifyContent={'center'}
    >
      <Heading>
        Header
      </Heading>
    </Stack>
  )
}
