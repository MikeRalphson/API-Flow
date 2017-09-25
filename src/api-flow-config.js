import Environment from './environments/node/Environment'

import SwaggerLoader from './loaders/swagger/Loader'
import OpenApiLoader from './loaders/openapi/Loader'
import RAMLLoader from './loaders/raml/Loader'
import InternalLoader from './loaders/internal/Loader'
import PostmanCollectionV2Loader from './loaders/postman/v2.0/Loader'

import SwaggerV2Parser from './parsers/swagger/v2.0/Parser'
import OpenApiV3Parser from './parsers/openapi/v3/Parser'
import RAMLV1Parser from './parsers/raml/v1.0/Parser'
import InternalParser from './parsers/internal/Parser'
import PostmanCollectionV2Parser from './parsers/postman/v2.0/Parser'

import SwaggerV2Serializer from './serializers/swagger/v2.0/Serializer'
import RAMLV1Serializer from './serializers/raml/v1.0/Serializer'
import InternalSerializer from './serializers/internal/Serializer'
import PostmanV2Serializer from './serializers/postman/v2.0/Serializer'
import ApiBlueprint1ASerializer from './serializers/api-blueprint/1A/Serializer'

export const loaders = [
  SwaggerLoader,
  OpenApiLoader,
  RAMLLoader,
  InternalLoader,
  PostmanCollectionV2Loader
]

export const parsers = [
  SwaggerV2Parser,
  OpenApiV3Parser,
  RAMLV1Parser,
  InternalParser,
  PostmanCollectionV2Parser
]

export const serializers = [
  SwaggerV2Serializer,
  RAMLV1Serializer,
  InternalSerializer,
  PostmanV2Serializer,
  ApiBlueprint1ASerializer
]

export const environment = Environment
