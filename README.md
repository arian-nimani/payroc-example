# Payroc Payment Example

A React-based payment application that integrates with Payroc payment processing services. This application provides a user-friendly interface for processing both online card payments and ACH bank transfers.

## Features

- **Multiple Payment Methods**: Support for both online card payments and ACH bank transfers
- **Modal-based UI**: Clean, modal-driven interface for payment processing
- **Payroc Integration**: Seamless integration with Payroc payment processing services
- **Responsive Design**: Built with Tailwind CSS for modern, responsive styling
- **Form Management**: Powered by Formik for robust form handling
- **State Management**: Context-based state management for payment flows

## Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Forms**: Formik
- **HTTP Client**: Axios
- **State Management**: React Context API
- **Data Fetching**: TanStack React Query
- **Modal**: React Modal

## Prerequisites

- Node.js (version 20 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd payroc-example
```

2. Install dependencies:
```bash
npm install
```

## Environment Configuration

Create a `.env` file in the root directory with the following environment variables:

```env
VITE_BASE_API_URL="http://localhost:8080"
VITE_SESSION_TOKEN_PATH="/api/transactions/payroc/get_session_token"
```

### Environment Variables

- `VITE_BASE_API_URL`: The base URL for your backend API
- `VITE_SESSION_TOKEN_PATH`: The endpoint path for retrieving session tokens from Payroc

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code quality issues

## Project Structure

```
src/
├── api/                    # API configuration and constants
│   ├── Api.js             # API client setup
│   └── constants.js       # Environment variables and config
├── components/             # Reusable UI components
│   ├── Modal.jsx          # Modal component
│   ├── Typography.jsx     # Typography components
│   └── helpers.js         # Component utilities
├── context/               # React Context providers
│   ├── PaymentContext.jsx # Payment state context
│   ├── PaymentProvider.jsx # Payment provider
│   ├── PayrocContext.jsx  # Payroc-specific context
│   └── PayrocProvider.jsx # Payroc provider
├── transactions/          # Payment-related components
│   ├── components/        # Payment-specific components
│   ├── lib/              # Payment utilities and configs
│   ├── Payroc/           # Payroc-specific payment components
│   │   ├── frames/       # Payment form components
│   │   │   ├── PayrocOnlinePayment.jsx
│   │   │   ├── PayrocAchPayment.jsx
│   │   │   └── components/ # Form sub-components
│   │   ├── PayOnline.jsx # Online payment wrapper
│   │   └── PayWithAch.jsx # ACH payment wrapper
│   └── PaymentMethods.jsx # Main payment methods container
├── App.jsx               # Main application component
└── Home.jsx              # Home page with payment modals
```

## Usage

1. **Opening Payment Modals**: 
   - **Primary Modal**: Click "Open Primary" for the standard payment interface with accordion-style payment methods
   - **Secondary Modal**: Click "Open Secondary" for an alternative instance of the standard payment interface
   - **Tertiary Modal**: Click "Open Tertiary" for a dropdown-based payment method selector

2. **Selecting Payment Method**: 
   - **Accordion Interface** (Primary/Secondary): Choose between "Pay online" (card payments) or "ACH" (bank transfers) using expandable sections
   - **Dropdown Interface** (Tertiary): Select payment method from dropdown menu (None, Card, or ACH)

3. **Processing Payment**: Fill out the required payment information and submit

## Payment Methods

### Online Payments
- Credit/Debit card processing through Payroc
- Secure form handling with validation
- Real-time payment processing

### ACH Payments
- Bank account and routing number input
- ACH transfer processing
- Account verification

## API Integration

The application integrates with Payroc's payment processing services through:

- Session token management via `VITE_SESSION_TOKEN_PATH`
- Payment method configuration
- Transaction processing endpoints
- Context-based state management for payment flows

## Key Components

- **PaymentProvider**: Manages payment state and methods
- **PayrocProvider**: Handles Payroc-specific payment logic
- **Modal System**: Reusable modal component for payment interfaces
- **Form Components**: Specialized forms for card and ACH payments
- **Typography System**: Consistent text styling across the application

