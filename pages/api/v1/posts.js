import axios from "axios";

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "POST": {
      const { body } = req;
      const data = JSON.stringify(body);
      return res.json(data);
    }
    default: {
      const response = await axios.get(
        "http://jsonplaceholder.typicode.com/posts"
      );
      const posts = response.data;
      return res.json(posts.slice(0, 10));
    }
  }
};
