'use client';
import { useState } from 'react';

type Step = {
  icon: string;
  title: string;
  subtitle: string;
  content: string;
};

type Props = {
  timelineData: Step[];
};

export const JourneyClient = ({ timelineData }: Props) => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setVisibleSteps(prev =>
    prev.includes(index)
      ? prev.filter(i => i !== index) // unmount (hide)
      : [...prev, index] // mount (show)
  );
  };

  return (
    <>
      {/* Icon Nav */}
      <div className="flex justify-center md:justify-start flex-wrap gap-4 mb-8">
        {timelineData.map((step, index) => (
          <button
            key={index}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition duration-300 ${
              visibleSteps.includes(index)
                ? 'bg-[#123458] text-[#F1EFEC]'
                : 'bg-[#D4C9BE] text-[#123458]'
            }`}
            onClick={() => handleClick(index)}
            title={step.title}
          >
            <i className={step.icon}></i>
          </button>
        ))}
      </div>

      {/* Revealed Steps */}
      <div className="space-y-10">
        {visibleSteps.sort().map(index => {
          const step = timelineData[index];
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow p-6 border-l-4 border-[#123458]"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 bg-[#D4C9BE] rounded-full flex items-center justify-center text-[#123458] shadow">
                  <i className={`${step.icon} text-lg`}></i>
                </div>
                <h3 className="text-xl font-semibold text-[#123458]">{step.title}</h3>
              </div>
              <p className="text-sm italic text-[#030303]">{step.subtitle}</p>
              <p className="mt-2 text-[#030303]">{step.content}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
