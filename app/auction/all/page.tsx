'use client'

import useSWR from 'swr'
import { useSession } from 'next-auth/react'
import { SimpleGrid, useToast } from '@chakra-ui/react'
import Base from '@/components/Base'
import { isAuth } from '@/components/Auth'
import { viewAllAuctionAPI } from '@/api/auction'
import { AuctionCard } from '@/components/Auction'

function ViewAuctions() {
    const session = useSession()
    const toast = useToast()
    const { data, isLoading } = useSWR(
        session.data?.accessToken
            ? ['/auction', session.data.accessToken]
            : null,
        ([url, token]) => viewAllAuctionAPI(url, token),
        {
            onError: (error) => {
                toast({
                    title: 'An error occurred.',
                    description: error.message,
                    status: 'error',
                    duration: 5000,
                    isClosable: true,
                    position: 'top-right',
                })
            },
        },
    )

    return (
        <Base>
            <SimpleGrid
                columns={{ base: 1, md: 3, xl: 4 }}
                spacing={{ base: 5, lg: 15 }}
                padding={5}
            >
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
                <AuctionCard />
            </SimpleGrid>
        </Base>
    )
}

export default isAuth(ViewAuctions)
