import React, { useEffect, useState } from "react";
import service from "../appwrite/Conf";
import { Container, PostCard } from "../components";
import PropagateLoader from "react-spinners/PropagateLoader";

function AllPost() {
  const color = "#000000";
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState("");

  useEffect(() => {
    if (posts.length) {
      setLoading("");
    } else {
      setLoading("Loading...");
    }
  }, [posts]);

  async function getPosts() {
    const posts = await service.getPosts([]);
    setPosts(posts.documents);
  }
  getPosts();

  return (
    <div className="w-full py-8">
      {loading.length ? (
        <Container>
          <div className="flex justify-center items-center my-10">
            <PropagateLoader
              color={color}
              loading={loading}
              size={10}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </Container>
      ) : (
        ""
      )}
      {
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Container>
      }
    </div>
  );
}

export default AllPost;
