import { useState } from 'react';
import Topic from './Topic';
import './Accordion.css';

type AccordionProps = {
  topics: {
    title: string;
    content: string;
  }[];
};

function Accordion({ topics }: AccordionProps): JSX.Element {
  const [openTopic, setOpenTopic] = useState<number | null>(null);

  return (
    <div>
      {topics.map((topic, index) => (
        <Topic
          key={index}
          topic={topic}
          isOpen={openTopic === index}
          onClick={() => setOpenTopic(openTopic === index ? null : index)}
        />
      ))}
    </div>
  );
}

export default Accordion;
