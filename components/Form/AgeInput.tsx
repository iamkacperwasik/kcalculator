import useBodyInfoStore from "hooks/useBodyInfoStore";

const AgeInput = () => {
  const { age, setAge } = useBodyInfoStore();

  return (
    <div>
      <p>Age:</p>
      <input
        type="number"
        className="border-[1px]"
        value={age === null || age === 0 ? "" : age}
        onChange={({ target }) => setAge(+target.value)}
        min={1}
      />
    </div>
  );
};

export default AgeInput;
