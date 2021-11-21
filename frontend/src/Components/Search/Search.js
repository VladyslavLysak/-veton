import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'

import TextField from '@mui/material/TextField'

const SearchField = ({ t }) => {
  return (
    <div>
      <Formik
        initialValues={{
          search: '',
        }}
        validationSchema={Yup.object.shape({
          search: Yup.string().max(15, t('error:maxLength')),
        })}
        onSubmit={() => null}>
        {({ errors, touched, values }) => (
          <form>
            <TextField
              id='standard-basic'
              label={t('search:find')}
              variant='standard'
            />
          </form>
        )}
      </Formik>
    </div>
  )
}

export default SearchField
