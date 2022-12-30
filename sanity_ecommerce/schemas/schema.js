// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import anotherSchema from './anotherSchema'
import banner from './banner'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    anotherSchema,
    banner
  ]),
})
