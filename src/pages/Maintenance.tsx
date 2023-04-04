function Maintenance() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
      }}
    >
      <img
        src="construction.png"
        style={{
          height: "175px",
          padding: "1.5em",
          willChange: "filter",
          transition: "filter 300ms",
        }}
        alt="construction icon"
      />
      <h1>Under Maintenance</h1>
      <h2>Please check back later</h2>
    </div>
  );
}

export default Maintenance;
