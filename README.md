## Cards

A web-based tool for determining which credit cards provide the best return on investment based on the user's spending habits.

### [Try it here!](https://cubified.github.io/cards)

### Screenshots

Options page:

![0.png](https://github.com/Cubified/cards/blob/main/screenshots/0.png)

Results page:

![1.png](https://github.com/Cubified/cards/blob/main/screenshots/1.png)

Details page:

![2.png](https://github.com/Cubified/cards/blob/main/screenshots/2.png)

### Building and Running

`cards` uses `create-react-app`, meaning the procedure to start the development server is as follows:

```sh
 $ yarn
 $ yarn start
```

And to build for production:

```sh
 $ yarn build
```

### Dataset

The [dataset](https://github.com/Cubified/cards/blob/main/src/cards.csv) used by `cards` was collected by hand from a variety of credit card issuers' websites, as well as from roundup sites such as [creditcards.com](https://creditcards.com) or [NerdWallet](https://nerdwallet.com).

As a result, the accuracy of `cards`' return on investment calculation is an estimate, and assumes a) that all expenses listed in the "Spend" category are put onto the current card, and b) that all travel purchases are booked through the card issuer's portal if required to maximize return (e.g. most Chase cards)

Additionally, `cards` does not yet have support for rotating/custom cash back categories, such as the Discover It Cash Back or Bank of America Custom Cash.  As a result, estimates for these cards will be lower than in reality.
