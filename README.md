# Teleo App - Screenshot Feature
## Context
Teleo Take-Home is built using Nextjs, integrated with Apollo GraphQL engine over a PostgreSQL database. Activities span various HTML elements like canvases, text inputs, and video elements.

## Task Response

### Part 1

#### A. Screenshot Generation Approaches

1. **Using `html2canvas`**:
    - **Pros**: Easy to use, wide support for different elements, and actively maintained.
    - **Cons**: Might not perfectly replicate the screen because it's essentially redrawing the content.
    - **Recommendation**: Suitable for most use cases and great for quick implementation.

2. **Using the Screen Capture API**:
    - **Pros**: Accurate capture because it gets data directly from the browser.
    - **Cons**: Limited browser support.
    - **Recommendation**: Use when accuracy is paramount and you're certain about user browser preferences.

3. **Using Puppeteer in Node.js backend**:
    - **Pros**: Provides a high-quality screenshot and can be used for multiple backend processes.
    - **Cons**: Overkill for client-side operations, more suited for server-side tasks.
    - **Recommendation**: If there's a plan to integrate more features that could leverage Puppeteer, consider this.

**Final Recommendation**: Starting with `html2canvas` due to its simplicity and wide support.

#### B. Screenshot Storage

1. **AWS S3 Bucket**: Secure and scalable cloud storage. Integrates well with AWS-based applications and provides a pay-as-you-go model.
2. **Database (as a BLOB)**: Store it directly in PostgreSQL as binary data.
    - Not recommended for large-scale storage due to performance concerns.
3. **Content Delivery Network (CDN)**: For fast retrievals and to offload traffic from main servers.

**Recommendation**: Use AWS S3 for storing screenshots due to scalability, security, and integration ease with AWS-based applications.

### Part 2

The React component, as implemented above, showcases screenshots saved for a particular kid. The data is mocked for demonstration. Edge cases include handling large images, non-image data, and missing data, wrong kid id. In the v0 release, handling missing data would be the priority.

---

## Project Setup Guide

```bash
git clone [REPOSITORY_LINK]
cd [REPOSITORY_NAME]
docker compose up
yarn migrate
yarn seed
yarn dev
```