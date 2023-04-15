import classNames from "classnames";

const CardActions = ({ children, className, ...rest }) => {
  const classes = classNames("flex justify-between", className);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default CardActions;
