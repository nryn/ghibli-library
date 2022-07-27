# Ghibli Library

This project is a Vue.js app, serving up information about Studio Ghibli’s filmography using the [public GhibliAPI endpoint](https://ghibliapi.herokuapp.com/#tag/Films).

## Dependencies and Usage

This project was put together using Node 16.16.
First install dependencies: Run `yarn` or `npm install` (depending which manager is your favourite) in the root directory of the project.
And then to run the local HTTP server `yarn dev` or `npm run dev`, and navigate to the logged localhost:port endpoint in your web browser.

### Running tests

This project contains only end-to-end tests, and was developed in a simple BDD-TDD fashion.
To run these tests in a Chrome browser, first run the dev server as above and in another shell run `yarn e2e:watch` or `npm run e2e:watch`.

These tests also automatically run using headless Chrome automatically in Github Actions when pushing commits to remote.

## Initial Braindump

My thoughts, ideas and feelings about how I want to approach the task. Rough plan and order in which to do things:

- Write basic README
  - Explain requirements BDD style
    - "On the overview page I should see 10 films with thumbnails"
    - "Be able to search for a film"
    - "should see Princess Mononoke"
    - "click through on the thumbnail to see more details"
    - "see that Hayao Miyazaki is the director"
    - "see the character names"
- Set up Vite project with Vue and VueX
  - Install known dependencies/packages
  - Sort out config for tailwind, cypress etc if quick. Could do this later.
  - Strip out boilerplate
- Write BDD style E2E tests that fail
- Figure out data structure, or how the state should work
  - Seems like after getting films we may need to do more separate calls to get arrays of people, locations, vehicles, trigger separate processes to populate the other parts of the state.
- Figure out component hierarchy, if this is even worth doing up front...
- Build something that makes the failing tests pass
- Come up with a nice design and try to implement it with tailwind
- Update the README again

## Technical requirements

These are the constraints I'm trying to work within:

- Two pages only: An overview page to list the films, and a Film Details page.
- Use VueX as the client-side state store for all the data from the API.

- Overview Page
  - Must show up to 10 image thumbnails using the `image`, and also include the `title`, `release_date`, and `running_time`. The thumbnail should link to the corresponding Film Details page.
  - Must paginate (in any way) as needed.
  - Must include a search bar on top of the page to filter out films using either `title` or `release_date`.

- Film details page will show more details about a specific film.
  - Must show `title`, `original_title`, `original_title_romanized`, `description`, `director` , `producer` , `release_date`, `running_time`, and `image`.
  - Must also show `people` and each of their `name`s.

These requirements should turn into test cases.

## Things that hindered and helped me

The question of "how good does the search need to be?" came up - right now it's case insensitive, but should it be clever when faced with apostrophes or other punctuation, or non-english alphabet characters like ö? To be honest, it would be a one-line change to add japanese title search, or director/producer... but I'll stick to the basic requirements!

At one point, I was a bit frustrated that I couldn't find a quick and easy way to have typings for Vuex's mutations and getters.
It seems reasonable thing to have typings for these built-in, or at least be able to proving your own type arguments.

[This article](https://dev.to/3vilarthas/vuex-typescript-m4j) from [Andrew Vasilchuk](https://github.com/andrewvasilchuk) helped me find a way to put together typings for the parts of the store that need it, manually.

Soot sprite svg used as the favicon here came from the [Studio Ghibli Park website](https://ghibli-park.jp/) and is their copyright. I will not publish the site with this icon.

Soot sprite animated webp came from a [tumblr blog](https://fuckyeah-pixels.tumblr.com/post/31686542305) and the copyright is not clear. I will not publish the site with this image.
