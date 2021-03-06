import * as yup from "yup";

export const signInSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});
export const signUpSchema = yup.object().shape({
  email: yup.string().email().required(),
  nickname: yup.string().required().min(4).max(30),
  familyname: yup.string().required().max(35),
  givenname: yup.string().required().max(35),
  password: yup.string().required(),
  passwordConfirmation: yup.string().oneOf([yup.ref("password"), null]),
});
export const musicSchema= yup.object().shape({
  title: yup.string().required() 
})
export const albumSchema = yup.object().shape({
  title: yup.string().required() 
})
export const artistSchema = yup.object().shape({
  name: yup.string().required() 
})
export const bandSchema = yup.object().shape({
  name: yup.string().required() 
})