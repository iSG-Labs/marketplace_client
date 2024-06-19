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
    title: string
    description: string
    photo: string
}

export default function AuctionCard(props: Props) {
    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={props.photo}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{props.title}</Heading>
                    <Text>{props.description}</Text>
                    {/* <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text> */}
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Link href={`/auction/product/add/${props.id}`}>
                        <Button variant="solid" colorScheme="blue">
                            List Product
                        </Button>
                    </Link>

                    <Link href={`/auction/products/${props.id}`}>
                        <Button variant="ghost" colorScheme="blue">
                            View Products
                        </Button>
                    </Link>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
