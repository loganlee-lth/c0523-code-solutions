type TopicProps = {
  topic: {
    title: string;
    content: string;
  };
  isOpen: boolean;
  onClick: () => void;
};

function Topic({ topic, isOpen, onClick }: TopicProps): JSX.Element {
  return (
    <div className="container" onClick={onClick}>
      <div className="title">{topic.title}</div>
      {isOpen && <div className="content">{topic.content}</div>}
    </div>
  );
}

export default Topic;
