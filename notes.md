Complaints about angular tend to boil down to three legitimate complaints:

1. inter directive communication is hard
2. testing complicated directives is hard
3. managing application state can become a fucking nightmare

Other common complaints:

1. massive api surface area


Effective Patterns for Angular 1.XX:

Let's talk about inter-directive communication.

A lot of people suggest using passed-down controllers. This is generally a terrible idea. It requires relatively sophisticated knowledge of the angular api, it encourages stand-alone controller building, and it encourages local coupling of control.


