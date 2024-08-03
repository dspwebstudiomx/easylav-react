import { useState, useEffect } from 'react';
import axios from 'axios';

const InstaFeed = () => {
  const [feeds, setFeeds] = useState([]);
  const token = import.meta.env.VITE_INSTAGRAM_TOKEN;
  const userId = import.meta.env.VITE_INSTAGRAM_USERID;

  useEffect(() => {
    const fetchFeeds = async () => {
      const response = await axios.get(`https://graph.instagram.com/${userId}/media?access_token=${token}`);
      setFeeds(response.data.data);
    };
    fetchFeeds();
  }, [token, userId]);

  return (
    <div>
      {feeds.map((feed) => (
        <div key={feed.id}>
          <img src={feed.media_url} alt={feed.caption} />
          <p>{feed.caption}</p>
        </div>
      ))}
    </div>
  );
};
export default InstaFeed