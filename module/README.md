# Estimated Date

The **Estimated Date** module for OpenCart provides delivery date estimations for products and orders, enhancing transparency and customer satisfaction.

Compatible with OpenCart 2.3.x (PHP 5.6) and 3.x/4.x (PHP ≥ 7.x).

Note: The source code is encrypted. For purchase and licensing information, see the OpenCart Marketplace link in the **Download** section.

## Features
* Calculates the estimated delivery date based on:
  - The store's product handling time.
  - The courier service's delivery time.
* Takes holidays and non-working days into account (separately for the store and the delivery company).
* Supports dynamic handling times based on stock status using the product’s <i>Out-Of-Stock Status</i> parameter.
  - This also enables showing alternative stock availability messages on the product page (e.g., "Warehouse").
* Option to override the default stock status display based on delivery relevance.
* Full control over:
  - Where the estimated delivery block is shown (product page, cart, checkout, etc.).
  - Precise placement using [CSS selectors](url=https://www.w3schools.com/cssref/css_selectors.php).
  - Date format via [CLDR](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table)).
* Multilingual support with translation-ready interface.
* No core file modifications.
* Seamless compatibility with the **Journal** theme.

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

