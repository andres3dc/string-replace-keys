
## string-replace-keys
Replace all substring matches in a string by object keys

## Usage

First, grab the package from npm:

```sh
npm install --save string-replace-keys
```

Then, import the editor and use it in your code. Here is a basic example.

```jsx
import stringReplaceKeys from 'string-replace-keys';

const str = 'api/store/[storeId]/user/[userName]';

const keys = {
    storeId: 25,
    userName: 'william'
};

stringReplaceKeys(str, keys);
//=> 'api/store/25/user/william'
```
another example:

```jsx
import stringReplaceKeys from 'string-replace-keys';

const fruitStr = 'The [fruitName] has [fruitCalories] calories';

const keys = {
    fruitName: 'apple',
    fruitCalories: 52
};

stringReplaceKeys(fruitStr, keys);
//=> 'The apple has 52 calories'
```

## API
### stringReplaceKeys(string, keys)

Return a new string

#### string

Type: `string`

With special words inside [] to replace them

#### keys

Type: `object`

With key and value to be replaced in string

# license

ISC