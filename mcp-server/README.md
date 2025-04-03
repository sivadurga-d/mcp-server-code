# MCP Server for Integration Testing

This project is a simple MCP (Microservices Communication Protocol) server designed to run integration tests through automation in the browser. It provides a structured way to handle test execution and result retrieval.

## Project Structure

```
mcp-server
├── src
│   ├── server.ts          # Entry point of the MCP server
│   ├── routes             # Contains route definitions
│   │   └── index.ts       # Route setup
│   ├── controllers        # Contains business logic
│   │   └── index.ts       # Test controller
│   └── utils              # Utility functions
│       └── helpers.ts     # Helper functions for the server
├── package.json           # NPM configuration
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd mcp-server
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Compile TypeScript:**
   ```
   npm run build
   ```

4. **Run the server:**
   ```
   npm start
   ```

## Usage

- The server exposes endpoints for running integration tests and retrieving results. 
- **Dashboard Testing Endpoints:**
  - `POST /api/dashboard/run-tests`: Run dashboard tests.
  - `GET /api/dashboard/test-results`: Retrieve dashboard test results.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.