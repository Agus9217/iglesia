import { Box, Heading, Stack } from "@chakra-ui/react"
import Image from "next/image"

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
      <Box>
        <Image
          src={'/hero-iglesia.jpg'}
          width={1280}
          height={720}
          alt="iglesia cristiana"
        />

      </Box>
    </Stack>
  )
}
