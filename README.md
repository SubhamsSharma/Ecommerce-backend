### Ecommerce-backend

A Node.js Express backend for an e-commerce application. Implements product functionality with modular controllers, routes, middleware, and a seeder to populate initial data. Designed to be paired with a frontend (not included).

---

### Features
- **RESTful API** for products
- **Modular structure** with separate controllers, routes, models, and middleware
- **Seeder** to populate the database with initial sample data
- **Environment configuration** via a .env file
- **Ready for deployment** to any Node hosting or container platform

---

### Repository Structure
- **index.js** — application entry point
- **models** — Mongoose models for Products and related schemas
- **controllers** — request handlers and business logic
- **routes** — Express route definitions
- **middleware** — authentication, error handling, and helpers
- **seeder.js** — script to seed the database with sample data
- **package.json** — scripts and dependencies
- **.env** — environment variables (not checked in)

---

### Requirements
- **Node.js** v16+ recommended
- **npm** or **yarn**
- **MongoDB** instance (local or cloud)

---

### Setup and Installation
1. Clone the repository
   ```bash
   git clone https://github.com/SubhamsSharma/Ecommerce-backend.git
   cd Ecommerce-backend
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Create a .env file at project root with at least the following variables
   - **PORT** e.g. 5000
   - **MONGO_URI** your MongoDB connection string
   - **JWT_SECRET** a secure secret for signing tokens
   - **NODE_ENV** development or production

4. Seed the database (optional)
   ```bash
   node seeder.js
   ```

5. Start the server
   ```bash
   node index.js
   ```
   or for development in watch mode (if configured)
   ```bash
   node --watch index.js
   ```

---

### Available Scripts
- **node --watch index.js** — start in development mode in watch mode ()
- **node seeder.js** — seed the database with sample data

---

### Environment Variables Example
Create a file named `.env` and add:
```env
PORT=5000
MONGO_URI=your_mongo_connection_string

```

---

### API Overview
- **Products**
  - List products 
- **Cart**
 - Get Cart
 - Add to cart
 - remove from cart
- **Reciept**
 -generate mock reciept

---

### Testing and Debugging Tips
- Ensure **MONGO_URI** is correct and reachable
- Use Postman or similar tools to exercise endpoints
- Check console logs for stack traces when debugging


---

### Deployment Notes
- Set environment variables on your hosting provider
- Use a process manager like **PM2** for production
- Configure CORS and HTTPS at the hosting or reverse-proxy layer

---

### Contribution
- Fork the repo, make a feature branch, and open a pull request
- Keep code modular and add tests for new behavior
- Follow existing code style and patterns in controllers and routes

---

### License
Add license file if needed or replace this section with your chosen license details

---

### Contact
- Repository owner: **Shubham Sharma**
- GitHub: SubhamsSharma

---

### Demo Video Placeholder
- **YouTube Demo**:https://youtu.be/CfiW_nTQbGc

---
