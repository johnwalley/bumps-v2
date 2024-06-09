export default function Game() {
  const numCrews = 18;

  const arr = Array.from({ length: numCrews }, (value, index) => index);

  const start = arr.map((i) => i * 20);

  const speed = arr.map((i) => Math.random() + i / 30);

  const bumps = [];

  const bumped = arr.map(() => false);

  const keep = [];

  // Find intersections
  for (let i = 0; i < numCrews; i++) {
    for (let j = i + 1; j < numCrews; j++) {
      const x = (start[j] - start[i]) / (speed[i] - speed[j]);

      if (x > 0 && x < 100) {
        bumps.push([i, j, x]);
      }
    }
  }

  bumps.sort((a, b) => a[2] - b[2]);

  for (let i = 0; i < bumps.length; i++) {
    if (bumped[bumps[i][0]] || bumped[bumps[i][1]]) {
      continue;
    }

    bumped[bumps[i][0]] = true;
    bumped[bumps[i][1]] = true;

    keep.push(bumps[i]);
  }

  const end = arr.map(() => 100);

  for (let i = 0; i < numCrews; i++) {
    for (let j = 0; j < keep.length; j++) {
      if (i === keep[j][0] || i === keep[j][1]) {
        end[i] = keep[j][2];
      }
    }
  }

  console.log(start, end);

  return (
    <div>
      <h1>Game</h1>
      <svg height="1000">
        {arr.map((i) => (
          <line
            key={i}
            x1={0}
            x2={end[i]}
            y1={start[i]}
            y2={start[i] + end[i] * speed[i]}
            stroke="black"
          />
        ))}
      </svg>
    </div>
  );
}
