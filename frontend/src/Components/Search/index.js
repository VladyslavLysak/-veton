import React from 'react'
import { useTranslation } from 'react-i18next'

import SearchField from './Search'

const Search = () => {
  const { t } = useTranslation
  return <SearchField t={t} />
}

export default Search
