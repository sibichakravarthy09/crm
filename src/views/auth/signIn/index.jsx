import React from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue
} from "@chakra-ui/react";

// Custom components
import DefaultAuth from "layouts/auth/Default";
import Spinner from "components/spinner/Spinner";

// Assets
import illustration from "assets/img/auth/PNG-02.png";

// Icons
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

// Services and validation schema
import { postApi } from "services/api";
import { loginSchema } from "schema";
import { toast } from "react-toastify";

function SignIn() {
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const brandStars = useColorModeValue("brand.500", "brand.400");
  const [isLoading, setIsLoading] = React.useState(false);
  const [checkBox, setCheckBox] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const initialValues = {
    username: '',
    password: ''
  };

  const { errors, values, touched, handleBlur, handleChange, resetForm, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async () => {
      await login();
    }
  });

  const login = async () => {
    try {
      setIsLoading(true);
      const response = await postApi('/user/login', values, checkBox);
      if (response?.status === 200) {
        toast.success("Login Successfully!");
        navigate('/admin');
        resetForm();
      } else {
        toast.error(response?.response?.data?.error || "Login Failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("An error occurred during login.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <DefaultAuth illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w='100%'
        mx={{ base: "auto", lg: "0px" }}
        me='auto'
        h='fit-content'
        alignItems='start'
        justifyContent='center'
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection='column'
      >
        <Box me='auto'>
          <Heading color={textColor} fontSize='36px' mb='10px'>
            Sign In
          </Heading>
          <Text mb='36px' ms='4px' color={textColorSecondary} fontWeight='400' fontSize='md'>
            Enter your email and password to sign in!
          </Text>
        </Box>

        <Flex
          zIndex='2'
          direction='column'
          w={{ base: "100%", md: "420px" }}
          maxW='100%'
          background='transparent'
          borderRadius='15px'
          mx={{ base: "auto", lg: "unset" }}
          me='auto'
          mb={{ base: "20px", md: "auto" }}
        >
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <FormControl isInvalid={errors.username && touched.username} mb="24px">
              <FormLabel ms='4px' fontSize='sm' fontWeight='500' color={textColor}>
                Email<Text color={brandStars}>*</Text>
              </FormLabel>
              <Input
                fontSize='sm'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                name="username"
                type='email'
                placeholder='mail@simmmple.com'
                size='lg'
                borderColor={errors.username && touched.username ? "red.300" : null}
              />
              {errors.username && touched.username && (
                <FormErrorMessage mb='24px'>{errors.username}</FormErrorMessage>
              )}
            </FormControl>

            {/* Password Field */}
            <FormControl isInvalid={errors.password && touched.password} mb="24px">
              <FormLabel ms='4px' fontSize='sm' fontWeight='500' color={textColor}>
                Password<Text color={brandStars}>*</Text>
              </FormLabel>
              <InputGroup size='md'>
                <Input
                  fontSize='sm'
                  placeholder='Enter Your Password'
                  name='password'
                  type={showPassword ? "text" : "password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  size='lg'
                  borderColor={errors.password && touched.password ? "red.300" : null}
                />
                <InputRightElement mt='4px'>
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={showPassword ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={togglePasswordVisibility}
                  />
                </InputRightElement>
              </InputGroup>
              {errors.password && touched.password && (
                <FormErrorMessage mb='24px'>{errors.password}</FormErrorMessage>
              )}
            </FormControl>

            {/* Keep me logged in */}
            <Flex justifyContent='space-between' align='center' mb='24px'>
              <FormControl display='flex' alignItems='center'>
                <Checkbox
                  isChecked={checkBox}
                  onChange={(e) => setCheckBox(e.target.checked)}
                  id='remember-login'
                  colorScheme='brandScheme'
                  me='10px'
                />
                <FormLabel htmlFor='remember-login' mb='0' fontWeight='normal' color={textColor} fontSize='sm'>
                  Keep me logged in
                </FormLabel>
              </FormControl>
            </Flex>

            {/* Submit Button */}
            <Button
              fontSize='sm'
              variant='brand'
              fontWeight='500'
              w='100%'
              h='50'
              type="submit"
              mb='24px'
              isDisabled={isLoading}
            >
              {isLoading ? <Spinner /> : 'Sign In'}
            </Button>
          </form>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignIn;
