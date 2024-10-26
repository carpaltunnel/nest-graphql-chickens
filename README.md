## TODO : 
1. ~~Proper empty/not found responses~~
2. Validation
3. Multiple resolvers
4. Multi-level resolution
5. Request collection (Postman)
6. Pagination
   1. First with skip/limit
   2. Next with cursors
7. Authorization
8. Database integration (MongoMemoryServer)
9. Support images
10. Allow image uploads
11. Rate limiter?
12. Router/Supergraph/Subgraph integration
13. Shareable types across multiple subgraphs

## Notes
1. Default URL : http://127.0.0.1:3000/graphql
2. GraphiQL playground enabled by default

## Getting Started


## Schema
Using the "code first" approach, the [schema.gql](./schema.gql) is automatically generated from the annotations (decorators) in our Typescript.

## Resolvers
### Chickens
Query a (non-paginated) list of chickens : 
```graphql
query Chickens {
    chickens {
        id
        name
        breed
        weight
    }
}
```

Query a (non-paginated) list of chickens, filtered by Breed : 
```graphql
query Chickens {
    chickens(breed: "Buff Orpington") {
        id
        name
        breed
        weight
    }
}
```

Query a single chicken by `id` : 
```graphql
query Chicken {
    chicken(id: "64f1cd4b-cd62-4660-9cd9-5f1338100b94") {
        id
        name
        breed
        weight
    }
}
```

Create a new chicken (mutation) : 
```graphql
mutation CreateChicken {
  createChicken(chicken: {
    name: "Big Bird"
    weight: 10
    breed: "India Gigante"
  }) {
    id
  }
}
```

Simple "hello world query" :
```graphql
query hello {
    hello
}
```