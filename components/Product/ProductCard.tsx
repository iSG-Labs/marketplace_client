import {
    Card,
    CardBody,
    CardFooter,
    Image,
    Text,
    Heading,
    Button,
    ButtonGroup,
    Divider,
    Stack,
} from '@chakra-ui/react'
import Link from 'next/link'

interface Props {
    id: string
    name: string
    description: string
    photo: string
    location: string
    sellerId: string
    startingBid: number
    currentBid: number
    status: string
    auctionId: string
    createdAt: string
    updatedAt: string
}

export default function ProductCard(props: Props) {
    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={props.photo}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{props.name}</Heading>
                    <Text>{props.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                        $ {props.currentBid}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Link href={`/auction/products/${props.id}`}>
                        <Button variant="ghost" colorScheme="blue">
                            Bid Now
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
