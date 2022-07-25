# Ghibli Library

This project is a Vue.js app, serving up information about Studio Ghibli’s filmography using the [public GhibliAPI endpoint](https://ghibliapi.herokuapp.com/#tag/Films).

## Context

This project is being completed as a technical exercise for an interview process.

### Initial Braindump

After reading the brief for the project, I thought it useful to write down my thoughts, ideas and feelings about how to approach the task. What follows is that:

Rough plan and order in which to do things

- Write basic README
  - Explain requirements BDD style
    - "On the overview page I should see 10 films with thumbnails"
    - "Be able to search for a film"
    - "should see Princess Mononoke"
    - "click through on the thumbnail to see more details"
    - "see that Hayao Miyazaki is the director"
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

### Technical requirements

As per the brief, these are the constraints I'm trying to work within:

- Two pages are required: An overview page to list the films, and a Film Details page.
- Must use VueX as the client-side state store for all the data from the API.

- Overview Page
  - Must show up to 10 image thumbnails using the `image`, and also include the `title`, `release_date`, and `running_time`. The thumbnail should link to the corresponding Film Details page.
  - Must paginate (in any way) as needed.
  - Must include a search bar on top of the page to filter out films using either `title` or `release_date`.

- Film details page will show more details about a specific film.
  - Must show `title`, `original_title`, `original_title_romanized`, `description`, `director` , `producer` , `release_date`, `running_time`, and `image`.
  - Must also show `people` and each of their `name`s.
