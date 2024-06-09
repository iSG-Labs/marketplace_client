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

export default function AuctionCard() {
    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src="https://placehold.co/600x400"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">Living room Sofa</Heading>
                    <Text>
                        This sofa is perfect for modern tropical spaces, baroque
                        inspired spaces, earthy toned spaces and for people who
                        love a chic design with a sprinkle of vintage design.
                    </Text>
                    {/* <Text color='blue.600' fontSize='2xl'>
                        $450
                    </Text> */}
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing="2">
                    <Button variant="ghost" colorScheme="blue">
                        View Products
                    </Button>
                </ButtonGroup>
            </CardFooter>
        </Card>
    )
}
