# cypress-test-nested-projects

[![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-nested-projects.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-test-nested-projects)

Folder structure:

```
package.json
node_modules
src/
    clients/
        foo/
            cypress.json
            cypress/
        bar/
            cypress.json
            cypress-smoke.json
            cypress/
              integration/
              smoke/
```

Package scripts test subfolders (using relative and absolute paths), see [package.json](package.json)

```json
{
  "scripts": {
    "test": "npm run test-foo && npm run test-bar",
    "test-foo": "cypress run --project ./src/clients/foo",
    "test-bar": "cypress run --project $PWD/src/clients/bar"
  }
}
```

## Examples:

If you want to run Cypress tests in the folder "src/clients/foo":

```shell
npx cypress run --project ./src/clients/foo
```

If you want to run Cypress in the folder "src/clients/bar" and use [cypress-smoke.json](src/clients/bar/cypress-smoke.json) configuration file:

```shell
npx cypress run --project ./src/clients/bar --config-file cypress-smoke.json
```

## FAQ

<details>
  <summary>
     What's the difference between <code>cypress run --project "folder"</code> and <code>cypress run --config-file "filepath"</code>?
  </summary>
    <p>When you use <code>cypress run --project ...</code> you change the root folder where Cypress starts.</p>
    <p>When you use <code>--config-file ...</code> you still run Cypress in the current folder, but instead of loading the settings from <code>cypress.json</code> file, you load it from a different JSON file.</p>
</details>
