'use client'

import useSWR from 'swr'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import {
    Box,
    Badge,
    Image,
    Stack,
    Heading,
    Text,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    useColorModeValue,
    useToast,
} from '@chakra-ui/react'
import Base from '@/components/Base'
import { isAuth } from '@/components/Auth'
import { viewProductAPI, viewWinnerAPI } from '@/api/auction'

function ViewProduct({ params }: { params: { productId: string } }) {
    const session = useSession()
    const toast = useToast()
    const { data: productData, isLoading: isLoadingProduct } = useSWR(
        session.data?.accessToken && params.productId
            ? [`product/${params.productId}`, session.data.accessToken]
            : null,
        ([url, token]) => viewProductAPI(url, token),
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

    const { data: winnerData, isLoading: isLoadingWinner } = useSWR(
        session.data?.accessToken && params.productId
            ? [`product/winner/${params.productId}`, session.data.accessToken]
            : null,
        ([url, token]) => viewWinnerAPI(url, token),
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

    const props = {
        photo: 'https://via.placeholder.com/150',
        name: 'Antique Chair',
        description: 'A beautiful antique chair from the 19th century.',
        startDate: '2023-07-10T10:00:00Z',
        endDate: '2023-07-20T10:00:00Z',
        status: 'Active',
        bids: [
            { bidder: 'John Doe', amount: 100 },
            { bidder: 'Jane Smith', amount: 150 },
        ],
        winner: {
            email: 'winner@example.com',
            userId: 'user123',
        },
    }

    return (
        <Base>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" mt={10}>
                <Box position="relative">
                    <Image
                        src={
                            productData?.photo || 'https://placehold.co/300x200'
                        }
                        alt={productData?.name}
                        borderRadius="lg"
                        objectFit="cover"
                    />
                    <Badge
                        position="absolute"
                        top="1"
                        right="1"
                        colorScheme="teal"
                    >
                        {props.status}
                    </Badge>
                </Box>
                <Stack mt="6" spacing="3">
                    <Heading size="md">{productData?.name}</Heading>
                    <Text>{productData?.description}</Text>
                    {/* <Text>Start Date: {new Date(auctionData?.startDate || 0).toLocaleString()}</Text>
                    <Text>End Date: {new Date(auctionData?.endDate || 0).toLocaleString()}</Text> */}

                    <Heading size="md">Winner</Heading>
                    <Text>id: {winnerData?.id}</Text>
                    <Text>email: {winnerData?.email}</Text>

                    <Stack direction="row" spacing={4}>
                        {/* <Link href={`/auction/product/add/${params.id}`}>
                            <Button variant="solid" colorScheme="blue">
                                List Product
                            </Button>
                        </Link>

                        <Link href={`/auction/products/${params.pro}`}>
                            <Button variant="solid" colorScheme="green">
                                View Products
                            </Button>
                        </Link> */}
                    </Stack>
                </Stack>

                {/* Winner Section */}

                {/* <Box mt="6">
                    <Heading size="md" mb="4">Winner</Heading>
                    {props.winner ? (
                        <>
                            <Text>Email: {props.winner.email}</Text>
                            <Text>User ID: {props.winner.userId}</Text>
                        </>
                    ) : (
                        <Text>No winner yet</Text>
                    )}
                </Box> */}

                {/* Bids Section */}

                {/* <Box mt="6" >
                    <Heading size="md" mb="4">Bids</Heading>
                    <Table variant="simple">
                        <TableCaption>All Bids</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>Bidder</Th>
                                <Th isNumeric>Bid Amount</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {props.bids.map((bid, index) => (
                                <Tr key={index}>
                                    <Td>{bid.bidder}</Td>
                                    <Td isNumeric>${bid.amount}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </Box> */}
            </Box>
        </Base>
    )
}

export default isAuth(ViewProduct)
