import { Link } from 'react-router-dom';

const RecipeTags = ({ tags }) => {
  return (
    <div className="recipe-tags">
      {tags.map((tag, index) => (
        <Link key={index} to={`/tag/${tag}`} className="tag">
          {tag}
        </Link>
      ))}
    </div>
  );
};

export default RecipeTags;