import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nemo dolorum hic at placeat cumque quos tempore cupiditate. Optio totam facilis laborum aliquam minus, facere sunt ratione, voluptates suscipit a sint quidem quae culpa natus cumque itaque magni cupiditate quam in neque soluta voluptate quo. Commodi tenetur odio doloremque labore?</p>

            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;