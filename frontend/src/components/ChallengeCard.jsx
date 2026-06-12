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
    <div className="challenge-card">
      <h3>
        🎯 Daily Challenge
      </h3>

      <p>{challenge}</p>
    </div>
  );
}

export default ChallengeCard;
