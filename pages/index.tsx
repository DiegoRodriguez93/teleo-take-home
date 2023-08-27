import { useQuery, gql } from "@apollo/client";
import Image from "next/image";

import styles from "./Home.module.css";

const SCREENSHOTS_QUERY = gql`
  query ScreenshotsQuery($kidId: ID!) {
    getScreenshotsByKid(kid_id: $kidId) {
      id
      thumbnail
      created_at
    }
  }
`;

const Home = () => {
  // Bring this from auth token
  const kidId = 1;

  const { loading, error, data } = useQuery(SCREENSHOTS_QUERY, {
    variables: { kidId: kidId },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <div className={styles.container}>
      <div className={styles.title}>Screenshots</div>
      {data.getScreenshotsByKid.map(
        (screenshot: { id: number; thumbnail: string; created_at: Date }) => (
          <div key={screenshot.id} className={styles.screenshot}>
            <Image
              src={screenshot.thumbnail}
              alt={`Screenshot from ${screenshot.created_at}`}
              width={300}
              height={300}
            />
          </div>
        )
      )}
    </div>
  );
};

export default Home;
