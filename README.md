# Dify API Integration

A Next.js application that integrates with the Dify API to process messages and store responses locally.

## Features

- Integration with local Dify API
- Local storage of API responses
- TypeScript support
- Simple and clean UI
- Error handling
- Environment variable configuration

## Prerequisites

- Node.js 16.x or higher
- pnpm
- Local Dify container running
- Dify API key

## Quick Start

1. Clone the repository

```bash
git clone https://github.com/yourusername/dify-api-integration.git
cd dify-api-integration
```

2. Install dependencies

```bash
pnpm install
```

3. Configure environment variables

Create a `.env.local` file in the root directory:

```env
# .env.local
DIFY_API_KEY=your-dify-api-key-here
```

To get your Dify API key:
1. Access your local Dify application
2. Go to API Access section
3. Copy the API key
4. Paste it in your `.env.local` file

4. Create required directories

```bash
mkdir data
```

5. Start the development server

```bash
pnpm dev
```

The application will be available at `http://localhost:3000`

## Project Structure

```
dify-api-integration/
├── data/              # Stored API responses
├── lib/               # Utility functions
├── pages/             # Page components
│   ├── api/          # API routes
│   └── index.tsx     # Main page
├── types/            # TypeScript definitions
├── .env.local        # Environment variables
├── package.json
└── tsconfig.json
```

## API Integration

The application integrates with a local Dify API instance. Make sure your Dify container is running and accessible at the configured URL.

Default API endpoint: `http://localhost:5001/v1/completion-messages`

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| DIFY_API_KEY | Your Dify API key | Yes |

## Development

To start development:

1. Ensure all prerequisites are met
2. Configure environment variables
3. Run the development server
4. Make changes to the code
5. Test your changes

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License
--

## Support

For support, please open an issue in the GitHub repository.