// src/CreditScoreMeter.js
import React from 'react';

const getScoreColor = (score) => {
  if (score >= 750) return 'bg-green-500';
  if (score >= 700) return 'bg-yellow-500';
  if (score >= 650) return 'bg-orange-500';
  return 'bg-red-500';
};

const CreditScoreMeter = ({ score }) => {
  const scoreColor = getScoreColor(score);
  const scoreWidth=score/9;
  return (
    <div className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Credit Score Meter</h1>
      <div className="w-full bg-gray-300 h-8 rounded-full overflow-hidden ">
        <div className={`${scoreColor} h-full text-center text-white`} style={{ width: `${scoreWidth}%` }}>
          
        </div>
      </div>
      <div className="mt-2 text-sm">
        <span className="font-bold">Score: </span>{score}
      </div>
    </div>
  );
};

export default CreditScoreMeter;
