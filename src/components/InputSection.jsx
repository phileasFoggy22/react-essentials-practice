export default function InputSection({ userInput, onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            id="initialInvestment"
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            id="annualInvestment"
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            id="expectedReturn"
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            id="duration"
            type="number"
            required
            value={userInput.duration}
            onChange={(e) => onChange(e.target.id, e.target.value)}
          />
        </p>
      </div>
    </section>
  );
}
