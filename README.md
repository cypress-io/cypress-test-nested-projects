# cypress-test-nested-projects

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
            cypress/
```

Package scripts test subfolders (using relative and absolute paths)

```json
{
  "scripts": {
    "test": "npm run test-foo && npm run test-bar",
    "test-foo": "cypress run --project ./src/clients/foo",
    "test-bar": "cypress run --project $PWD/src/clients/foo"
  }
}
```
