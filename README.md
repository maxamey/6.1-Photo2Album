# 6.2 Refactor of 6.1

## Dev Task list
### Modal
  [x] - view that has
    [x] - a thumbnail image: src, alt class
    [x] - smaller size (200 x 200)
  [x] - modal element
    [x] - takes up full screen
    [x] - with class, display
    [x] - opacity of 50% (to see the underlying content)
    [x] - has large image
    [x] - hidden by default
  [x] - click handler for thumbnail
    [x] - set up handler
    [x] - adds class to show modal
    [x] - get source and alt from clicked item
    [x] - injects image clicked on into modal
  [x] - click handler for exit modal
    [x] - create element to click
    [x] - set up handler
  [] - set up data object
    [x] - set up sources
    [] - set up alts
  [] - Clicking an Album (title) should load a different list of the photos
    [x] - Set up a list of photos to display
      [x] - make a ul in which to put the titles
      [x] - make a loop over the data to grab the image sources from the data
      [x] - put the sources in the current list item's image's attributes
    [x] - Set up a list of album titles
      [x] - make a ul in which to put the titles
      [x] - make a loop over the data to grab the album titles
      [x] - put the titles into the list as list items
    [] - Set up an event listener for clicking on album titles

## Development
  - `$ npm install -g webpack`
  - `$ npm install -g babel-cli`
  - `$ npm install -g webpack-dev-server`


## Words
  - CLI - Command Line Interface - Allows us to write commands in Terminal to execute functions (this is why we use `npm install -g`)
  - Spec - is another word for a file with tests...
  - Spec Helpers - reusable code (functions) for specs...
