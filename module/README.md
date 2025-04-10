# Estimated Date

## Description
The Estimated Date module for OpenCart is designed to display the estimated delivery dates of products and orders.

Compatible with OpenCart 3.x/4.x (PHP ≥ 7.x).

**Note**: The source code is encrypted for security reasons. For purchasing and licensing details, please refer to the OpenCart Marketplace link in the **Download** section below.

## Features
* Calculates the estimated order delivery date based on:
  - The store's order processing time.
  - The time required by the courier service for delivery.
* Takes holidays and non-working days into account for both the store and the courier service.
* Allows setting different handling times for each product using the [i]Out Of Stock Status[/i] parameter.
  - As a side effect, it enables displaying different availability statuses on the product page.
* Highly customizable, allowing you to define:
  - The pages where the estimated date info block will be displayed (product page, cart, checkout, etc.).
  - The exact placement of the block (using [CSS selectors](url=https://www.w3schools.com/cssref/css_selectors.php)).
  - The date format (using patterns defined by [CLDR](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)).
* Multilingual support.
* Does not modify system files.
* Compatible with the **Journal** theme.

## Restrictions
This module does not work and is not supported for stores using the following domain extensions: `.ru`,`.рф`,`.рус`,`.by`,`.бел`,`.su`.

## Live demo
* [Admin dashboard](https://demo.ocmod.space/a/admin/index.php?route=extension/module/estimated_date)
* Storefront. A few products with different [i]in stock[/i] statuses:
    - [In Stock](https://demo.ocmod.space/a/component/monitor/apple-cinema)
    - [2-3 days](https://demo.ocmod.space/a/camera/canon-eos-5d)
    - [Pre-Order](https://demo.ocmod.space/a/mp3-players/ipod-touch)
    - [Out Of Stock](https://demo.ocmod.space/a/tablet/samsung-galaxy-tab-10-1)
* [Installation video](https://www.youtube.com/watch?v=WIseNlLjN7A)

## License
[End-User License Agreement](../EULA.en.txt)

## Download
[OpenCart Marketplace](https://www.opencart.com/index.php?route=marketplace/extension/info&extension_id=45684)

