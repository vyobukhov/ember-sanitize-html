# ember-sanitize-html

A wrapper around the [sanitize-html](https://github.com/punkave/sanitize-html/) library for use in ember-cli projects


## Installation

* `ember install ember-sanitize-html`

## Usage

### Component
```handlebars
{{sanitize-html value="YOUR HTML" options=options}}
```

### Util
```javascript
sanitizeHtml('YOUR HTML', options)
```
or
```javascript
import sanitize from 'ember-sanitize-html/utils/sanitize-html'
sanitize('YOUR HTML', options)
```

## Available options
See original library [sanitize-html](https://github.com/punkave/sanitize-html/)