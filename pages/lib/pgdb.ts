import { Pool } from 'pg';

const connectionString = process.env.POSTGRES_CONNECTION_STRING;

if (!connectionString) {
  throw new Error(
    "Please define the POSTGRES_CONNECTION_STRING variable in your .env.local file. This variable is necessary for establishing a connection to your PostgreSQL database."
  );
}

let cachedPool: Pool | null = null;

export async function connectToDatabase() {
  if (cachedPool) {
    return { pool: cachedPool };
  }

  const pool = new Pool({
    connectionString: connectionString
  });

  cachedPool = pool;

  return { pool };
}
