const ButtonLearnMore = ({ buttonLink, buttonText }) => (
  <div>
    <a href={buttonLink} className="btn-primary">
      {buttonText}
    </a>
  </div>
);

export default ButtonLearnMore;
