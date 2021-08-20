# Cards

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

The [dataset](https://github.com/Cubified/cards/blob/main/src/cards.csv) used by `cards` was collected by hand from a variety of credit card issuers' websites, as well as from roundup sites such as [CreditCards.com](https://creditcards.com) and [NerdWallet](https://nerdwallet.com).

As a result, the accuracy of `cards`' return on investment calculation is an estimate, and assumes a few things:

  1. All expenses listed in the "Spend" category are put onto the current card
  2. All travel purchases are booked through the card issuer's portal if required to maximize return (e.g. most Chase cards)
  3. All points/cash back are redeemed in whatever way most closely resembles 1 point-per-dollar -- many cards increase/decrease this conversion rate depending on how points are redeemed (i.e. for travel specifically vs. for a statement credit), but `cards` does not yet track this data
  4. Any outstanding balances are paid in full every billing cycle (because running a balance defeats the purpose of rewards cards)

Additionally, `cards` does not yet have support for rotating/custom cash back categories (such as the Discover It Cash Back or Bank of America Custom Cash) or welcome/good behavior bonuses.  As a result, estimates for cards with these features will be lower than in reality.
