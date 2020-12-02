# Project Name

> A recreation of a Trulia Product Information Page

## Related Projects

  - https://github.com/hrr49-fec07-stark/Photos
  - https://github.com/hrr49-fec07-stark/Description-module
  - https://github.com/hrr49-fec07-stark/tours

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> http://52.15.94.24:3001/

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

CRUD Operations
- C
  API - '/api/new-posting'
  Obj - name: name of property,
        key: value pairs for properties to be added
  Database Operation - .save()
- R
  API - '/api/similar-homes'
  Database Operation - .find()
- U
  API - '/api/update-posting'
  Obj - filter: Obj with key: value
      identifier for doc to be updated
      change: Obj with key: value identifier for updates to be made
  Database Operation - .updateOne()
- D
  API - '/api/remove-posting'
  Obj - key: value pair identifying the doc to be deleted.
  Database Operation - .deleteOne()


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

