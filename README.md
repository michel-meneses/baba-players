# baba-players
A simple, but useful, project that demonstrates how to implement a **Single Page Application** based on the **Clean Architecture** only using **vanilla Javascript** (no frameworks required!).

## Motivation

Front-end web development is currently ruled by Javascript-based frameworks (*i.e.* Angular, React, Vue.js, etc). These frameworks boost the development of web apps by removing boilerplate code through abstractions of commum functionalities and architecture definitions. However, such conviniences may induce developers (specially those without much experience) to only "learn" the framework and not understand what is really going on behide the scenes. The problem: these frameworks change pretty fast! So, how can your next project be protected against those changes and become more easily mantainable? The answer is easy: just learn how to architecture your app by yourself, so next time you work with a web framework you feel confident you know what you're doing!

## Description

This repository demonstrates how to develop a Single Page Application (SPA) based on the Clean Architecture, by [Robert "Uncle Bob" Martin](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html), only using *vanilla* Javascript (that's it, only pure JS, without any framework!).

This architecture was chosen due to its effectiveness regarding the separation of concerns and abstraction dependency (which are part of the [SOLID](https://en.wikipedia.org/wiki/SOLID) principles), so apps become more easily testable, maintainable and scalable.

The SPA implemented in this project only emulates the signup page of a social network that connects people interested in playing soccer matches (*a.k.a* "baba" in some Brazilian states). The idea of this app is to be simple and have a really limited scope, so its architecture can be highlighted.

This app's architecture is divided into three main layers, which have their own responsibilities:

- Domain Layer: responsible for modeling the domain and the problem to be solved by this app.
- Data Layer: responsible for implementing the data management functionalities used by the domain layer.
- Presentation layer: responsible for receiving the user input, passing it to the domain layer, and presenting its output to the user.

For a more in-depth discussion about the Clean Architecture, please visit: [](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

## Installation and Use

Just open the index.html file using your favorite browser (that's it, no need of package managers, or any other tools)!

## Disclaimer

The goal of this project is to highlight the architecture of a SPA implemented in vanilla Javascript. That's why its scope is so small. Naturally, in a real production scenario, such a small project wouldn't need such a robust architecture. However, medium to large applications can definitely benefit from it. 

Also, it is worth to mention the UI is not the focus of this project (I know, that's pretty obvious once you launch the app). Please, feel free to submit a PR in case you wanna contribute to improving this project, especially its UI! :)

## License

This repository is *free* and distributed under the MIT license.
