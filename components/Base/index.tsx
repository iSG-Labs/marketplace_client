import { ReactNode } from 'react'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'

import Navbar from '../Navbar'

interface Props {
    children?: ReactNode
}

export default function Base({ children }: Props) {
    return (
        <Box>
            <Navbar />
            <Container maxW={'7xl'}>{children}</Container>
        </Box>
    )
}
