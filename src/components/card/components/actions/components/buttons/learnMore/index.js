const ButtonLearnMore = ({ buttonLink, buttonText }) => (
  <div>
    <a
      href={buttonLink}
      className="bg-blue-500 text-white px-4 py-2 mt-4 rounded hover:bg-blue-600 transition-colors duration-300"
    >
      {buttonText}
    </a>
  </div>
);

export default ButtonLearnMore;
