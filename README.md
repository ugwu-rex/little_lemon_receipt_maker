# Little Lemon Receipt Maker

A small JavaScript exercise that simulates a receipt maker for the Little Lemon restaurant. It works with an array of dishes and calculates prices (with or without tax) plus a group discount based on the number of guests.

## What it does

- `getPrices(taxBoolean)` loops through the `dishData` array and logs each dish with its price, either taxed or untaxed depending on the argument passed in.
- `getDiscount(taxBoolean, guests)` calls `getPrices()` first, then works out a discount based on the guest count and logs it.

## getPrices(taxBoolean)

- Loops through `dishData`.
- If `taxBoolean` is `true`, the price is multiplied by `tax`.
- If `taxBoolean` is `false`, the price is used as is.
- If anything other than a boolean is passed in, it logs a warning and stops:
  `You need to pass a boolean to the getPrices call!`
- Each dish is logged as:
  `Dish: [name] Price: $[value]`

## getDiscount(taxBoolean, guests)

- Calls `getPrices(taxBoolean)` first so the individual prices print before the discount.
- Checks that `guests` is a number between 0 and 30 (exclusive). If not, it logs:
  `The second argument must be a number between 0 and 30`
- If valid:
  - Less than 5 guests → $5 discount
  - 5 or more guests → $10 discount
- Logs the result as:
  `Discount is: $[discount]`

## Running it

Call `getDiscount()` with different combinations of `taxBoolean` and `guests` to see how it behaves, e.g.:

```js
getDiscount(true, 4);
getDiscount(false, 12);
getDiscount(true, 40);   // invalid guest count
getDiscount("yes", 10);  // invalid tax argument
```

## What I practiced

- Looping through arrays and objects
- Conditionals for pricing logic
- Defensive coding (validating argument types and ranges before using them)
- Chaining functions together