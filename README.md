# Threads Backend

This is a **GraphQL backend** inspired by Threads, built with:

- **Express.js** + **Apollo Server**
- **Prisma ORM** with PostgreSQL
- **JWT authentication**
- **Deployed on Render**

---

## 🚀 Features
- User authentication (signup / login)
- Post creation and fetching
- GraphQL API with schema-first design
- Secure token-based auth
- Prisma as ORM (Postgres)

---

## 📂 Project Structure
```
src/
 ├── graphql/        # Schema & resolvers
 ├── lib/            # Database client
 ├── service/        # User & post services
 └── server.ts       # App entrypoint
```

---

## ⚡ Getting Started

### 1. Clone repo
```bash
git clone https://github.com/<your-username>/threads-backend.git
cd threads-backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment
Create a `.env` file:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/threads
PORT=8000
JWT_SECRET=your_secret_here
```

### 4. Run migrations
```bash
npx prisma migrate dev
```

### 5. Start dev server
```bash
npm run dev
```

Server runs at:
```
http://localhost:8000/graphql
```

### 6. Production build
```bash
npm run build
npm start
```

---

## 🌐 Deployment
This project is live on **Render**:  
👉 [threads-backend-if44.onrender.com/graphql](https://threads-backend-if44.onrender.com/graphql)

---

## 🛠 Tech Stack
- **Node.js** / **Express.js**
- **Apollo Server** (GraphQL)
- **Prisma ORM**
- **PostgreSQL**
- **JWT authentication**
- **Render (deployment)**

---

## 📜 License
MIT
