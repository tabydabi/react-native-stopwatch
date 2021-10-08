import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next';


export const MyReactNativeForm = () => {
  const {t, i18n} = useTranslation();
  return (
    <>
      <Text>{t('SignUp')}</Text>
      <Formik
        initialValues={{name: '', email: '', password: ''}}
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <TextInput
              placeholder={t('placeholderName')}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && touched.name && (
              <Text style={{color: 'red'}}>{t(errors.name)}</Text>
            )}
            <TextInput
              placeholder={t('placeholderEmail')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={{color: 'red'}}>{t(errors.email)}</Text>
            )}
            <TextInput
              placeholder={t('placeholderPassword')}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={{color: 'red'}}>{t(errors.password)}</Text>
            )}

            <Button onPress={handleSubmit} title='Submit'/>
          </View>
        )}
      </Formik>
    </>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('NameError').label('Name'),
  email: Yup.string()
    .email('emailError')
    .required('emailInput')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, `passwordLittleLetter`)
    .matches(/\w*[A-Z]\w*/, 'passwordBigLetter')
    .matches(/\d/, 'passwordOneNumber')
    .min(8, ({min}) => `passwordMinNumber`)
    .required('passwordInput')
    .label('Password'),
});
