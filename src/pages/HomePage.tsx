import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>typescript_learning_</h1>
      <div>
        <ul>
          <li>
            <Link to="/typescript-basics-1">Typescriptの基礎</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
