import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = ({ isPending, setIsPending, error, setError }) => {
  let [articles, setArticles] = useState([]);
  console.log(articles);

  const fetchArticles = async () => {
    // Try Catch is a wrapper around a promise.
    // It gives the feel of syncronous code. because the code is written in linear fashion.

    // fetch("url").then().catch().finally()

    // Try Catch is just a modern syntax of handling promises. It was introduced in ES6(2015).
    try {
      setIsPending(true);
      const response = await axios.get("http://localhost:3000/articles");
      setArticles(response.data);
      setIsPending(false);
      setError(null);
    } catch (error) {
      setIsPending(false);
      setError("something went wrong...");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="home">
      <h2>Home</h2>
      <h3>Articles</h3>
      {articles.map((article) => (
        <div className="card" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          {/* /article/sohaib/3 */}
          <Link to={"/article/" + article.id}>Read More...</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
