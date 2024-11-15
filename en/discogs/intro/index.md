# Development Diary: Discogs Revisualized – Introduction

A Series on Building an App with `Next.js 14`

![cover](/discogs/intro/intro_cover.webp)

## The Idea Behind the Project

Recently, I started building a collection of vinyl records. After purchasing a turntable and a few records, I found myself thinking about cataloging my growing collection.

I envisioned a user-friendly app or website where I could log the records I already own and create a wishlist for future purchases — something that I could also share with friends.

A platform like this already exists: [Discogs.com](http://discogs.com/). It boasts an active community and a massive database of physical and digital music releases. While the site has excellent features, its design feels noticeably outdated.

Fortunately, Discogs provides an [open API](https://www.discogs.com/developers) that replicates nearly all the site's functionality through HTTP requests. Learning this, I decided to build my own frontend application to showcase vinyl collections and wantlists — essentially reimagining and modernizing the site's design.

## What to Expect from This Development Diary

In this series of articles, I’ll walk you through the process of creating a fully functional web application that interacts with an existing API.

I’ll be using `Next.js 14` along with `React` as the primary framework and library for development.

::: danger Disclaimer
While I’m a frontend developer, my primary experience lies within the `Vue` ecosystem. Keep this in mind as you read these articles — I may unintentionally carry over patterns and practices from `Vue` into the `React` world.

That said, I’m confident that I won’t make any major mistakes. In fact, I plan to highlight the key differences between the `React` and `Vue` ecosystems throughout the series. It’s going to be an exciting learning journey!
:::

## Target Audience

This series of articles is designed to be helpful for:

- **Frontend Beginners**: 
If you’re just starting your journey in web development, these articles will guide you through the fundamental concepts of building web applications. I’ll explain each step in detail to ensure clarity.
- **Developers Curious About `Next.js`**:
For those with experience in other frontend frameworks who want to explore `Next.js 14`, this series will serve as a hands-on guide. You’ll see how `Next.js` simplifies app creation with features like server-side rendering, static generation, and a powerful routing system.
- **Developers Interested in Another Developer's Approach**:
If you’re curious about how someone else tackles development challenges, this series will provide insights into my methods and thought processes as I build the application.
- **Those Interested in Domain-Driven Design (DDD) on the Frontend**:
Domain-Driven Design (DDD) is a powerful methodology for managing complexity in large applications. These articles will demonstrate practical implementations of some DDD principles within the context of a real-world frontend project.
- **Frontend Developers Transitioning from Other Frameworks**:
Experienced developers using other frameworks like `Vue` or `Svelte` will find this series valuable for understanding how their existing skills can translate to `Next.js`. I’ll include comparisons and adaptations to help make the transition smoother.
- **Developers Interested in API Integration**:
Since this project relies on the open Discogs API, these articles will also serve as a practical resource for learning how to integrate third-party APIs into your own projects. My experiences and lessons learned might be especially valuable for those exploring API-driven development.

## Prerequisites

To successfully understand and apply the material in this series, you’ll need the following foundational knowledge:

- **JavaScript Basics**: A good grasp of JavaScript syntax and fundamental concepts is essential.
- **Web Development Basics**: Familiarity with `HTML` and `CSS` for creating and styling web pages.
- **Frontend-Backend Interaction**: An understanding of how the frontend (client side) communicates with the backend (server side) via APIs. This includes knowledge of sending and receiving `HTTP` requests, as well as the division of responsibilities between frontend and backend operations.


## Why Next.js 14?

- __Popularity and Modernity.__ `Next.js 14` is one of the most popular and cutting-edge frameworks for building web applications.

- __New Learning Experience.__ I want to gain hands-on experience with `Next.js 14` and `React` in general. Even if I continue working primarily with `Vue`, understanding how other frameworks and libraries work will significantly enhance my technical skills.

- __Server-Side Rendering (SSR).__ One of my goals is also to deepen my knowledge of SSR and compare its implementation in `Next.js` with `Nuxt.js`.

- __Convenient Routing.__ `Next.js` offers a powerful and flexible routing system that simplifies the creation and management of pages within an application — an essential feature for my project.

- __Built-In Image Optimization.__ The built-in image optimization tools in `Next.js` help improve performance and reduce page load times, a valuable feature for modern web applications.

- __Request Caching.__ The Discogs.com API has rate limits on the number of requests per minute. With `Next.js`’s caching capabilities, I can reduce the frequency of API calls, ensuring smoother operation and less strain on their servers.

---

Enjoy the Read!

If you have any questions, feel free to ask them via `GitHub Issues`.