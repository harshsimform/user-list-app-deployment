## User List React App - Staging Environment

→ The staging environment, also known as the pre-production environment, is a replica of the production environment that is used to test the final version of the code before it is deployed to production. In this environment, developers can check for any bugs, errors, or inconsistencies that may arise when the code is run in a live environment. This environment should closely resemble the production environment in terms of hardware, software and data configuration.

### To start staging environment, run this command

```bash
$ yarn build-stage
```

→ The `yarn build-stage` command will build the application and prepare it for deployment in a staging environment. This command will typically compile the code and assets into a production-ready format, optimize the application for performance, and generate a static build of the application that can be deployed to a server. then run below command

```bash
$ yarn preview
```

→ The `yarn preview` command allows developers to view the application in a staging environment before deploying it to the production environment. The preview command typically starts a local server that serves the application on a specified port, allowing developers to see how the application will look and behave in a live environment without having to deploy it.

Overall, these commands are used to ensure that the application is ready for deployment and functioning as expected in a staging environment before being released to production.
