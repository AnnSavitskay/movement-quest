function ChallengeCard() {

  const challenges = [
    "Walk 20 minutes and notice 3 new things",
    "Stretch for 10 minutes after lunch",
    "Take a different route today",
    "Walk while listening to a podcast",
    "Spend 15 minutes outdoors"
  ];

  const today =
    new Date().getDate();

  const challenge =
    challenges[
      today % challenges.length
    ];

  return (
    <div
      style={{
        background: "#f8fff8",
        padding: "20px",
        borderRadius: "12px"
      }}
    >
      <h3>
        🎯 Daily Challenge
      </h3>

      <p>{challenge}</p>
    </div>
  );
}

export default ChallengeCard;
