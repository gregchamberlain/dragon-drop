```
{
  currentUser: {
    id: 1,
    email: user@example.com
  },
  sites: {
    loading: false,
    1: {
      id: 1,
      name: "My First Site",
      identifier: "my-first-site",
      pages: [1,2]
    }
  },
  pages: {
    current: {
      id: 1,
      saved: false
    },
    loading: false,
    1: {
      id: 1,
      name: "Home",
      path: "/",
      components: [1]
    }
    2: {
      id: 2,
      name: "About",
      path: "/about",
      components: [4]
    }
  }
  components: {
    current: false,
    loading: false,
    1: {
      id: 1
      name: "Image",
      layout: {
        x: 0,
        y: 0,
        w: 4,
        h: 2
      },
      props: {
        url: "http://www.freedigitalphotos.net/images/img/homepage/87357.jpg",
        padding: 15
      }
    },
    4: {
      id: 1
      name: "Map",
      layout: {
        x: 0,
        y: 0,
        w: 4,
        h: 2
      },
      props: {
        lat: 37.872233,
        lng: -78.12398,
        padding: 15
      }
    }
  }
}
```

#### current (pages / components)
Used to keep track of which page or component is currently being edited. Tracks if the current page is unsaved.

#### loading (sites / pages / components)
Set to the entity that is currently being fetched, true if all, false if none, id if only one
