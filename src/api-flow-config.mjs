import Environment from './environments/node/Environment.mjs'

import SwaggerLoader from './loaders/swagger/Loader.mjs'
//import RAMLLoader from './loaders/raml/Loader.mjs'
//import InternalLoader from './loaders/internal/Loader.mjs'
//import PostmanCollectionV2Loader from './loaders/postman/v2.0/Loader.mjs'

//import SwaggerV2Parser from './parsers/swagger/v2.0/Parser.mjs'
//import RAMLV1Parser from './parsers/raml/v1.0/Parser.mjs'
//import InternalParser from './parsers/internal/Parser.mjs'
//import PostmanCollectionV2Parser from './parsers/postman/v2.0/Parser.mjs'

//import SwaggerV2Serializer from './serializers/swagger/v2.0/Serializer.mjs'
//import RAMLV1Serializer from './serializers/raml/v1.0/Serializer.mjs'
//import InternalSerializer from './serializers/internal/Serializer.mjs'
//import PostmanV2Serializer from './serializers/postman/v2.0/Serializer.mjs'
//import ApiBlueprint1ASerializer from './serializers/api-blueprint/1A/Serializer.mjs'

export const loaders = [
  SwaggerLoader,
  RAMLLoader,
  InternalLoader,
  PostmanCollectionV2Loader
]

export const parsers = [
  SwaggerV2Parser,
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
