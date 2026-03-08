(function () {
  const sayings = [
    "Satoshium is an experiment in verifiable intelligence — built slowly, in public.",
    "Truth first. Systems second. Intelligence built on both.",
    "Build slowly. Verify everything. Let the system speak for itself.",
    "Satoshium is being built in public — one tool, one system, one step at a time.",
    "A system built on truth, executed with intelligence.",
    "If truth is the foundation, intelligence can be built on top of it.",
    "Satoshium is a long-term experiment in building intelligence on verifiable foundations.",
    "Bitcoin verifies truth. AI builds capability. Satoshium explores what happens when they work together.",
    "Small tools. Real progress. Systems that can prove what they do.",
    "Trust the rules. Verify the systems. Let intelligence emerge.",
    "Open development. Verifiable systems. Intelligence built step by step.",
    "Satoshium explores how intelligence systems can be built on cryptographic truth.",
    "Built carefully. Verified openly. Designed for the long arc.",
    "When truth is verifiable, intelligence systems can be trusted.",
    "Real systems. Verifiable rules. Intelligence built in the open.",
    "Satoshium explores how intelligence can be governed by rules instead of trust.",
    "Build what matters. Verify what ships. Keep the rest honest.",
    "Visible progress is stronger than promises.",
    "A calm build is still a real build.",
    "The system should prove itself.",
    "Trust should be minimized. Verification should be normal.",
    "Progress should be inspectable, not imagined.",
    "Architecture first. Expansion second.",
    "Shared knowledge makes trustworthy systems possible.",
    "Verification is the beginning of trust, not the end of it.",
    "Intelligence becomes more durable when it can be audited.",
    "What is built slowly can still become foundational.",
    "The long arc belongs to disciplined systems.",
    "A real platform is built one coherent layer at a time.",
    "Satoshium is building toward intelligence that can be inspected, not merely believed."
  ];

  const target = document.getElementById("random-saying");
  if (!target) return;

  const index = Math.floor(Math.random() * sayings.length);
  target.textContent = sayings[index];
})();
