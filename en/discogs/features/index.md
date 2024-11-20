# Development Diary: Discogs Revisualized – Features and MVP

App Features Description

::: warning Attention!
The MVP version (Minimum Viable Product) will differ slightly from the full version!
:::

![cover](/discogs/features/features_cover.webp)

## Full Application Features

### API Wrapper

The app will utilize a custom wrapper for the [Discogs API](https://www.discogs.com/developers). This will allow seamless access to all functionalities of the original API for viewing wantlists and collections, while enhancing the developer experience with more user-friendly return types and built-in response caching.

### Displaying Wishlists and Collections

Users will be able to browse any public `Discogs` wantlist and collection. As on the main site, the pages will display detailed information about the releases added to the list, including album covers, artist names, album titles, release years, and more.

### Links to Profiles and Releases

Each user profile and music release will include a direct link to their corresponding pages on the main `Discogs` site. While my app will serve as a visually enhanced wrapper for wishlists and collections, detailed exploration of content will require visiting the original website.

### Profile Cards with Public Information

The app will feature a beautifully designed profile card displaying all publicly available user information.

### Three Layout Options

Users will have the flexibility to choose between three layout styles, similar to those available on `Discogs.com`:

- Grid view
- Table with images
- Table without images

This ensures a personalized viewing experience based on user preferences.

### Data Sorting

The app will support robust data sorting capabilities powered by the `Discogs API`. Users can sort wantlists and collections by various criteria, such as genre, release year, and more, enabling quick and intuitive searches for specific records.

### Sharing Layout and Sorting Settings via Encoded Links

Users will be able to share their preferred layout and sorting options with others by generating encoded URLs. These links would allow friends or collaborators to view a list with the exact display settings applied, ensuring a consistent experience.

## What the App Won’t Include

### User Registration and Authentication

The app won’t support user registration or authentication. Instead, it will focus solely on displaying collections and wantlists for existing `Discogs` accounts.

### Search Within Collections and Wantlists

While users would be able tp browse public lists, the app won’t include a built-in search feature for collections or wantlists, as implementing such functionality requires user authentication.

### Adding Items to Collections or Wishlists

Users won’t be able to add new records to their collections or wantlists directly through the app. These actions will remain exclusive to the `Discogs` interface, and all updates will need to be made on their platform.

### Other Site Features

The app won’t replicate the full range of functionality available on the main `Discogs` site. Features like buying and selling records, participating in forums, managing friend lists, and other specialized tools are outside the scope of this project.

The app’s primary focus is to provide a visually enhanced display for public lists, ensuring a clean and appealing user experience.

## Approximate Design

For the initial version of the app, I plan to use standard components from the [Ant Design](https://ant.design/) library. This will allow me to quickly build a user interface with a modern and professional look.

The interface will be responsive, ensuring proper rendering across a variety of devices, including mobile phones, tablets, and desktops.

As the project evolves, I aim to customize and extend the `Ant Design` components to enhance the app’s visual identity and create a more unique user experience.

## MVP Features

The features described above are planned for the full version of the application. For the MVP (_Minimum Viable Product_), I will focus on the following core aspects:

| Full Version | MVP |
| ------------- | -----------:|
| API Wrapper | API Wrapper |
| Viewing Wantlists and Collections | Viewing Wantlists (no Collections) |
| Links to Profiles and More | Links to Profiles and More |
| Profile Card | |
| Three Layout Styles | Three Layout Styles |
| Data Sorting | Sorting by Rating Only |
| Encoded Display Settings | |

---

In the next article I’ll discuss the creation of the API wrapper.