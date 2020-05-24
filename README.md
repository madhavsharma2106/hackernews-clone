| Build                                                                                                                                                                       | Live Website                      | Storybook                         |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | --------------------------------- |
| [![madhavsharma2106](https://circleci.com/gh/madhavsharma2106/hackernews-clone.svg?style=svg)](https://app.circleci.com/pipelines/github/madhavsharma2106/hackernews-clone) | [here](http://139.59.31.229:8000) | [here](http://139.59.31.229:9000) |

# Hackernews Clone

The following is a clone of [Hackernews](https://news.ycombinator.com/) built using APIs providied by [Algolia](https://hn.algolia.com/api)

## Design Philosophy

The product is designed with the [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/) in mind.
The underlying idea is to create isolated componets that can be used to build bigger components. The component in this applications have been segregated accordingly.

- Atoms
- Molecules
- Organisms
- Pages

### Storybook

In line with the Atomic Design Methodology, storybook acts like a singe source of truth for all components. The addition of stories helps large teams scale easily by reusing existing components or building one if it does not exist in the ecosystem.

After a certain threshold, most usecases are covered and the team moves rapidly by just focusing on the business logic side of things.

## Testing

All the testing is done using [Jest](https://jestjs.io/) and [Enzyme](https://enzymejs.github.io/enzyme/). For the scope of the current project, 5 unit test files have been written.
All the tests are completed using [snapshot testing](https://jestjs.io/docs/en/snapshot-testing).

The script to run all tests is `yarn test`

## Continuous Intergration

[Cirlce CI](https://circleci.com/) has been used to maintain integrity of the master branch.

The CI checks in the process includes:

- Setup Environment
- Preparing Environment Variables
- Checkout Code
- Restoring Cache
- NPM Install
- NPM Test
- NPM run build
- Cache

## Server Side Rendering

An attempt was made to make the APP render from server side. The files of which are available at `/server`.
An error I could not resolve was to use `window` object in while preparing the APP from the server.

The Stack used was:

- Babel
- Node
- Express
- ReactDOMServer
