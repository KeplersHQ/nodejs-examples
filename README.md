# Keplers.email Node.js Examples

Production-ready examples for integrating Keplers.email service into your Node.js applications. Choose between SMTP or REST API based on your requirements.

## Examples Overview

### 1. SMTP Example (`smtp-example/`)
Send emails using the traditional SMTP protocol with Nodemailer. Best for applications already using SMTP or requiring direct mail server integration.

**Features:**
- Nodemailer integration
- Secure SMTP connection (port 2525)
- Send plain text and HTML emails
- Message tracking and error handling

**Use When:**
- Migrating from existing SMTP providers
- Need compatibility with legacy systems
- Prefer traditional email sending methods

[View SMTP Example →](./smtp-example/)

### 2. API Example (`api-example/`)
Send emails using Keplers.email REST API with Axios. Recommended for modern applications requiring instant delivery and API-first integration.

**Features:**
- Instant email delivery via `/send-email/instant` endpoint
- Bearer token authentication
- HTML email support
- Variable substitution for personalization
- Comprehensive error handling with detailed status codes

**Use When:**
- Building modern web applications
- Need instant email delivery
- Prefer RESTful API integration
- Require detailed delivery tracking

[View API Example →](./api-example/)

## Quick Start

1. Navigate to the example directory:
```bash
cd smtp-example
```
or
```bash
cd api-example
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
```bash
cp .env.example .env
```

4. Edit `.env` with your credentials

5. Run the example:
```bash
npm start
```

## Prerequisites

- Node.js 14 or higher
- Keplers.email account with SMTP or API credentials

## Support

For more information about Keplers.email, visit the official documentation.
