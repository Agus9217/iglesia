import { Box, Button, Flex, Stack } from "@chakra-ui/react"
import { Church, MonitorPlay } from "lucide-react"
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
      direction={'column'}
      alignItems={'center'}
    >
      <Flex
        borderWidth={'thin'}
        borderColor={'blue'}
        w={'100%'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Button
          colorScheme={'red'}
          leftIcon={<MonitorPlay />}
          size={'sm'}
        >
          Live
        </Button>
      </Flex>
      <Flex
        as={'nav'}
        w={'100%'}
      >
        <Flex
          alignItems={'center'}
          justifyContent={'center'}
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
          justifyContent={'center'}
        >
          <MenuNavbar />
        </Flex>
      </Flex>
    </Stack>
  )
}
