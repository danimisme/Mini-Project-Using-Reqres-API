const WaveHeader = ({ children }) => {
  return (
    <div className="wave-header">
      {/* wave svg */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#273036"
          fillOpacity={1}
          d="M0,128L48,144C96,160,192,192,288,186.7C384,181,480,139,576,112C672,85,768,75,864,80C960,85,1056,107,1152,144C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      {children}
    </div>
  );
};

export default WaveHeader;
