# Redux Notes

- Redux is a flexible **State Container** for JavaScript Apps that manages our application state **separately**.

` npm i @reduxtjs/toolkit react-redux`

## Redux app folder structure

```
    ├── src/
    │ ├── features/ # 🎯 **Domain/Feature-specific logic** (The Core of the application)
    │ │ ├── example1/ - Feature 1 folder
    │ │ │ └── example1Slice.js - **Redux Slice for Feature 1**
    │ │ │
    │ │ ├── example2/ - Feature 2 folder
    │ │ │ └── example2Slice.js - **Redux Slice for Feature 2**
    │ │ │
    │ │ └── common/ - Shared Redux logic (e.g., authentication, global status)
```

## 1. How to write a Slice?

- Here how to write redux slice:

```javascript
    // features/examples/examples1Slice.js

    const initialState = {
        val: 5,
        id: 1
    }

   const examplesSlice = {
    name: "examples",
    initialState,
    reducers: {
        increment(prevState, action) {
            action.payload // to get the dispatched data
            // and we can MUTABLY update state
            ...action here

            // Don't need return anything
        },
        ...more actions
    }
   }

   export default examplesSlice.reducer; // ".reducer" Because its a single reducer

   // Now, we've to update export all actions written above ( increment, ...)

   export const {increment, ...Others} = examplesSlice.actions;
```

## 2. Generate a Store

```javascript
// src/app/store.js

import "configureStore";
import "example1Slice as examplesReducer";

const store = configureStore({
  reducer: {
    examples: examplesReducer,
  },
});

export default store;
```

## 3. Define Redux in our React app ( main.jsx )

```js
    import store "from store.js"

    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>

    // The Provider from "react-redux"
```

## 4. Use counter value in React component

```js
const example1 = useSelector((state) => state.example1);

// "useSelector" comes from "react-redux"
// callback state is refer the store.reducer
```

## 5. Dispatch Action

```js
import "'increment' action to to pass on dispatch function";

const dispatch = useDispatch();

const handler = (data) => {
  dispatch(increment(data)); // data is accessed by - action.payload
};
```

## Fetching with redux-thunk/async-thunk

How it works?

> Dispatch Action > Middleware > Reducer > Update UI

"Middleware" - makes a async operation before perform the reducer action, on success it create actual action that reducer updates
