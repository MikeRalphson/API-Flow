import Environment from '../../src/environments/node/Environment'

import SwaggerLoader from '../../src/loaders/swagger/Loader'
import OpenApiLoader from '../../src/loaders/openapi/Loader'
import RAMLLoader from '../../src/loaders/raml/Loader'

import SwaggerV2Parser from '../../src/parsers/swagger/v2.0/Parser'
import OpenApiV3Parser from '../../src/parsers/openapi/v3/Parser'
import RAMLV1Parser from '../../src/parsers/raml/v1.0/Parser'

import SwaggerV2Serializer from '../../src/serializers/swagger/v2.0/Serializer'
import RAMLV1Serializer from '../../src/serializers/raml/v1.0/Serializer'
import InternalSerializer from '../../src/serializers/internal/Serializer'

export const loaders = [
  SwaggerLoader,
  OpenApiLoader,
  RAMLLoader
]

export const parsers = [
  SwaggerV2Parser,
  OpenApiV3Parser,
  RAMLV1Parser
]

export const serializers = [
  SwaggerV2Serializer,
  RAMLV1Serializer,
  InternalSerializer
]

export const environment = Environment
