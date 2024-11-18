const Background = ({ children }) => {
  return (
    <div className="container ">
      <div className="gradient-circle"></div>
      <div className="grid-background">{children}</div>
    </div>
  );
};

export default Background;
