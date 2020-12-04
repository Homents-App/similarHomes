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




CASSANDRA SETUP
Installation
For the installation of Apache Cassandra the Latest stable version that is available now is 3.11 and the 4.0 is in beta state , so we’ll be installing 3.11 in this blog post.
Apache Cassandra 3.11 require python and jdk8 installed in your computer.
I hope you’ll be having Homebrew installed with you .

Check your python installation
python --version

Upgrade your Python 2 version
pip install --upgrade pip setuptools

For installation of Jdk8
brew cask install java

As there are many use cases of older version , so we’ll be using AdoptOpenJdk
brew tap AdoptOpenJDK/openjdk
brew cask install adoptopenjdk8
Now how to set jdk 8 as default jdk
We type following command to find all the jdk version available
/usr/libexec/java_home -V
Image for post
Pick the version that you want to make default
Here in the above terminal 1.8.0_201 is a version
export JAVA_HOME=`/usr/libexec/java_home -v 1.8.0_201`
Now when you will type
java -version
You will be getting updated jdk version as default
Image for post
Output that you’ll get
Now coming to our final step of installing Cassandra
brew install cassandra
Now starting Cassandra
cassandra -f
Open new Terminal Tab and type
cqlsh





### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

