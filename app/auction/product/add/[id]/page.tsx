'use client'

import { useForm, SubmitHandler } from 'react-hook-form'
import useSWRMutation from 'swr/mutation'
import { useSession } from 'next-auth/react'
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Stack,
    Button,
    Textarea,
    Heading,
    useToast,
    useColorModeValue,
} from '@chakra-ui/react'
import Base from '@/components/Base'
import { isAuth } from '@/components/Auth'
import { addProductToAuction } from '@/api/auction'

interface Inputs {
    name: string
    description: string
    location: string
    photo: string
    auctionId: string
}

function AddProduct({ params }: { params: { id: string } }) {
    const session = useSession()

    const toast = useToast()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isLoading },
    } = useForm<Inputs>({
        defaultValues: {
            auctionId: params.id,
        },
    })
    const { trigger, isMutating } = useSWRMutation<
        any,
        any,
        [string, string] | null,
        Inputs,
        any
    >(
        session.data?.accessToken
            ? [`product`, session.data.accessToken]
            : null,
        ([url, token], body) => addProductToAuction(url, token, body.arg),
        {
            onSuccess: () => {
                toast({
                    title: 'Success',
                    description: 'Product added.',
                    status: 'success',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right',
                })
                reset()
            },
            onError: (err) => {
                toast({
                    title: 'Error',
                    description: err.message,
                    status: 'error',
                    duration: 9000,
                    isClosable: true,
                    position: 'top-right',
                })
            },
        },
    )

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        if (session.data?.accessToken) {
            trigger(data)
        } else {
            toast({
                title: 'Error',
                description: 'Your session expired.',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: 'top-right',
            })
        }
    }

    return (
        <Base>
            <Flex minH={'90vh'} align={'center'} justify={'center'}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}
                    >
                        <Heading fontSize={'2xl'} mb={5}>
                            Add Product
                        </Heading>
                        <Stack
                            spacing={4}
                            as="form"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <FormControl
                                id="product-name"
                                isInvalid={errors.name ? true : false}
                            >
                                <FormLabel>Product name</FormLabel>
                                <Input
                                    type="text"
                                    isDisabled={isLoading || isMutating}
                                    {...register('name', {
                                        required: 'Product name is required',
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.name && errors.name.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl
                                id="product_description"
                                isInvalid={errors.description ? true : false}
                            >
                                <FormLabel>Product description</FormLabel>
                                <Textarea
                                    isDisabled={isLoading || isMutating}
                                    {...register('description', {
                                        required:
                                            'Product description is required',
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.description &&
                                        errors.description.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl
                                id="product-location"
                                isInvalid={errors.location ? true : false}
                            >
                                <FormLabel>Location</FormLabel>
                                <Input
                                    type="text"
                                    isDisabled={isLoading || isMutating}
                                    {...register('location', {
                                        required: 'Location is required',
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.location && errors.location.message}
                                </FormErrorMessage>
                            </FormControl>

                            <FormControl
                                id="product-photo"
                                isInvalid={errors.photo ? true : false}
                            >
                                <FormLabel>Product photo</FormLabel>
                                <Input
                                    type="text"
                                    isDisabled={isLoading || isMutating}
                                    {...register('photo', {
                                        required: 'Product photo is required',
                                    })}
                                />
                                <FormErrorMessage>
                                    {errors.photo && errors.photo.message}
                                </FormErrorMessage>
                            </FormControl>

                            <Stack spacing={10} mt={3}>
                                <Button
                                    type="submit"
                                    colorScheme="blue"
                                    isLoading={isMutating || isLoading}
                                >
                                    Add Product
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </Base>
    )
}

export default isAuth(AddProduct)
