import { evaluate } from 'mathjs';
import { useCallback, useState } from 'react';

function App() {
  const [val, setVal] = useState('');
  const [result, setResult] = useState('');

  const btn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '*', '+', '-', '/', '=', 'clear'];

  const handleEvaluation = useCallback(
    (value) => () => {
      if (value === 'clear') {
        setResult('');
        setVal('');
      } else if (value === '=') {
        try {
          setResult(evaluate(val).toString());
        } catch (err) {
          setResult(err.toString());
        }
      } else {
        setVal((prev) => prev + value);
      }
    },
    [val]
  );

  return (
    <div className='w-1/2 m-auto bg-gray-400 rounded'>
      <div className='bg-gray-900 text-white flex-col text-end h-16 mt-10'>
        <div className='px-2'>{result}</div>
        <div className='px-2'>{val}</div>
      </div>
      <div className=' text-white grid grid-cols-4 gap-4 mt-4'>
        {btn.map((btnValue) => (
          <button
            onClick={handleEvaluation(btnValue)}
            className='bg-gray-800 rounded py-1 px-2 m-4'
            key={btnValue}
          >
            {btnValue}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
