https://docs.nestjs.com/faq/serverless

https://github.com/adamjq/production-ready-serverless-nestjs

[](https://dev.to/aws-builders/deploy-a-nestjs-api-to-aws-lambda-with-serverless-framework-4poo)



https://docs.nestjs.com/faq/serverless#example-integration


```
npm i @codegenie/serverless-express aws-lambda
npm i -D @types/aws-lambda serverless-offline
```

Update main.ts for SLS and `serverlessExpress` - see `src/main-for-serverless.ts`

Take note that you must have a SLS account and must login - a credit card and/or license is NOT required for this usage.  Running `serverless offline` will prompt you to login.

```
npm run build
npx serverless offline
```

** IMPORTANT ** : `127.0.0.1` is no longer valid (Node v20, NestJS, Serverless-Offline) so you must use `localhost` (which Postman auto-converts to `127.0.0.1` and then fails) or the IPv6 equivalent `::1`.  IPv6 addresses in URLs must be wrapped in square brackets like : `http://[::1]:3001/`

** Note ** : Serverless also prepends in the "stage" (default `dev`) to the URL path unless it is explicitly disabled.

With all that in mind, the GraphQL route we've configured is accessed by : `http://[::1]:3001/dev/graphql`