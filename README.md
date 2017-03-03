
# A website to order and track pizza orders

#### 3 March, 2017, v.1.0.0

#### By Mark Fisher

## Description

A website to order and track pizza orders....

### Specifications

|Behavior|Input|Output|
|:---:|:---:|:---:|
|User selects a topping|User selects topping|Topping selection returned|
|Users selects more than one topping|User selects more than one topping|More than one topping returned|
|Selected toppings are unique|User selects n toppings|n|
|User selects size of the pizza|User selects large|Large returned|
|Price of pizza is calculated based on size of pizza and number of toppings. Toppings beyond the first are slightly cheaper than the first topping|User selects small pizza with three toppings|$11.60|
|Meat toppings cost slightly more than veggie toppings|User selects small pizza with three meat toppings|$12.80|
|Users can order more than one pizza|User selects more than one pizza|Second (or more) pizza purchases tracked|
|Costs for more than one pizza are added to price of first pizza|User orders more than one pizza|Cumulative price returned|
|User selects a delivery option|Delivery selected|Delivery option returned|
|Cost of delivery is added to price of the pizza|Delivery selected|New cumulative price reported|

## Setup/Installation Requirements

* This repository is meant to be viewed. It can be viewed [here](https://Atticus29.github.io/pizzaOrder).

### Or if you're feeling bold, you can clone OR download a local instance of the site:

* Clone
  * Open your terminal program
    * On a Mac, this would be in the Applications/Utilities directory, and is called, "Terminal"
    * Windows uses a Terminal program as well, but a Terminal with all the capabilities we'll require is not installed by default. Thankfully, we can easily download and install a Terminal program that does fit our needs.
There are many options available, but we recommend using a terminal program called git bash. You can download this free program at [msysgit.github.io](https://git-for-windows.github.io/).
  * Clone this track survey repository by typing, `git clone https://github.com/Atticus29/pizzaOrder.git`
* Download
  * Click [here](https://github.com/Atticus29/pizzaOrder/archive/master.zip) to download the repo
  * Unzip the zipped repository
* Open the pizzaOrder folder and double-click on index.html.
* Make your selections and click submit as instructed on the site.


## Known Bugs

There are no known bugs. I'd be interested to know if you find any.

## Support and contact details

Please feel free to contact mark.aaron.fisher@gmail.com for questions

## Technologies Used

* git v. 2.11.1
* html5
* bootstrap v. 3.3.7
* CSS
* javaScript
* jQuery v. 3.1.1

### License

This software is licensed under the MIT license.

Copyright (c) 2017 Mark Fisher

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
