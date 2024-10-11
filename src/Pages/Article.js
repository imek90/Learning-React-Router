import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Article = ({ isPending, setIsPending, error, setError }) => {
  const navigate = useNavigate();
  const params = useParams();
  let [article, setArticle] = useState(null);

  const fetchArticle = async () => {
    try {
      setIsPending(true);
      let response = await axios.get(
        `http://localhost:3000/articles/${params.id}`
      );
      console.log(response);
      setArticle(response.data);
      setIsPending(false);
      setError(null);
    } catch (error) {
      setIsPending(false);
      setError("something went wrong...");
      if(error){
        setTimeout(()=>{
          navigate("/");
        }, 2000)
      }
    }
  };

  useEffect(() => {
    fetchArticle();
  }, []);

  return (
    <div>
      <div>Article # {params.id}</div>
    {article &&  <p>{article.body}</p>}
    </div>
  );
};

export default Article;
