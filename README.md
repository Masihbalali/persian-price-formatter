# Persian Price Formatter

A lightweight npm package for formatting numbers into Persian price format with comma separators and Persian digits (e.g., `230000000` becomes `۲۳۰,۰۰۰,۰۰۰`). It includes a utility function (`formatPersianPrice`) and a React component (`PriceConvertor`) for real-time input formatting in web applications.

## Features

- Convert numbers to Persian digits with comma-separated formatting.
- React component for controlled input with Persian price formatting.
- Supports both Persian and English digit inputs.
- Fully customizable input attributes and error styling via props.
- TypeScript support for type safety.

## Installation

Install the package via npm:

```bash
npm install persian-price-formatter
```

## Usage

### 1. Using the `formatPersianPrice` Function

The `formatPersianPrice` function formats a number or string into Persian price format.

#### Example (Node.js)

```javascript
const formatPersianPrice = require("persian-price-formatter");

console.log(formatPersianPrice(230000000)); // Output: ۲۳۰,۰۰۰,۰۰۰
console.log(formatPersianPrice("1234567")); // Output: ۱,۲۳۴,۵۶۷
console.log(formatPersianPrice("abc")); // Output: ''
```

#### Example (ES Modules)

```javascript
import formatPersianPrice from "persian-price-formatter";

console.log(formatPersianPrice(230000000)); // Output: ۲۳۰,۰۰۰,۰۰۰
```

### 2. Using the `PriceConvertor` React Component

The `PriceConvertor` component provides a controlled input for real-time Persian price formatting. It accepts all standard HTML input attributes as nullable props, plus custom props for currency and error handling.

#### Example (React/Next.js)

```jsx
import { PriceConvertor } from "persian-price-formatter";

function App() {
  return (
    <div className="p-4">
      <h1>Persian Price Input</h1>

      {/* Basic usage with Tailwind CSS */}
      <PriceConvertor
        className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        errorClassName="text-red-500 text-sm mt-1"
      />

      {/* Custom error message and currency */}
      <PriceConvertor
        userCountry="EUR"
        className="border-2 border-blue-400 rounded-md p-3 text-lg"
        errorMessage="Please enter a valid number"
        errorClassName="text-orange-600 text-xs mt-2"
        placeholder="Enter amount in EUR"
        maxLength={12}
      />
    </div>
  );
}

export default App;
```

#### Props for `PriceConvertor`

| Prop             | Type                                          | Default                    | Description                                                            |
| ---------------- | --------------------------------------------- | -------------------------- | ---------------------------------------------------------------------- |
| `userCountry`    | `string`                                      | `'IRR'`                    | Currency code (e.g.,`'IRR'`for تومان,`'EUR'`for €).                    |
| `errorMessage`   | `string`                                      | `'لطفا فقط عدد وارد کنید'` | Custom error message for invalid inputs.                               |
| `errorClassName` | `string`                                      | `''`                       | CSS class for styling the error message.                               |
| `className`      | `string`                                      | `''`                       | CSS class for styling the input element.                               |
| `...inputProps`  | `React.InputHTMLAttributes<HTMLInputElement>` | -                          | Any standard HTML input attributes (e.g.,`disabled`,`maxLength`,`id`). |

#### Behavior

- Accepts both Persian (`۱۲۳۴۵۶۷`) and English (`1234567`) digit inputs.
- Formats input in real-time to Persian digits with commas (e.g., `۱,۲۳۴,۵۶۷`).
- Displays a customizable error message for invalid inputs (e.g., non-numeric).
- Placeholder adjusts based on `userCountry` (e.g., `مبلغ مورد نظر تومان` for IRR).

## API

### `formatPersianPrice(input: number | string): string`

- **Input** : A number or string representing a numeric value.
- **Returns** : A string formatted with Persian digits and commas (e.g., `۲۳۰,۰۰۰,۰۰۰`).
- **Example** :

```javascript
formatPersianPrice(230000000); // Returns '۲۳۰,۰۰۰,۰۰۰'
formatPersianPrice("abc"); // Returns ''
```

## Development

### Prerequisites

- Node.js (v16 or higher)
- npm
- TypeScript (for React component development)

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/persian-price-formatter.git
   ```
2. Install dependencies:
   ```bash
   cd persian-price-formatter
   npm install
   ```
3. Run tests:
   ```bash
   npm test
   ```

### Project Structure

- `index.js`: Core utility function (`formatPersianPrice`).
- `PriceConvertor.tsx`: React component for input formatting.
- `index.test.js`: Jest tests for the utility function.
- `dist/`: Compiled output for the React component (if bundled).

### Testing

The package includes Jest tests for the `formatPersianPrice` function. To run tests:

```bash
npm test
```

To add tests for the `PriceConvertor` component, use React Testing Library.

### Building for React

If you plan to use the `PriceConvertor` component, ensure your project supports TypeScript and React. For bundling:

1. Install dependencies:
   ```bash
   npm install --save-dev typescript @types/react @types/react-dom
   ```
2. Build the package:
   ```bash
   npm run build
   ```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue on the [GitHub repository](https://github.com/yourusername/persian-price-formatter).

## License

MIT License

## Author

balalimasih@gmail.com

## Repository

https://github.com/Masihbalali/persian-price-formatter
