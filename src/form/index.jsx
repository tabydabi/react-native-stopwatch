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
              placeholder={t('Name')}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {errors.name && touched.name && (
              <Text style={{color: 'red'}}>{t(errors.name)}</Text>
            )}
            <TextInput
              placeholder={t('Email')}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {errors.email && touched.email && (
              <Text style={{color: 'red'}}>{t(errors.email)}</Text>
            )}
            <TextInput
              placeholder={t('Password')}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {errors.password && touched.password && (
              <Text style={{color: 'red'}}>{t(errors.password)}</Text>
            )}

            <Button onPress={handleSubmit} title={t('Submit')}/>
          </View>
        )}
      </Formik>
    </>
  );
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required').label('Name'),
  email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, `Password must have a small letter`)
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(8, ({min}) => `Password must be at least 8 characters`)
    .required('Password is required')
    .label('Password'),
});
