import { connectToDatabase } from "@/pages/lib/pgdb";
import { Pool } from "pg";

interface Screenshot {
  kid_id: string;
  data: string;
}

const resolvers = {
  Query: {
    async getScreenshotsByKid(_: any, { kid_id }: { kid_id: string }) {
      const { pool }: { pool: Pool } = await connectToDatabase();
      const result = await pool.query(
        "SELECT * FROM screenshots WHERE kid_id = $1",
        [kid_id]
      );
      return result.rows;
    },
  },

  Mutation: {
    async addScreenshot(_: any, { kid_id, data }: Screenshot) {
      const { pool }: { pool: Pool } = await connectToDatabase();
      const result = await pool.query(
        "INSERT INTO screenshots(kid_id, data) VALUES ($1, $2) RETURNING *",
        [kid_id, data]
      );
      return result.rows[0];
    },
  },
};

export default resolvers;
