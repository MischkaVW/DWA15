1. Why do we need to `import React from "react"` in our files?

We no longer use CDN links in our index.html and now need to import them.

2. If I were to console.log(page) in index.js, what would show up?

Nothing, as nothing has been imported or rendered.

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```
We havee not imported or rendered anything therefore it will not work.

4. What does it mean for something to be "declarative" instead of "imperative"?

Declarative is when you say what to do, imperative is when you need to explain what to do and how to do it.

5. What does it mean for something to be "composable"?

Capable of using multiple elements/components in order to create/execute something.