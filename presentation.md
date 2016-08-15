How to make Angular 1 less painful:

(hint: make it more like... something else)

<react-angular logo />

Angular suffers from two categories of problems:


1. MVC scaling trouble
- MVC is great for small-scale applications, but managing the web of interconnected state becomes extremely tricky as you scale up.
- Managing a system like this is inherently complex and difficult.


2. API trouble
- Angular offers a giant API surface area, some of which is counterproductive for use in any serious project.


1. MVC scaling trouble

there are already other frameworks that have figured out how to avoid the scaling trouble with MVC.
The most succesful such framework is React, by Facebook.

React's motivating idea is to stop trying to model User Interfaces in an Object Oriented way, and to make it more functional.
They did it without using the word Monad.



The goal of this talk will be to offer a pattern for building angular 1 applications that scale
(I have no idea about angular 2, and if you want to use React, at this point I'd say just go for it. But sometimes you just can't.)


Let's start by clarifying what about React makes it "easy" to understand:

When I build a program in React, I try to make it so that literally the entire UI of the application can be rendered from one big blob of data.

- all the state is in this tree
- all the UI is deterministically rendered from this data
- any interaction outside the system changes the original tree of state

Facebook calls this pattern Flux.
There are several technical implementations of it, but they all follow this basic pattern.

<React example>

Let's test our hypothesis, by editing the big tree of state in the left, and seeing it update on the right.


This should be the goal of *any* UI project you're on. And note, any UI project at Labs is going to try some version of this technique, when you test your app.

Backing up, a lot of Angular projects struggle to unit-test Directives.
Since they're often built in a very stateful way, it becomes necessary to adjust your Directive into each possible state by creating it and modifying it, and then asserting on its appearance.

< demo testing a stateful angular directive >

This is torture, and it becomes worse when multiple directives talk to each other.

So then to restate our goal:
We want a way of making an angular UI that:
  - can render itself using exactly one tree of state
  - without manual intervention


Which brings us to:

2. API trouble

Before we try to actually implement our goal, let's briefly talk about angular's API faults.

1. there are a lot of ways to do things
2. there is a huge surface area
3. some encouraged idioms are counter-productive

For this talk, I'm going to argue that the way around this is to pick a small subset of the API, and throw everything else away.

For our purposes, we're going to restrict the API to:

1. Services
    - to hold *all* state
2. Directives
    - Element-restricted
    - with private scopes
    - link only (no long-lived controllers)


Building our app:

Our directives will follow a pattern called "Reactive Directives".

1. Stateless
    - receive any and all state they need to render

2. graceful empty state
    - our directives should be able to render their null state without manual intervention

The first iteration of the app will not be able to handle any user interaction (this is on purpose)

We're going to make a chat app
