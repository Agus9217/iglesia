import { Box, Flex, Stack } from "@chakra-ui/react"
import { Church } from "lucide-react"
import { MenuNavbar } from "./MenuNavbar"

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
      direction={'row'}
      alignItems={'center'}
    >
      <Flex
        alignItems={'center'}
        borderColor={'red'}
        borderWidth={'thin'}
        flexGrow={1}
      >
        <Church size={'30px'} />
      </Flex>
      <Box
        borderColor={'green'}
        borderWidth={'thin'}
        flexGrow={1}
      >
      </Box>
      <Flex
        borderColor={'blue'}
        borderWidth={'thin'}
        flexGrow={1}
        justifyContent={'end'}
      >
        <MenuNavbar />
      </Flex>
    </Stack>
  )
}
