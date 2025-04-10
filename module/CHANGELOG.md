# Change log

## [1.4.1] - 2025-04-10:
### Fixed
- OC 4.x compatibility.
### Internals
- Minor code improvements.

## [1.4.0] - 2025-03-29:
### Added
- OC 2.3.x compatibility.
### Internals
- Some changes for better OC/PHP versions cross-compatibility.
- Improved option help entries.

## [1.3.6] - 2025-03-26:
### Fixed
- POI indexes calculation.

## [1.3.5] - 2025-03-24:
### Internals
- Rearranging some files.

## [1.3.4] - 2025-02-14:
### Fixed
- Check for the availability of the `IntlDateFormatter` class (the `Intl` PHP module).
- Ukrainian localization.
- Minor admin UI fixes.

## [1.3.3] - 2025-02-06:
### Fixed
- Multilanguage.
### Internal
- Minor improvements.

## [1.3.2] - 2024-12-04:
### Added
— Ability to load script from the page footer to prevent delaying the main content loading.

## [1.3.1] - 2024-08-17:
### Fixed
- Localized names of stock statuses.

## [1.3.0] - 2024-07-16:
### Changed
- Algorithm for changing displaying product stock status depending on the product availability and store and module parameters.

## [1.2.5] - 2024-06-04:
### Added
- Custom separator to divide dates in a period.
### Changed
- Admin interface improvements.
### Fixed
- Product card *Availability* status.

## [1.2.4] - 2024-06-03:
### Changed
- Approach to the use of `Out of stock` statuses as the kind of `In stock` statuses of products.

## [1.2.3] - 2024-06-01:
### Fixed
- Displaying messages in emails.

## [1.2.2] - 2024
## [1.3.2] - 2024-12-04:
### Added
— Ability to load script from footer or header.
- Significant code improvements.

## [1.2.1] - 2024-05-27:
### Changed
- Handling days could be a period now, e.g., `1-3`.
- Now it calculate individual estimated date/period for each product and the latest estimated date/period for cart/checkout.
### Added
- Individual estimated date/period for each product in depending on stock availability or selected `Out of stock` status.
- The latest date or period for the cart or checkout pages (if the corresponding products are in the cart).
- Debug options for checking calculations.
### Internal
- Code improvements.

## [1.1.4] - 2024-05-25:
### Fixed
- Wrong `timezone` variable name.

## [1.1.3] - 2024-03-21:
### Internal
- Minor changes.

## [1.1.2] - 2024-01-22:
### Fixed
- PHP 8.1+ compatibility (PHP Unknown:  htmlentities(): Passing null to parameter #2 ($flags) of type int is deprecated.)

## [1.1.1] - 2024-01-22:
### Changed
- Journal 3 compatibility was moved to the separate addon.
### Fixed
- Summernote CSS style compatibility with the OC 3.x version older than `3.0.3.8`.

## [1.1.0] - 2023-12-11:
### Added
- Ability to insert the message almost on every page.

## [1.0.0] - 2023-12-07:
- First release
