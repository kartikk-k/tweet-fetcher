# Tweet Viewer App

A Next.js application that allows you to view tweets by their ID.

## Features

- View tweets by providing a tweet ID in the URL
- Real-time tweet data fetching using react-tweet
- Loading and error state handling
- Client-side rendering

## Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd my-next-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

To view a tweet, append the tweet ID as a query parameter to the URL:

```
http://localhost:3000?id=<tweet-id>
```

For example:
```
http://localhost:3000?id=123456789
```

## Technologies Used

- Next.js
- React
- react-tweet
- TypeScript

## Project Structure

- `src/app/page.tsx` - Main page component that handles tweet viewing
- `src/app/layout.tsx` - Root layout component
- `public/` - Static assets

## License

MIT
