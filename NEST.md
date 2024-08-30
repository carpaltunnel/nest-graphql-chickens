# NestJS Starter Guide

[NestJS CLI Guide](https://docs.nestjs.com/cli/usages)

## Creating a New Project
```
npm i -g @nestjs/cli
nest new your-project-name
cd your-project-name

npm i @nestjs/graphql @nestjs/apollo @apollo/server graphql

nest generate module chickens
nest generate resolver chickens
nest generate service chickens
# Note that the nest CLI automatically updates app.module.ts - more on this later

nest start
```

## Interacting with GraphQL
The GraphQL Playground is enabled by default at `http://127.0.0.1:3000/graphql`


## Project Structure
### Repositories (Models)
The NestJS documentation generally does the database work inside of the Service but this is not ideal.  We're accustomed to `controller -> coordinator -> model` from REST so let's do the same thing here but with slightly different terminology : `resolver -> service -> repository`

### Directory Structure
Generally, a folder is created in `src` with a name that represents the type or entity that it will manage.  The Nest CLI will do this automatically.  Then, we create the Resolver, Service, and Repository inside of this folder.  EG: `src/chickens/chickens.resolver.ts`, `src/chickens/chickens.service.ts`, `src/chickens/chickens.repository.ts`.

The commands above will automatically import and enable the module, resolver, and service in `app.module.ts` but we can make it cleaner by removing the service and resolver, only referencing the module.  Then, we can add the resolver and service into the `chickens` module and all will work nicely while not needing to have "everything" reference in the `app.module.ts`

Because of the `@Injectable` annotation on ChickensService, it can be automatically injected into the Resolver in the constructor.

