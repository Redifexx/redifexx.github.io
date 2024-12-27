import React from "react"
import '../styles/CenteredRectangle.css'

interface CenteredRectangleProps
{
    children?: React.ReactNode;
}

const CenteredRectangle: React.FC<CenteredRectangleProps> = ({ children }) => {
    return <div className="rectangle">{children}</div>;
};

export default CenteredRectangle;